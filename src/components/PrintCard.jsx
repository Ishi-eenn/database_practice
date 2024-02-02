import { useEffect, useContext } from "react";
import { BookDataContext } from "../App.jsx";
import { getToDoLists, deleteToDoList } from "../api.js";
import {
	Container,
	Button,
	Typography,
	Grid,
	Card,
	CardMedia,
	CardContent,
} from "@mui/material";

const PrintCard = (props) => {
	const { user } = props;
	const [bookData, setBookData] = useContext(BookDataContext);

	const handleDeleteClick = async (props) => {
		const { card } = props;
		await deleteToDoList(card.id);
		const response = await getToDoLists();
		setBookData([...response]);
	};

	useEffect(() => {
		const getBookData = async () => {
			const data = await getToDoLists();
			setBookData(data);
		};
		getBookData();
	}, []);

	return (
		<>
			<Container component="section" maxWidth="lg">
				<Grid container spacing={4} sx={{ mt: 2 }}>
					{bookData.map((card, index) => (
						<Grid item key={index} xs={12} sm={6} md={4}>
							<Card sx={{ height: "100%" }}>
								<Grid container>
									<Grid item sm={4}>
										<CardMedia
											component="img"
											image={card.url}
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
											{user === card.userId ? (
												<>
													<Button
														variant="contained"
														size="small"
														color="error"
														onClick={() => handleDeleteClick({ card })}
													>
														削除
													</Button>
												</>
											) : (
												<></>
											)}
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

export default PrintCard;
