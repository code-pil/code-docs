    import { MainNavigation } from "../Components";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
