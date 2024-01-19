import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>読書管理アプリ</h1>
      <div className="headerLink">
        <Link to="/">一覧</Link>
        <Link to="/create">作成</Link>
        <Link to="/test">テスト</Link>
      </div>
    </header>
  );
}

export default Header;
