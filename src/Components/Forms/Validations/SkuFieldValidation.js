import React, {useState, useEffect} from "react";
import { validationFieldProps } from "../../../utils/validation-field-props";

export default function SkuFieldValidation(props) {

    const { 
        productSku, 
        inputId, 
        validateSkuFieldState, 
        validateSkuFieldMethod 
    } = props;

    useEffect(() => {

        document.querySelector(`#${inputId}`).addEventListener("blur", (event) => {

            const params = {
                field: "sku",
                value: event.target.value
            }
            validateSkuFieldMethod(params);
        })

    }, [productSku.length])

    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    validateSkuFieldState.isUnique && ("")
                }
                {
                    validateSkuFieldState.isUnique === false && 
                    <p className="validation-feedback-text">This SKU number already exist!</p>
                }
            </div>
        </div> 
    )
}