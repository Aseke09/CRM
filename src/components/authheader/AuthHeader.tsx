import React from "react";
import LanguageSwitcher from "../../i18n/components/language-switcher/LanguageSwitcher";
import styles from "./AuthHeader.module.css";
import { useTranslation } from "react-i18next";
import Logo from "../sidebar/Logo";

const AuthHeader: React.FC = () => {
    const { t } = useTranslation();
    
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo />
        <span className={styles.dot}>|</span>
        <span className={styles.product}>{t("auth.productTagline")}</span>
      </div>

      <div className={styles.right}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default AuthHeader;
