import React, {} from "react";

export default function LengthFieldValidation(props) {

    const { isLengthValid, productLength } = props;
    
    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    isLengthValid !== null && 
                    isLengthValid && ("")
                }
                {
                    isLengthValid !== null && 
                    !isLengthValid && <p className="validation-feedback-text">The length field must be a number</p>
                }
                {
                    productLength.length === 0 && ("")
                }
            </div>
        </div> 
    )
}