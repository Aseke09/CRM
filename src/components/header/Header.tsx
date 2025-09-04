import React from "react";
import LanguageSwitcher from "../../i18n/components/language-switcher/LanguageSwitcher";
import styles from "./Header.module.css";
import Search from "./Search";
import UserAvatar from "./UserAvatar";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  
  const titleKey = React.useMemo(() => {
    if (pathname.startsWith("/applications")) return "nav.applications";
    if (pathname.startsWith("/projects"))     return "nav.projects";
    if (pathname.startsWith("/profile"))      return "nav.profile";
    if (pathname.startsWith("/dashboard"))    return "nav.home";
    return ""; 
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {titleKey && <h1 className={styles.title}>{t(titleKey)}</h1>}
      </div>

      
      <div className={styles.right}>
        <Search />
        <LanguageSwitcher />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;