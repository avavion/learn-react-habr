import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      <h1>Компонент: Header.js</h1>
      <div className="container">
        <nav className="header-nav">
          <div className="header-nav__logo">
            <h3>Логотип сайта</h3>
          </div>
          <ul className="header-nav__list">
            <li className="header-nav__list-item">
              <a href="#" className="header-nav__list-link">
                Ссылка
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
