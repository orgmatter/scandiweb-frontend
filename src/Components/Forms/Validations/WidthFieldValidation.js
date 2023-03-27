import React, {} from "react";

export default function WidthFieldValidation(props) {

    const { isWidthValid, productWidth } = props;
    
    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    isWidthValid !== null && 
                    isWidthValid && ("")
                }
                {
                    isWidthValid !== null && 
                    !isWidthValid && <p className="validation-feedback-text">The width field must be a number</p>
                }
                {
                    productWidth.length === 0 && ("")
                }
            </div>
        </div> 
    )
}