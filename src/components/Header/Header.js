import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="header-nav">
          <div className="header-nav__logo">
            <h1 className="header-nav__logo-title">Компонент: Header</h1>
          </div>
          <ul className="header-nav__list">
            <li className="header-nav__list-item">
              <a className="header-nav__list-link" href="#">
                Элемент меню
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
