/** @format */

import React, { useState } from "react";
import { Products } from "../interfaces/interfaces";
import { useAppSelector } from "../hooks/hooks";
import { Filter } from "../components/Filter";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
export const Home = () => {
	const products = useAppSelector(({ products }) => products.products);
	const [filter, setFilter] = useState<string>("");
	const filteredProducts =
		filter !== ""
			? products.filter((product) => product.category === filter)
			: products;
	if (products.length === 0) {
		return <Loading />;
	}
	return (
		<div className='sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto'>
			<div className='flex justify-between my-2'>
				<p className='text-xl font-extrabold'>Kiran StoreFront</p>
				<div className='flex items-center'>
					<Link to='favorites'>
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
					</Link>
					<Link to='create'>
						<button className='bg-white px-2 py-1 ml-5 border border-black rounded'>
							Create Product
						</button>
					</Link>
				</div>
			</div>
			<Filter setFilter={setFilter} filter={filter} />
			<div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
				{filteredProducts!.map((filteredProduct: Products) => (
					<React.Fragment key={filteredProduct._id}>
						<Card product={filteredProduct} />
					</React.Fragment>
				))}
			</div>
		</div>
	);
};
