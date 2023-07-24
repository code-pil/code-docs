import TextEditor from "./Components/TextEditor";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth, Root } from "./Pages";
import { Documents } from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Documents /> },
      { path: "/auth", element: <Auth /> },
    ],
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
