import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Cleate from "./components/create";
import Header from "./components/header";
import Search from "./components/Search";
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
					<Route path="/signin" element={<SignIn setUser={setUser} />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/create" element={<Cleate />}></Route>
					<Route path="/search" element={<Search />}></Route>
				</Routes>
			</BrowserRouter>
		</BookDataContext.Provider>
	);
}

export default App;
