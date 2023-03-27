import React, {useState, useEffect} from "react";

export default function SkuFieldValidation(props) {

    const { productSku, inputId, validateFieldState, validateFieldMethod } = props;

    const [inputElem, setInputElem] = useState({value: null})

    useEffect(() => {

        document.querySelector(`#${inputId}`).addEventListener("blur", (event) => {

            setInputElem({value: event.target.value});

            if(event.target.value.length === 8) {

                const params = {
                    field: "sku",
                    value: event.target.value
                }
    
                validateFieldMethod(params);
            }
        })

    }, [productSku.length])

    console.log("validate field state: ", validateFieldState);

    return (
        <div className="validation-feedback-cover-flex">
            <div className="validation-feedback-cover-item" id="validation-feedback-cover">
                {
                    productSku.length > 8 && 
                    <p id="validation-feedback-text">The SKU number should not be more than 8 characters long</p>
                }
                {
                    productSku.length < 8 && ("")
                }
                {
                    validateFieldState.isUnique && ("")
                }
                {
                    inputElem.value !== null && 
                    inputElem.value.length === 8 && 
                    validateFieldState.isUnique === false && 
                    <p id="validation-feedback-text">This SKU number already exist!</p>
                }
            </div>
        </div> 
    )
}