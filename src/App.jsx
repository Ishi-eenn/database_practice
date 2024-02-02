import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import BookSearch from "./components/BookSearch";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import { useState, createContext } from "react";

export const BookDataContext = createContext();

function App() {
	const [user, setUser] = useState(-1);
	const [bookData, setBookData] = useState([]);

	console.log(user);
	return (
		<BookDataContext.Provider value={[bookData, setBookData]}>
			<BrowserRouter>
				<Header isLogin={user} />
				<Routes>
					<Route path="/" element={<Login setUser={setUser} />}></Route>
					<Route path="/signin" element={<SignIn />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/search" element={<BookSearch user={user} />}></Route>
				</Routes>
			</BrowserRouter>
		</BookDataContext.Provider>
	);
}

export default App;
