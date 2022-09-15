import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Categories, Products } from "../interfaces/interfaces";
export const Home = () => {
  const products = useSelector(
    (products: { products: Products[] }) => products.products
  );
  const categories = useSelector(
    (categories: { categories: Categories[] }) => categories.categories
  );
  console.log("products: ", products);
  console.log("categories: ", categories);

  return (
    <div>
      <div></div>
    </div>
  );
};
