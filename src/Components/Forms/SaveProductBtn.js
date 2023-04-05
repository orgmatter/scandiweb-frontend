import React from "react";

export default function SaveProductBtn(props) {

    const { validateSkuFieldState, productFieldState, productType } = props;

    return (
        <>
            {
                validateSkuFieldState.isUnique === false ||
                productFieldState.price.isPriceValid === false ||
                productFieldState.weight.isWeightValid === false ||
                productFieldState.size.isSizeValid === false || 
                productFieldState.height.isHeightValid === false ||
                productFieldState.width.isWidthValid === false ||
                productFieldState.length.isLengthValid === false?
                <button 
                    className="product-add-btn-false"
                    type="submit"
                    disabled={true}
                >Save</button>:
                <button 
                    className="product-add-btn-true"
                    type="submit"
                >Save</button>
            }
        </>
    )
}