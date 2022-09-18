/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useAppSelector } from "../hooks/hooks";
import { Products } from "../interfaces/interfaces";

export const Favorites = () => {
	const favorites = useAppSelector(({ favorites }) =>
		favorites.favorites.filter(
			(value: Products, index: number, self: Products[]) =>
				index ===
				self.findIndex(
					(t: Products) => t._id === value._id && t.name === value.name
				)
		)
	);
	if (favorites.length === 0) {
		return <Loading />;
	}
	return (
		<div className='sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto'>
			<div className='text-3xl font-bold my-7'>Favorites</div>
			<div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
				{favorites.map((favorite, index) => (
					<div
						key={index}
						className=' pb-2 relative max-w-sm rounded-lg shadow-md hover:shadow-2xl'>
						<Link to={`/${favorite._id}`}>
							<img
								className='w-full h-48 object-cover'
								src={favorite.avatar}
								loading='lazy'
								alt={""}
							/>
						</Link>
						<div className='h-40 px-2'>
							<div className='flex justify-between items-center'>
								<div className='text-xl font-semibold'>
									<Link to={`/${favorite._id}`}>{favorite.name}</Link>
								</div>
							</div>
							<div>
								<div className='text-xs pb-4'>{favorite.category}</div>
								<div className='text-sm pt-2 inline-flex line-clamp-5'>
									{favorite.description}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
