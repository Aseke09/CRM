import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trash2, Check } from "lucide-react";
import styles from "./ApplicationsPage.module.css";

const ApplicationsPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const [appUser] = useState<string>("Тестовый Юзер");
  const [text, setText] = useState<string>("");

  const handleApprove = () => {
    alert("Принято");
  };
  const handleDelete = () => {
    alert("Удалено");
  };

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumbs}>
        <span className={styles.bcLink}>{t("apps.list")}</span>
        <span className={styles.badge}>#{id ?? "124581"}</span>
        <span className={styles.badge}>{appUser}</span>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>#{id ?? "124581"}</span>
        <span className={styles.label}>{appUser}</span>
        <label className={styles.label}>{t("apps.textLabel", "Текст  заявки")}</label>
        <textarea
          className={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("apps.textPlaceholder", "Введите текст заявки")}
        />
        
      </div>
      <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnDelete}`}
            onClick={handleDelete}
          >
            <Trash2 size={16}  color="var(--color-primary-800)"/>
            {t("apps.delete")}
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnApprove}`}
            onClick={handleApprove}
          >
            <Check size={16} />
            {t("apps.approve")}
          </button>
        </div>
    </div>
  );
};

export default ApplicationsPage;
