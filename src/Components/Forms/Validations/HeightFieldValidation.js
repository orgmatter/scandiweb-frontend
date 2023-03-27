import React, {} from "react";

export default function HeightFieldValidation(props) {

    const { isHeightValid, productHeight } = props;
    
    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    isHeightValid !== null && 
                    isHeightValid && ("")
                }
                {
                    isHeightValid !== null && 
                    !isHeightValid && <p className="validation-feedback-text">The height field must be a number</p>
                }
                {
                    productHeight.length === 0 && ("")
                }
            </div>
        </div> 
    )
}