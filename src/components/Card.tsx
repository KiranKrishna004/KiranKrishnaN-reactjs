/** @format */

import { features } from "process";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { Products } from "../interfaces/interfaces";
import { Favorites } from "../pages/Favorites";

export const Card = ({ product }: { product: Products }) => {
	const dispatch = useDispatch();
	const favorites = useAppSelector(({ favorites }) => favorites.favorites);
	const [isFav, setIsFav] = useState<boolean>(
		!!favorites.find((e) => e._id === product._id)
	);
	useEffect(() => {
		isFav
			? dispatch({ type: "ADDFAV", payload: product })
			: dispatch({ type: "REMOVEFAV", payload: product });
	}, [isFav]);
	useEffect(() => {
		localStorage.setItem(
			"favorites",
			JSON.stringify(
				favorites.filter(
					(value, index, self) =>
						index ===
						self.findIndex(
							(t) => t.place === value.place && t.name === value.name
						)
				)
			)
		);
	}, [favorites]);

	return (
		<div className='pb-2 relative max-w-sm rounded-lg shadow-md hover:shadow-2xl'>
			<Link to={`/${product._id}`}>
				<img
					className='w-full h-48 object-cover'
					src={product.avatar}
					loading='lazy'
					alt={""}
				/>
			</Link>
			<div className='h-40 px-2'>
				<div className='flex justify-between items-center'>
					<div className='text-xl font-semibold'>
						<Link to={`/${product._id}`}>{product.name}</Link>
					</div>
					<button onClick={() => setIsFav(!isFav)}>
						{!isFav ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='red'
								className='w-6 h-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='red'
								className='w-6 h-6'>
								<path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
							</svg>
						)}
					</button>
				</div>
				<div>
					<div className='text-xs pb-4'>{product.category}</div>
					<div className='text-sm pt-2 inline-flex line-clamp-5'>
						{product.description}
					</div>
				</div>
			</div>
		</div>
	);
};
