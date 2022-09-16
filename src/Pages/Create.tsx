/** @format */

import axios from "axios";
import { useState } from "react";

export const Create = () => {
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [category, setCategory] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [avatar, setAvatar] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const obj = {
			name: name,
			price: price,
			category: category,
			description: description,
			avatar: avatar,
			email: email,
		};
		console.log("Obj: ", obj);
		axios
			.post("https://upayments-studycase-api.herokuapp.com/api/products", obj, {
				headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
			})
			.then((response) => console.log("response: ", response.data))
			.catch((e) => console.log(e));
	};
	return (
		<div className='flex flex-col lg:max-w-md mx-auto justify-center'>
			<div className='flex'>Create Product</div>
			<form onSubmit={handleSubmit} className='flex flex-col'>
				<label>
					Name: <input value={name} onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Price:{" "}
					<input value={price} onChange={(e) => setPrice(e.target.value)} />
				</label>
				<label>
					Category:{" "}
					<input
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</label>
				<label>
					Description:{" "}
					<input
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<label>
					Avatar{" "}
					<input value={avatar} onChange={(e) => setAvatar(e.target.value)} />
				</label>
				<label>
					Email:{" "}
					<input value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<button type='submit'>Create</button>
			</form>
		</div>
	);
};
