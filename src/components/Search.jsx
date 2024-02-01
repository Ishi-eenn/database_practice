import { useRef, useState } from 'react'
import { Container, TextField,
  Button, Typography, Box, 
  Grid, Card, CardMedia, CardContent
} from '@mui/material'

const BookSearch = () => {
  const keyword = useRef('')  
  const [searchResult, setSearchResult] = useState([])

  const search = async (keyword, e) => {
    e.preventDefault()
  
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword.current.value}`)
      .then( response => response.json())
    console.log(response.items)

  const newList = []
  response.items.map( book => {
  const title = book.volumeInfo.title
  const img = book.volumeInfo.imageLinks
  const description = book.volumeInfo.description
  newList.push({ title: title ? title : '',
    image: img ? img.thumbnail : '',
    description: description ? description.slice(0, 40) : ''
  })
setSearchResult(newList) })
  }

  const addBook = () => {
    console.log('btn clicked')
  }

  return (<>
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
        <Box component="form" onSubmit={ e => search(keyword, e) }
        sx={{ mt: 1}}>
          <TextField
            required
            fullWidth
            label="本を検索"
            placeholder="本のタイトルを入力してください"
            name="search"
            inputRef={keyword}
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
    <Container component="section" maxWidth="lg">
      <Grid container spacing={4}>
        { searchResult.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} >
            <Card sx={{ height: '100%'}}>
              <Grid container>
                <Grid item sm={4}>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    />
                </Grid>
                <Grid item sm={8}>
                  <CardContent>
                    <Typography sx={{ fontSize: '16px'}}>
                      { card.title}
                    </Typography>
                    <Typography sx={{ fontSize:'14px', mb: 1.5 }}>
                      { card.description }
                    </Typography>
                    <Button variant="contained" size="small" onClick={() => addBook()}>追加</Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>)
}

export default BookSearch