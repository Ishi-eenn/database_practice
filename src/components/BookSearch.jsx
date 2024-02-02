import { useState } from "react";
import { postToDoList } from "../api.js";
import {
	Container,
	TextField,
	Button,
	Typography,
	Box,
	Grid,
	Card,
	CardMedia,
	CardContent,
} from "@mui/material";

const BookSearch = (props) => {
	const { user } = props;
	const [word, setword] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const search = async () => {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${word}`,
		).then((response) => response.json());
		console.log(response.items);

		const newList = response.items.map((book) => {
			return {
				title: book.volumeInfo.title ? book.volumeInfo.title : "",
				image: book.volumeInfo.imageLinks
					? book.volumeInfo.imageLinks.thumbnail
					: "",
				description: book.volumeInfo.description
					? book.volumeInfo.description.slice(0, 50)
					: "",
			};
		});
		setSearchResult(newList);
	};

	const addBook = async (props) => {
		const { card } = props;
		const book = {
			title: card.title,
			description: card.description,
			url: card.image,
			userId: user,
		};
		await postToDoList(book);
		console.log(book);
	};

	return (
		<>
			<Container component="section" maxWidth="lg">
				<Box
					sx={{
						mt: 2,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography
						component="h1"
						variant="h5"
						style={{ userSelect: "none" }}
					>
						本を検索
					</Typography>
					<Box component="form" sx={{ mt: 1 }}>
						<TextField
							required
							fullWidth
							label="本を検索"
							placeholder="本のタイトルを入力してください"
							name="search"
							onChange={(e) => setword(e.target.value)}
						/>
						<Button
							fullWidth
							variant="contained"
							sx={{ my: 2 }}
							onClick={() => {
								search();
							}}
						>
							検索する
						</Button>
					</Box>
				</Box>
			</Container>
			<Container component="section" maxWidth="lg">
				<Grid container spacing={4}>
					{searchResult.map((card, index) => (
						<Grid item key={index} xs={12} sm={6} md={4}>
							<Card sx={{ height: "100%" }}>
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
											<Typography sx={{ fontSize: "16px" }}>
												{card.title}
											</Typography>
											<Typography sx={{ fontSize: "14px", mb: 1.5 }}>
												{card.description}
											</Typography>
											<Button
												variant="contained"
												size="small"
												onClick={() => {
													addBook({ card });
												}}
											>
												追加
											</Button>
										</CardContent>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default BookSearch;
