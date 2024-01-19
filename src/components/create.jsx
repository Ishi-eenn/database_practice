import { useState } from "react";
import "./create.css";
import { postToDoList } from "../api.js";

function Create() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const buttonCleckd = async () => {
    const data = {
      title: title,
      description: text,
    };
    await postToDoList(data);
  }

  return (
    <div className="CreatePage">
      <div className="CreateContainer">
        <h1>リストに追加</h1>
        <div className="inputPage">
          <div>タイトル</div>
          <input type="text"
                placeholder="タイトルを記入"
                onChange={(e) => {
                  setTitle(e.target.value)}}
          />
          <div>本文</div>
          <textarea placeholder="本文を記入" onChange={(e) => {setText(e.target.value)}}/>
        </div>
        <button onClick={buttonCleckd}>保存</button>
      </div>
    </div>
  );
}

export default Create;
