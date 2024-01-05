import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>title</h1>
      <div className="headerLink">
        <Link to="/">一覧</Link>
        <Link to="/create">作成</Link>
      </div>
    </header>
  );
}

export default Header;
