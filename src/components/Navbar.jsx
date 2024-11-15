import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaSearch, FaSignOutAlt, FaUserCircle } from "react-icons/fa";  // Import các biểu tượng từ react-icons

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);  // Trạng thái hiển thị menu

  const handleAvatarClick = () => {
    setMenuVisible(!menuVisible);  // Đổi trạng thái menu khi nhấp vào avatar
  };

  const handleLogout = () => {
    console.log("Đăng xuất");
    // Thực hiện hành động đăng xuất ở đây
  };

  return (
    <div className="navbar">
      <div className="logo">
        ChatApp
      </div>
      <div className="search">
        <input type="text" placeholder="Search for a user..." />
        <button className="search-icon">
          <FaSearch />
        </button>
      </div>
      <div className="user-avatar" onClick={handleAvatarClick}>
        <img
          src="https://lienquan.garena.vn/wp-content/uploads/2024/05/b1a3864a554067fd8581d50a6cbd20755d5545baeb2b01.jpg"
          alt="User Avatar"
        />
        {/* Hiển thị menu nếu menuVisible là true */}
        <div className={`avatar-menu ${menuVisible ? "show" : ""}`}>
          <div className="menu-item">
            <FaUserCircle /> Profile
          </div>
          <div className="menu-item" onClick={handleLogout}>
            <FaSignOutAlt /> Đăng xuất
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
