import { LIST_PRODUCTS_TYPES, ADD_PRODUCT_TYPES, DELETE_PRODUCTS_TYPES, VALIDATE_FIELD_TYPES } from './types';
import { ApiEndpoints } from '../../config/api-endpoints';

const { host, port, routes } = ApiEndpoints


// This action list all products from the server
export const listProductAction = () => dispatch => {

    dispatch({
        type: LIST_PRODUCTS_TYPES.LIST_PRODUCTS_START,
        status: "start"
    })

    const uri = `${host}${routes.listProducts.uri}`;
    const method = routes.listProducts.method;
    const headers = routes.listProducts.headers;

    fetch(uri, {
        method: method,
        headers: headers,
    })
    .then(res => res.json())
    .then(resp => {
        const { data } = resp;
        console.log("resp: ", resp);
        dispatch({
            type: LIST_PRODUCTS_TYPES.LIST_PRODUCTS_SUCCESS,
            payload: data,
            status: "success"
        })
    })
    .catch(e => {
        dispatch({
            type: LIST_PRODUCTS_TYPES.LIST_PRODUCTS_ERROR,
            status: "error"
        })
    })

}


// This action adds a product to the server
export const addProductAction = (prodData) => dispatch => {

    dispatch({
        type: ADD_PRODUCT_TYPES.ADD_PRODUCT_START,
        status: "start"
    })

    const uri = `${host}${routes.addProduct.uri}`;
    const method = routes.addProduct.method;
    const headers = routes.addProduct.headers;

    fetch(uri, {
        method: method,
        body: JSON.stringify(prodData),
        headers: headers
    })
    .then(res => res.json())
    .then(resp => {
        const { data } = resp;
        dispatch({
            type: ADD_PRODUCT_TYPES.ADD_PRODUCT_SUCCESS,
            payload: data,
            status: "success"
        })
    })
    .catch(e => {
        dispatch({
            type: ADD_PRODUCT_TYPES.ADD_PRODUCT_ERROR,
            status: "error"
        })
    })
}

// This action deletes all selected products from the server
export const deleteProductAction = (params) => dispatch => {

    dispatch({
        type: DELETE_PRODUCTS_TYPES.DELETE_PRODUCTS_START,
        status: "start"
    })

    const uri = `${host}${routes.deleteProducts.uri}`;
    const method = routes.deleteProducts.method;
    const headers = routes.deleteProducts.headers;

    fetch(uri, {
        method: method,
        body: JSON.stringify(params),
        headers: headers
    })
    .then(res => res.json())
    .then(resp => {
        const { data } = resp;
        dispatch({
            type: DELETE_PRODUCTS_TYPES.DELETE_PRODUCTS_SUCCESS,
            payload: data,
            status: "success"
        })
    })
    .catch(e => {
        dispatch({
            type: DELETE_PRODUCTS_TYPES.DELETE_PRODUCTS_ERROR,
            status: "error"
        })
    })
}

// This action checks for a unique field
export const validateSkuFieldAction = (params) => dispatch => {

    dispatch({
        type: VALIDATE_FIELD_TYPES.VALIDATE_FIELD_START
    })

    const { field, value } = params;

    const uri = `${host}${routes.validateProduct.uri}`;
    const uriWithParams = `${uri}?field=${field}&value=${value}`;
    const method = routes.validateProduct.method;
    const headers = routes.validateProduct.headers;

    fetch(uriWithParams, {
        method: method,
        headers: headers
    })
    .then(res => res.json())
    .then(resp => {

        const { data } = resp;
        dispatch({
            type: VALIDATE_FIELD_TYPES.VALIDATE_FIELD_SUCCESS,
            status: resp.status,
            isUnique: resp.isUnique,
            payload: data
        })
    })
    .catch(e => {
        dispatch({
            type: VALIDATE_FIELD_TYPES.VALIDATE_FIELD_ERROR,
            status: "error",
        })
    })

}