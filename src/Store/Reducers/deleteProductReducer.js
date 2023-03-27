import { DELETE_PRODUCTS_TYPES } from '../Action/types';
import { productStates as initialStates } from '../states';

export default function deleteProductsReducer(state = initialStates.deleteProductsState, action){

    switch(action.type) {

        case DELETE_PRODUCTS_TYPES.DELETE_PRODUCTS_START:
            return {
                ...state,
                status: action.status
            }

        case DELETE_PRODUCTS_TYPES.DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                status: action.status,
                data: action.payload
            }
        
        case DELETE_PRODUCTS_TYPES.DELETE_PRODUCTS_ERROR:
            return {
                ...state,
                status: action.status
            }
        
        default:
            return {
                ...state
            }
    }
}  