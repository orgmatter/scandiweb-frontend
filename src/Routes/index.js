import ProductAdd from "../Pages/ProductAdd";
import ProductList from "../Pages/ProductList";

export const Routes = [
    {
        url: "/",
        component: (props) => <ProductList {...props} />
    },
    {
        url: "/product-add",
        component: (props) => <ProductAdd {...props} />
    }
]