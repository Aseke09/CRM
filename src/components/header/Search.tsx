import { useState } from "react";
import styles from "./Header.module.css";

const Search: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.search} ${expanded ? styles.expanded : ""}`}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
    >
      <button className={styles.searchBtn} type="button">
        <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <input
        className={styles.searchInput}
        placeholder=""
        type="text"
      />
    </div>
  );
};

export default Search;
