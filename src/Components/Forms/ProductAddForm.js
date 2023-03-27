import React, { useState, useEffect } from 'react';
import { priceFieldValidation, attributeFieldValidation } from '../../utils/form-validate';
import SkuFieldValidation from './Validations/SkuFieldValidation';
import PriceFieldValidation from './Validations/PriceFieldValidation';
import AttributeTypeForm from './AttributeTypeForm';
import SaveProductBtn from './SaveProductBtn';
import { validateSkuFieldAction } from "../../Store/Action";
import { connect } from 'react-redux';

function ProductAddForm(props) {

    const { 
        addProdState, 
        addProduct, 
        validateSkuFieldState, 
        validateSkuFieldMethod 
    } = props;

    const inputValObj = {
        productName: "",
        productPrice: "",
        productSku: "",
        productType: "",
        attrWeight: "",
        attrSize: "",
        attrHeight: "",
        attrWidth: "",
        attrLength: ""
    }
    const productFieldObj = {
        price: {isPriceValid: null, productPrice: ""},
        size: {isSizeValid: null, attrSize: ""},
        weight: {isWeightValid: null, attrWeight: ""},
        height: {isHeightValid: null, attrHeight: ""},
        width: {isWidthValid: null, attrWidth: ""},
        length: {isLengthValid: null, attrLength: ""}
    }

    const [inputVal, setInputVal] = useState(inputValObj);
    const [productFieldState, setProductFieldState] = useState(productFieldObj);


    const handleInputChange = (e) => {
        e.preventDefault();

        setInputVal(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });

        if(e.target.name === "productPrice") {
            setProductFieldState(prev => ({
                ...prev, 
                price: {
                    isPriceValid: priceFieldValidation(e.target.value),
                    productPrice: e.target.value
                }
            }))
        }else if(e.target.name === "attrSize") {
            
            const inputParams = {size: e.target.value};

            setProductFieldState(prev => ({
                ...prev, 
                size: {
                    isSizeValid: attributeFieldValidation(inputVal.productType, inputParams),
                    attrSize: e.target.value
                }
            }))

        }else if(e.target.name === "attrWeight") {
            
            const inputParams = {weight: e.target.value};

            setProductFieldState(prev => ({
                ...prev, 
                weight: {
                    isWeightValid: attributeFieldValidation(inputVal.productType, inputParams),
                    attrWeight: e.target.value
                }
            }))

        }else if(e.target.name === "attrHeight") {
            
            const inputParams = {attrName: "height", height: e.target.value};

            const { isHeightValid } = attributeFieldValidation(inputVal.productType, inputParams);

            setProductFieldState(prev => ({
                ...prev, 
                height: {
                    isHeightValid, 
                    attrHeight: e.target.value
                }
            }))

        }else if(e.target.name === "attrWidth") {
            
            const inputParams = {attrName: "width", width: e.target.value};

            const { isWidthValid } = attributeFieldValidation(inputVal.productType, inputParams);

            setProductFieldState(prev => ({
                ...prev, 
                width: {
                    isWidthValid, 
                    attrWidth: e.target.value
                }
            }))

        }else if(e.target.name === "attrLength") {
            
            const inputParams = {attrName: "length", length: e.target.value};

            const { isLengthValid } = attributeFieldValidation(inputVal.productType, inputParams);

            setProductFieldState(prev => ({
                ...prev, 
                length: {
                    isLengthValid, 
                    attrLength: e.target.value
                }
            }))
        }
    }


    // method to submit a new product
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputVal.productType === "Book") {

            const prodData = {
                name: inputVal.productName,
                price: inputVal.productPrice,
                sku: inputVal.productSku,
                productType: inputVal.productType,
                attributes: JSON.stringify({
                    weight: inputVal.attrWeight
                })
            }

            addProduct(prodData);


        }else if(inputVal.productType === "DVD") {

            const prodData = {
                name: inputVal.productName,
                price: inputVal.productPrice,
                sku: inputVal.productSku,
                productType: inputVal.productType,
                attributes: JSON.stringify({
                    size: inputVal.attrSize
                })
            }

            addProduct(prodData);


        }else if(inputVal.productType === "Furniture") {

            const prodData = {
                name: inputVal.productName,
                price: inputVal.productPrice,
                sku: inputVal.productSku,
                productType: inputVal.productType,
                attributes: JSON.stringify({
                    height: inputVal.attrHeight,
                    width: inputVal.attrWidth,
                    length: inputVal.attrLength
                })
            }

            addProduct(prodData);
        }

        return;
    }

    const handleCancel = (e) => {
        e.preventDefault();
        window.location = "/product-list";
    }


    // Redirect to product list page if adding product succeeds
    useEffect(() => {

        if(addProdState.status === 'success') {
            window.location = "/product-list";
        }

    }, [addProdState.status])
    
    return (
        <div className="product-add-form-cover-flex">
            <div className="product-add-form-cover-item">
                <form className="form-cover" id="product-form" name="product-add-submit-form" onSubmit={handleSubmit}>
                    <div className="form-field-cover-flex">
                        <div className="form-field-cover-item">
                            <div className="input-field-content-cover-flex">
                                <div className="input-field-content-cover-item">
                                    <div className="input-cover">
                                        <label htmlFor="sku">SKU:</label>
                                        <input 
                                            className="product-add-input"
                                            id="skuNo"
                                            type="text"
                                            name="productSku"
                                            value={inputVal.productSku}
                                            onChange={handleInputChange}
                                            placeholder="Enter SKU number"
                                            required
                                        />
                                    </div>
                                    <SkuFieldValidation 
                                        productSku={inputVal.productSku}
                                        inputId="skuNo"
                                        validateSkuFieldState={validateSkuFieldState}
                                        validateSkuFieldMethod={validateSkuFieldMethod}
                                    />
                                    <div className="input-cover">
                                        <label htmlFor="name">Name:</label>
                                        <input 
                                            className="product-add-input"
                                            id="name"
                                            type="text"
                                            name="productName"
                                            value={inputVal.productName}
                                            onChange={handleInputChange}
                                            placeholder="Enter name"
                                            required
                                        />
                                    </div>
                                    <div className="input-cover">
                                        <label htmlFor="price">Price:</label>
                                        <input 
                                            className="product-add-input"
                                            id="price"
                                            type="text"
                                            name="productPrice"
                                            value={inputVal.productPrice}
                                            onChange={handleInputChange}
                                            placeholder="Enter price"
                                            required
                                        />
                                    </div>
                                    <PriceFieldValidation 
                                        isPriceValid={productFieldState.price.isPriceValid} 
                                        productPrice={inputVal.productPrice}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-type-fields-cover-flex">
                        <div className="product-type-fields-cover-item">
                            <label htmlFor="productType">Product Type:</label>
                            <select 
                                className="product-add-select" 
                                id="productType"
                                name="productType"
                                onChange={handleInputChange}
                                defaultValue="null"
                            >
                                <option value="null">Product Type</option>
                                <option value="Book">Book</option>
                                <option value="DVD">DVD</option>
                                <option value="Furniture">Furniture</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-attribute-fields-cover-flex">
                        <div className="product-attribute-fields-cover-item">
                            <AttributeTypeForm 
                                productType={inputVal.productType || null} 
                                handleInputChange={handleInputChange} 
                                inputVal={inputVal}
                                productFieldState={productFieldState}
                            />
                        </div>
                    </div>
                    <div className="btn-cover-flex">
                        <div className="btn-inner-cover-item">
                            <div className="btn-cover-item">
                                <SaveProductBtn 
                                    validateSkuFieldState={validateSkuFieldState}
                                    productFieldState={productFieldState}
                                    productType={inputVal.productType}
                                />
                            </div>
                            <div className="btn-cover-item">
                                <button 
                                    className="product-add-btn"
                                    type="button"
                                    onClick={handleCancel}
                                >Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    validateSkuFieldState: state.validateSkuFieldState
});

const mapDispatchToProps = (dispatch) => ({
    validateSkuFieldMethod: (params) => dispatch(validateSkuFieldAction(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddForm)