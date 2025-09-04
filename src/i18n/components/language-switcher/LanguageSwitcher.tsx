import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

type Lang = "kz" | "ru";
const ORDER: Lang[] = ["kz", "ru"]; 

export const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language) as Lang;

  const switchTo = (lng: Lang) => {
    if (lng === current) return;
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className={styles.wrap} role="tablist" aria-label="Language switcher">
      {ORDER.map((lng) => {
        const active = current.startsWith(lng);
        return (
          <button
            key={lng}
            role="tab"
            aria-selected={active}
            className={`${styles.item} ${active ? styles.active : ""}`}
            onClick={() => switchTo(lng)}
          >
            {t(`lang.${lng}`)}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;