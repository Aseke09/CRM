import React from "react";
import AuthHeader from "../authheader/AuthHeader";
import styles from "./AuthLayout.module.css";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.shell}>
      <AuthHeader />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AuthLayout;
