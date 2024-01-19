import React from "react";
import "./card.css";
import { deleteToDoList, getToDoLists } from "../api.js";
import { useContext } from "react";
import { BookDataContext } from "../App.jsx";

function Card(props) {
  const [, setBookData] = useContext(BookDataContext);
  const deleteCard = (id) => {
    (async () => {
      await deleteToDoList(id);
      const response = await getToDoLists();
      console.log(response);
      setBookData([...response]);
    })();
  };

  const handleDeleteClick = () => {
    deleteCard(props.id);
  };

  return (
    <div className="card">
      <div className="card-title">{props.title}</div>
      <div className="card-text">{props.description}</div>
      <button className="card-button" onClick={handleDeleteClick}>削除</button>
    </div>
  );
}

function PrintCardList({ bookData }) {
  return (
    <>
      {bookData.map((data) => {
        return (
          <Card key={data.id} id={data.id} title={data.title} description={data.description} />
          );
        })}
    </>
  );
}

export default PrintCardList;
