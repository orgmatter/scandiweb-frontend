import React, {} from 'react';
import ProductAddForm from './Forms/ProductAddForm';

export default function ProductAddContentComponent(props) {

    const { addProdState, addProduct } = props;
    
    return (
        <div className="product-add-content-cover-flex">
            <div className="product-add-content-cover-item">
                <ProductAddForm 
                    addProdState={addProdState}
                    addProduct={addProduct}
                />
            </div>
        </div>
    )
}