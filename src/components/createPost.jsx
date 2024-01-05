import { useState } from "react";
import "./createPost.css";
import { addDoc, collection } from "firebase/firestore";
import { db, serverTimestamp } from "../firebase";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const buttonCleckd = () => {
    addDoc(collection(db, "toDoList"), {
      title: title,
      text: text,
      timestamp: serverTimestamp(),
    });
    setTitle("");
    setText("");
  }

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <h1>記事を書く</h1>
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

export default CreatePost;
