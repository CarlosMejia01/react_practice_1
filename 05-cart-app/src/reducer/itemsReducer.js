import { itemActionTypes } from "./itemsActions";

export const itemsReducer = (state = [], action) => {
	switch (action.type) {
		case itemActionTypes.ADD_PRODUCT_CART:
			return [
				...state,
				{
					product: action.payload,
					quantity: 1,
				},
			];
		case itemActionTypes.UPDATE_QUANTITY_PRODUCT_CART:
			return state.map((i) => {
                    if (i.product.id == action.payload.id) {
						return {
							...i,
							quantity: i.quantity + 1
						};
                    }
                    return i;
                });
		case itemActionTypes.DELETE_PRODUCT_CART:
			return state.filter((i) => i.product.id !== action.payload);
		default:
			return state;
	}
};
