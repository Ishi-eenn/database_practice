import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>title</h1>
      {/* <input name="query" onChange={(e) => {console.log(e.target.value)}}/> */}
      <div className="headerLink">
        <Link to="/">ホーム</Link>
        <Link to="/create">記事</Link>
        <Link to="/login">log in</Link>
        <Link to="/logout">log out</Link>
      </div>
    </header>
  );
}

export default Header;
