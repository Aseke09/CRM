import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Box, Grid2x2, CircleUserRound, ChevronDown, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";


const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo />
        </div>
        <button className={styles.burger} aria-label="Toggle menu">
          <Menu size={28} />
        </button>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/dashboard" className={({isActive}) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          <Home 
            size={20} 
            className={styles.icon}
          />
          <span className={styles.text}>{t("nav.home")}</span>
        </NavLink>

        <NavLink to="/applications" className={({isActive}) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          <Box 
            size={20} 
            className={styles.icon}
          />
          <span className={styles.text}>{t("nav.applications")}</span>
        </NavLink>

        <div className={styles.group}>
          <NavLink to="/projects" className={({isActive}) =>
            `${styles.link} ${isActive ? styles.active : ""}`}>
            <Grid2x2 
              size={20} 
              className={styles.icon}
            />
            <span className={styles.text}>{t("nav.projects")}</span>
            <ChevronDown size={18} className={styles.tail}/>
          </NavLink>
        </div>

        <NavLink to="/profile" className={({isActive}) =>
          `${styles.link} ${isActive ? styles.active : ""}`}>
          <CircleUserRound 
            size={20} 
            className={styles.icon}
          />
          <span className={styles.text}>{t("nav.profile")}</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;


