/** @format */

import { Action, AnyAction, Reducer } from "redux";
import { Products } from "../interfaces/interfaces";

const initialState = { products: [] };

export const productReducer = (
	state: {
		products: Products[];
	} = initialState,
	action: AnyAction
) => {
	switch (action.type) {
		case "GETPRODUCTS":
			return {
				...state,
				products: [...state.products, ...action.payload],
			};
		case "DELPRODUCT":
			return {
				...state,
				products: [
					...state.products.filter(({ _id }) => action.payload !== _id),
				],
			};
		default:
			return state;
	}
};
