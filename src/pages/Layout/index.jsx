import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import UsernameRequiredWrapper from "../../components/UsernameRequiredWrapper";

import styles from "./index.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <UsernameRequiredWrapper>
        <Outlet />
      </UsernameRequiredWrapper>
    </div>
  );
}
