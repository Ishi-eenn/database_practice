import { useState } from "react";
import "./create.css";
import { postToDoList } from "../api.js";

function PrintSearchBooks({ searchResult }) {
  return (
    <div className="cardList">
      {searchResult.map((data, index) => {
        return (
          <div key={index} className="book">
            <img src={data.volumeInfo.imageLinks.thumbnail} />
            <div className="title">{data.volumeInfo.title}</div>
            <div className="authors">{data.volumeInfo.authors}</div>
            <div className="description">{data.volumeInfo.description}</div>
            <button onClick={async () => {
              const book = {
                title: data.volumeInfo.title,
                description: data.volumeInfo.description,
              };
              await postToDoList(book);
            }}>追加</button>
          </div>
        );
      })}
    </div>
  );
}

function Test() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const bookDataFromUrl = async (string) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${string}&&cnt=100`);
    const data = await response.json();
    console.log(data);
    setSearchResult(data.items);
  }

  return (
    <>
      <div className="CreatePage">
        <div className="searchContainer"></div>
        <div className="CreateContainer">
          <h1>リストに追加</h1>
          <div className="inputPage">
            <div className="search">
              <input type="text"
                    placeholder="タイトルを記入"
                    onChange={(e) => {
                      const value = e.target.value;
                      setInput(value);
                    }}
                    />
              <button onClick={() => {bookDataFromUrl(input)}}>検索</button>
            </div>
          </div>
        </div>
          <PrintSearchBooks searchResult={searchResult} />
      </div>
    </>
  );
}

export default Test;
