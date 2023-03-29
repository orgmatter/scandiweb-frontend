export const ApiEndpoints = {
    host: "https://scandiweb-product-api.herokuapp.com",
    port: "9000",
    routes: {
        listProducts: {
            uri: "/api/v1/products",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        },
        addProduct: {
            uri: "/api/v1/product",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        },
        deleteProducts: {
            uri: "/api/v1/products",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        },
        validateProduct: {
            uri: "/api/v1/product/validate",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
}