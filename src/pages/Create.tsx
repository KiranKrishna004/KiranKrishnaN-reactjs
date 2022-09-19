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
		<div className='h-screen flex flex-col lg:max-w-md mx-auto justify-center items-center '>
			<div className='font-light rounded sm:h-1/2 xs:h-3/6 px-10 text-lg border border-blue-200 flex flex-col justify-center items-center'>
				<div className='flex text-3xl font-bold justify-start'>
					Create Product
				</div>
				<form onSubmit={handleSubmit} className='flex flex-col mt-5'>
					<label className='flex items-center justify-between flex-nowrap my-2'>
						Name:{" "}
						<input
							className='border border-black'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label className='flex items-center justify-between flex-nowrap my-2'>
						Price:{" "}
						<input
							className='border border-black'
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</label>
					<label className='my-2 flex items-center justify-between flex-nowrap '>
						Category:{" "}
						<input
							className='border border-black'
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						/>
					</label>
					<label className='flex items-center justify-between flex-nowrap my-2'>
						Description:{" "}
						<input
							className='border border-black'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</label>
					<label className='flex items-center justify-between flex-nowrap my-2'>
						Avatar{" "}
						<input
							className='border border-black'
							value={avatar}
							onChange={(e) => setAvatar(e.target.value)}
						/>
					</label>
					<label className='flex items-center justify-between flex-nowrap my-2'>
						Email:{" "}
						<input
							className='border border-black'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<div className='flex justify-center'>
						<button
							className='bg-white px-2 py-1 mt-5 border border-black rounded'
							type='submit'>
							Create
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
