import React, { useState } from "react";
import { Products } from "../interfaces/interfaces";
import { useAppSelector } from "../hooks/hooks";
import { Filter } from "../components/Filter";
import { Card } from "../components/Card";
export const Home = () => {
  const products = useAppSelector(({ products }) => products.products);
  const [filter, setFilter] = useState<string>("");
  const filteredProducts =
    filter !== ""
      ? products.filter((product) => product.category === filter)
      : products;
  if (products.length === 0) {
    return (
      <>
        <></>
      </>
    );
  }
  return (
    <div className='sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto'>
      <p>Products</p>
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
