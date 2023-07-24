import TextEditor from "./TextEditor";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={`/documents/${uuidV4()}`} />,
  },

  {
    path: "/documents/:id",
    element: <TextEditor />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

//some additional line added
