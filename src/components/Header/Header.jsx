import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__menu-item">
        <Link to="/">Main Page</Link>
      </div>
      <div className="header__menu-item">
        <Link to="/search" />
      </div>
      <div className="header__menu-item">
        <Link to={null} />
      </div>
      <div className="header__menu-item">
        <Link to={null} />
      </div>
      <div className="header__menu-item">
        <Link to={null} />
      </div>
      <div className="header__menu-item">
        <Link to={null} />
      </div>
      <div className="header__menu-item">
        <Link to={null} />
      </div>
      <div className="header__menu-item">
        <Link to={null} />
      </div>
      <div className="header__menu-item">
        <Link to={null} />
      </div>
    </div>
  );
}
