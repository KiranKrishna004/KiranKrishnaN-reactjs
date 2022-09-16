import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../interfaces/interfaces";

export const Card = ({ product }: { product: Products }) => {
  return (
    <Link to={`/${product._id}`}>
      <div className=' pb-2 relative max-w-sm rounded-lg shadow-md hover:shadow-2xl'>
        <img
          className='w-full h-48 object-cover'
          src={product.avatar}
          loading='lazy'
          alt={""}
        />
        <div className='h-40'>
          <div className='px-2 text-lg font-semibold'>{product.name}</div>
          <div className='px-2'>
            <div className='text-xs'>{product.category}</div>
            <div className='text-sm pt-2 inline-flex line-clamp-5'>
              {product.description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
