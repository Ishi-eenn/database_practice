import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, serverTimestamp } from "../firebase";
import "./create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const buttonCleckd = async () => {
    const addToDo = async () => {
      await addDoc(collection(db, "toDoList"), {
      title: title,
      text: text,
      timestamp: serverTimestamp(),
    })};
    await addToDo();
    setTitle("");
    setText("");
    window.location.href = "/";
  }

  return (
    <div className="CreatePage">
      <div className="CreateContainer">
        <h1>リストに追加</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text"
                placeholder="タイトルを記入"
                onChange={(e) => {setTitle(e.target.value)}}
          />
          <div>本文</div>
          <textarea placeholder="本文を記入" onChange={(e) => {setText(e.target.value)}}/>
        </div>
        <button onClick={buttonCleckd}>投稿</button>
      </div>
    </div>
  );
}

export default Create;
