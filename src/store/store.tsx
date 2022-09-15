import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "../reducers/categoriesReducer";
import { productReducer } from "../reducers/productReducer";

export const store = configureStore({
  reducer: { products: productReducer, categories: categoriesReducer },
});
