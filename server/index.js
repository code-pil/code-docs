const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const DocSchema = require("./db/models/document.js");

dotenv.config();

try {
  connectDB(process.env.MONGO_URI);
} catch (err) {
  console.log(err);
}

const io = require("socket.io")(process.env.PORT || 3001, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDoc(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.document);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (document) => {
      await DocSchema.findByIdAndUpdate(documentId, { document });
    });
  });
});

const defaultValue = "";

const findOrCreateDoc = async (id) => {
  if (id == null) return;

  const document = await DocSchema.findById(id);

  if (document) return document;

  return await DocSchema.create({ _id: id, document: defaultValue });
};
