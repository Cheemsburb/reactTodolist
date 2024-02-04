import React from "react";
import HeaderStyle from './Header.module.css'

const Header = () => {
  return (
    <div className={HeaderStyle.header}>
      <p className={HeaderStyle.title}>TODO LIST</p>
    </div>
  );
};

export default Header;
