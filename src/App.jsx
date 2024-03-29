import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import BookSearch from "./components/BookSearch";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import PrintCard from "./components/PrintCard";
import { useState, createContext } from "react";

export const BookDataContext = createContext();

function App() {
	const [user, setUser] = useState(-1);
	const [bookData, setBookData] = useState([]);

	return (
		<BookDataContext.Provider value={[bookData, setBookData]}>
			<BrowserRouter>
				<Header isLogin={user} />
				<Routes>
					<Route path="/" element={<Login setUser={setUser} />}></Route>
					<Route path="/signin" element={<SignIn />}></Route>
					<Route path="/search" element={<BookSearch user={user} />}></Route>
					<Route path="/home" element={<PrintCard user={user} />}></Route>
				</Routes>
			</BrowserRouter>
		</BookDataContext.Provider>
	);
}

export default App;
