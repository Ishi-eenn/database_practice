import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>読書管理アプリ</h1>
      <div className="headerLink">
        <Link to="/">一覧</Link>
        {/* <Link to="/create">test</Link> */}
        <Link to="/search">検索</Link>
      </div>
    </header>
  );
}

export default Header;
