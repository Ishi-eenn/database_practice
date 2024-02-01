import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { getLogin } from "../api";

function LogIn(props) {
	const { setUser } = props;
	const [userData, setUserData] = useState([]);
	const [inputUserData, setInputUserData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	useEffect(() => {
		const getBookData = async () => {
			const data = await getLogin();
			setUserData(data);
		};
		getBookData();
	}, []);

	// console.log(userData);

	const clickHandler = () => {
		const user = userData.find((element) => {
			return (
				element.email === inputUserData.email &&
				element.password === inputUserData.password
			);
		});

		if (user !== undefined) {
			setUser(user.id);
			navigate("/home");
		}
	};

	return (
		<>
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(e) => {
								setInputUserData({ ...inputUserData, email: e.target.value });
							}}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={(e) => {
								setInputUserData({
									...inputUserData,
									password: e.target.value,
								});
							}}
						/>
						<Button
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							onClick={clickHandler}
						>
							Sign In
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
}

export default LogIn;
