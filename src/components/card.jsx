import React from "react";
import "./card.css";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function Card(props) {
  const deleteCard = async (id) => {
    await deleteDoc(doc(db, "toDoList", id));
    window.location.reload();
  }

  const handleDeleteClick = () => {
    deleteCard(props.id);
  };

  return (
    <div className="card">
      <div className="card-title">{props.title}</div>
      <div className="card-text">{props.text}</div>
      <div className="card-date">{props.date[3]}/{props.date[2]}/{props.date[4]}</div>
      <button className="card-button" onClick={handleDeleteClick}>削除</button>
    </div>
  );
}

export default Card;
