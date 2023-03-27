import { ADD_PRODUCT_TYPES } from '../Action/types';
import { productStates as initialStates } from '../states';

export default function addProductReducer(state = initialStates.addProductState, action){

    switch(action.type) {

        case ADD_PRODUCT_TYPES.ADD_PRODUCT_START:
            return {
                ...state,
                status: action.status
            }

        case ADD_PRODUCT_TYPES.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                status: action.status,
                data: action.payload
            }
        
        case ADD_PRODUCT_TYPES.ADD_PRODUCT_ERROR:
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