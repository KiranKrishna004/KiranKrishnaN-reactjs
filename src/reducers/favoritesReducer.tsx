/** @format */

import { AnyAction } from "redux";
import { Products } from "../interfaces/interfaces";

const initialState = { favorites: [] };
export const favoritesReducer = (
	state: { favorites: Products[] } = initialState,
	action: AnyAction
) => {
	switch (action.type) {
		case "GETFAV":
			return {
				...state,
				favorites: [...state.favorites, ...action.payload],
			};
		case "ADDFAV":
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case "REMOVEFAV":
			return {
				...state,
				favorites: state.favorites.filter((item) => item !== action.payload),
			};
		default:
			return state;
	}
};
