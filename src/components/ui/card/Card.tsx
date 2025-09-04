import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => {
  return (
    <div onClick={onClick} className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
