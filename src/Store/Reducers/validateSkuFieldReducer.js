import { VALIDATE_FIELD_TYPES } from "../Action/types";
import { productStates } from "../states";

const { validateFieldState } = productStates;

export default function validateSkuFieldReducer(state = validateFieldState, action) {

    switch(action.type) {

        case VALIDATE_FIELD_TYPES.VALIDATE_FIELD_START:
            return {
                ...state
            }
        case VALIDATE_FIELD_TYPES.VALIDATE_FIELD_SUCCESS:
            return {
                ...state,
                status: action.status,
                isUnique: action.isUnique,
                data: action.payload
            }
        case VALIDATE_FIELD_TYPES.VALIDATE_FIELD_ERROR:
            return {
                ...state,
                status: action.status,
            }
        default:
            return {
                ...state
            }
    }
}