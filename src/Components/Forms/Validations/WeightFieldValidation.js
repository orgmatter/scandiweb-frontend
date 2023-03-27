import React, {} from "react";

export default function WeightFieldValidation(props) {

    const { isWeightValid, productWeight } = props;
    
    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    isWeightValid !== null && 
                    isWeightValid && ("")
                }
                {
                    isWeightValid !== null && 
                    !isWeightValid && <p className="validation-feedback-text">The weight field must be a number</p>
                }
                {
                    productWeight.length === 0 && ("")
                }
            </div>
        </div> 
    )
}