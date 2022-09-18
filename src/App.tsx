/** @format */

import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { Favorites } from "./pages/Favorites";
import { Navbar } from "./components/Navbar";

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
		<div className='sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto overflow-hidden'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/create' element={<Create />}></Route>
					<Route path='/favorites' element={<Favorites />}></Route>
					<Route path='/:id' element={<Details />}></Route>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
