import { useState } from "react";
import "./Search.css";
import { postToDoList } from "../api.js";

import { Container, Fab, TextField,
  Button, Typography, Box, 
  Grid, Card, CardMedia, CardContent, CardActions
} from '@mui/material'

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
                url: data.volumeInfo.imageLinks.thumbnail,
              };
              await postToDoList(book);
            }}>追加</button>
          </div>
        );
      })}
    </div>
  );
}

function Search() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const bookDataFromUrl = async (string) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${string}&&cnt=1`);
      if (!response.ok) {
        throw new Error("もしかして上限きちゃった？");
      }

      const data = await response.json();
      console.log(data);

      if (data.items) {
        setSearchResult(data.items);
      } else {
        setSearchResult([]);
      }
    } catch (error) {
      console.error("値が取れなかったああああああ", error);
    }
  }

  return (
    <>
    <Container component="section" maxWidth="lg">
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h5">本を検索</Typography>
        <Box component="form" onSubmit={ ()=> console.log("btn")} 
        sx={{ mt: 1}}>
          <TextField
            fullWidth
            label="本を検索"
            placeholder="本のタイトルを入力してください"
            name="search"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 2 }}>
              検索する
            </Button>
        </Box>
      </Box>
    </Container>
    </>
  );
}

export default Search;


