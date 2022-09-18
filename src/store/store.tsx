/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "../reducers/categoriesReducer";
import { productReducer } from "../reducers/productReducer";
import { favoritesReducer } from "../reducers/favoritesReducer";
export const store = configureStore({
	reducer: {
		products: productReducer,
		categories: categoriesReducer,
		favorites: favoritesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
