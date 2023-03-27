import React, {} from "react";

export default function PriceFieldValidation(props) {

    const { isPriceValid, productPrice } = props;
    
    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    isPriceValid !== null && 
                    isPriceValid && ("")
                }
                {
                    isPriceValid !== null && 
                    !isPriceValid && <p className="validation-feedback-text">The price field must be a number</p>
                }
                {
                    productPrice.length === 0 && ("")
                }
            </div>
        </div> 
    )
}