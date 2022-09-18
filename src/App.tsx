/** @format */

import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details } from "./Pages/Details";
import { Home } from "./Pages/Home";
import { Create } from "./Pages/Create";
import { Favorites } from "./Pages/Favorites";
import { Products } from "./interfaces/interfaces";

const App = () => {
	const dispatch = useDispatch();
	const requests = [
		"https://upayments-studycase-api.herokuapp.com/api/products",
		"https://upayments-studycase-api.herokuapp.com/api/categories",
	];
	useEffect(() => {
		if (localStorage !== null && localStorage.getItem("favorites") !== null) {
			const fav = JSON.parse(localStorage.getItem("favorites") || "{}");
			dispatch({
				type: "GETFAV",
				payload: fav,
			});
		}
		axios
			.all(
				requests.map((endpoint) =>
					axios.get(endpoint, {
						headers: {
							Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
						},
					})
				)
			)
			.then((response) => {
				dispatch({ type: "GETPRODUCTS", payload: response[0].data.products });
				dispatch({
					type: "GETCATEGORIES",
					payload: response[1].data.categories,
				});
			})
			.catch((e) => console.log(e));
		return () => {
			localStorage.clear();
		};
	}, []);
	return (
		<Router>
			<Routes>
				<Route path='/:id' element={<Details />}></Route>
				<Route path='/favorites' element={<Favorites />}></Route>
				<Route path='/create' element={<Create />}></Route>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
