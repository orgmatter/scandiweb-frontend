import React, {} from "react";

export default function SizeFieldValidation(props) {

    const { isSizeValid, productSize } = props;
    
    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    isSizeValid !== null && 
                    isSizeValid && ("")
                }
                {
                    isSizeValid !== null && 
                    !isSizeValid && <p className="validation-feedback-text">The size field must be a number</p>
                }
                {
                    productSize.length === 0 && ("")
                }
            </div>
        </div> 
    )
}