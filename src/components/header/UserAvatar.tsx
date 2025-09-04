import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth"; 

const UserAvatar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      title="Выйти"
      style={{
        width: 32,
        height: 32,
        borderRadius: 4,
        border: "1px solid var(--color-gray-300)", 
        color: "var(--color-gray-300)",
        background: "transparent",
        display: "grid",
        placeItems: "center",
        fontSize: 16,
        fontWeight: 600,
        cursor: "pointer"
      }}
    >
      UT
    </button>
  );
};

export default UserAvatar;
