import { Link } from "react-router-dom";
import styles from "./Documents.module.css";

const Documents = () => {
  // id, date, name, document
  // const data = useLoaderData();
  const data = [
    {
      name: "lorem",
      id: 1,
      date: "30 May 2023",
    },
    {
      name: "loremloremloremloremloremloremlorloremloremlormeemloremloremlorem",
      id: 3,
      date: "30 May 2023",
    },
    {
      name: "lorem",
      id: 4,
      date: "30 May 2023",
    },
    {
      name: "lorem",
      id: 45,
      date: "30 May 2023",
    },
    {
      name: "lorem",
      id: 40,
      date: "30 May 2023",
    },
  ];

  return (
    <div className={styles.documents}>
      <ul>
        {data.map((doc) => {
          return (
            <li key={doc.id}>
              <p>
                {doc.date} &nbsp; <span>»</span>{" "}
              </p>
              <Link to={`/documents/${doc.id}`}>{doc.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Documents;
