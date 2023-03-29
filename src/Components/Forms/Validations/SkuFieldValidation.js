import React, {useState, useEffect} from "react";
import { validationFieldProps } from "../../../utils/validation-field-props";

export default function SkuFieldValidation(props) {

    const { 
        productSku, 
        inputId, 
        validateSkuFieldState, 
        validateSkuFieldMethod 
    } = props;

    const { sku } = validationFieldProps;

    const [inputElem, setInputElem] = useState({value: null})

    useEffect(() => {

        document.querySelector(`#${inputId}`).addEventListener("blur", (event) => {

            setInputElem({value: event.target.value});

            if(event.target.value.length === sku.length) {

                const params = {
                    field: "sku",
                    value: event.target.value
                }
    
                validateSkuFieldMethod(params);
            }
        })

    }, [productSku.length])

    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    productSku.length > sku.length && 
                    <p className="validation-feedback-text">The SKU number should not be more than {sku.length} characters long</p>
                }
                {
                    productSku.length < sku.length && ("")
                }
                {
                    validateSkuFieldState.isUnique && ("")
                }
                {
                    inputElem.value !== null && 
                    inputElem.value.length === sku.length && 
                    validateSkuFieldState.isUnique === false && 
                    <p className="validation-feedback-text">This SKU number already exist!</p>
                }
            </div>
        </div> 
    )
}