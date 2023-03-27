import { LIST_PRODUCTS_TYPES } from '../Action/types';
import { productStates as initialStates } from '../states';

export default function listProductsReducer(state = initialStates.listProductsState, action){

    switch(action.type) {

        case LIST_PRODUCTS_TYPES.LIST_PRODUCTS_START:
            return {
                ...state,
                status: action.status
            }

        case LIST_PRODUCTS_TYPES.LIST_PRODUCTS_SUCCESS:
            return {
                ...state,
                status: action.status,
                data: action.payload
            }
        
        case LIST_PRODUCTS_TYPES.LIST_PRODUCTS_ERROR:
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