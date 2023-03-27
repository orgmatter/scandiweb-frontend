import { combineReducers } from "redux";
import listProductsReducer from "./listProductsReducer";
import addProductReducer from "./addProductReducer";
import deleteProductsReducer from "./deleteProductReducer";
import validateSkuFieldReducer from "./validateSkuFieldReducer";

export const rootReducers = combineReducers({
    listProductState: listProductsReducer,
    addProductState: addProductReducer,
    deleteProductState: deleteProductsReducer,
    validateSkuFieldState: validateSkuFieldReducer
});