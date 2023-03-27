import React from "react";

export default function SaveProductBtn(props) {

    const { validateSkuFieldState, productFieldState, productType } = props;

    switch(productType) {

        case "Book":
            return (
                <button 
                    className="product-add-btn"
                    type="submit"
                    disabled={
                        validateSkuFieldState.isUnique === true &&
                        productFieldState.price.isPriceValid === true &&
                        productFieldState.weight.isWeightValid === true? false:true
                    }
                >Save</button>
            )
        case "DVD":
            return (
                <button 
                    className="product-add-btn"
                    type="submit"
                    disabled={
                        validateSkuFieldState.isUnique === true &&
                        productFieldState.price.isPriceValid === true &&
                        productFieldState.size.isSizeValid === true? false:true
                    }
                >Save</button>
            )
        case "Furniture":
            return (
                <button 
                    className="product-add-btn"
                    type="submit"
                    disabled={
                        validateSkuFieldState.isUnique === true &&
                        productFieldState.price.isPriceValid === true &&
                        productFieldState.height.isHeightValid === true &&
                        productFieldState.width.isWidthValid === true &&
                        productFieldState.length.isLengthValid === true? false:true
                    }
                >Save</button>
            )
        default:
            return (
                <button 
                    className="product-add-btn"
                    type="button"
                    disabled={true}
                >Save</button>
            )
    }
}