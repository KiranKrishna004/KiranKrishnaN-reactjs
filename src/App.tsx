/** @format */

import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details } from "./Pages/Details";
import { Home } from "./Pages/Home";
import { Create } from "./Pages/Create";

const App = () => {
	const dispatch = useDispatch();
	const requests = [
		"https://upayments-studycase-api.herokuapp.com/api/products",
		"https://upayments-studycase-api.herokuapp.com/api/categories",
	];
	useEffect(() => {
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
				console.log("response: ", response[0].data.products);
				console.log("response: ", response[1].data.categories);

				dispatch({ type: "GETPRODUCTS", payload: response[0].data.products });
				dispatch({
					type: "GETCATEGORIES",
					payload: response[1].data.categories,
				});
			})
			.catch((e) => console.log(e));
	}, []);
	return (
		<Router>
			<Routes>
				<Route path='/:id' element={<Details />}></Route>
				<Route path='/create' element={<Create />}></Route>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
