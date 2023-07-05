export const ApiEndpoints = {
    host: "http://3.128.255.132",
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
            uri: "/api/v1/product/validate-record",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
}