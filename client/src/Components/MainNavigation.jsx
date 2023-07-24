import { Link, NavLink } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>Docs</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to={`documents/${uuidV4()}`}>Create Document</NavLink>
          </li>
          <li>
            <NavLink to={"logout"}>Sign Out</NavLink>
          </li>
          <li>
            <NavLink to={"auth?mode=login"}>Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
