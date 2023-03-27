import React, {} from "react";
import ProductHeaderComponent from "../Components/ProductHeaderComponent";
import ProductAddContentComponent from "../Components/ProductAddContentComponent";
import { addProductAction } from "../Store/Action";
import { connect } from "react-redux";
import { useLocation } from "react-router";

function ProductAdd(props) {

    const { addProdState, addProduct } = props;

    const { pathname } = useLocation();

    return (
        <div className="product-add-cover-flex">
            <div className="product-add-cover-item">
                <div className="product-add-comp-cover-flex">
                    <div className="product-add-comp-cover-item">
                        <ProductHeaderComponent locPathname={pathname} />
                        <ProductAddContentComponent 
                            addProdState={addProdState}
                            addProduct={addProduct}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    addProdState: state.addProductState
})

const mapDispatchToProps = dispatch => ({
    addProduct: (prodData) => dispatch(addProductAction(prodData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);