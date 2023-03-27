import React, {} from "react";
import { formHelpers } from "../../utils/form-helpers";
import SizeFieldValidation from "./Validations/SizeFieldValidation";
import WeightFieldValidation from "./Validations/WeightFieldValidation";
import HeightFieldValidation from "./Validations/HeightFieldValidation";
import WidthFieldValidation from "./Validations/WidthFieldValidation";
import LengthFieldValidation from "./Validations/LengthFieldValidation";

export default function AttributeTypeForm(props) {

    const { productType, handleInputChange, inputVal, productFieldState } = props;

    const productInfoObj = formHelpers(productType);

    switch(productType) {
        
        case "DVD":
            return (
                <div className="attr-type-form-cover-flex">
                    <div className="attr-type-form-cover-item">
                        <div className="attr-type-input-cover-item">
                            {
                                productInfoObj && <label htmlFor="size">{productInfoObj.productAttributes.attribute[0]}:</label>
                            }
                            <input 
                                className="product-attr-input"
                                id="size"
                                type="text"
                                name="attrSize"
                                value={inputVal.attrSize}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <SizeFieldValidation 
                            isSizeValid={productFieldState.size.isSizeValid} 
                            productSize={productFieldState.size.attrSize} 
                        />
                        <div className="attr-type-desc-cover-flex">
                            <div className="attr-type-desc-cover-item">
                                {
                                    productInfoObj && <p className="attr-type-desc">{productInfoObj.productAttributes.desc}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "Book":
            return (
                <div className="attr-type-form-cover-flex">
                    <div className="attr-type-form-cover-item">
                        <div className="attr-type-input-cover-item">
                            {
                                productInfoObj && <label htmlFor="weight">{productInfoObj.productAttributes.attribute[0]}:</label>
                            }
                            <input 
                                className="product-attr-input"
                                id="weight"
                                type="text"
                                name="attrWeight"
                                value={inputVal.attrWeight}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <WeightFieldValidation 
                            isWeightValid={productFieldState.weight.isWeightValid} 
                            productWeight={productFieldState.weight.attrWeight} 
                        />
                        <div className="attr-type-desc-cover-flex">
                            <div className="attr-type-desc-cover-item">
                                {
                                    productInfoObj && <p className="attr-type-desc">{productInfoObj.productAttributes.desc}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "Furniture":
            return (
                <div className="attr-type-form-cover-flex">
                    <div className="attr-type-form-cover-item">
                        <div className="attr-type-input-cover-item">
                            {
                                productInfoObj && <label htmlFor="height">{productInfoObj.productAttributes.attribute[0]}:</label>
                            }
                            <input 
                                className="product-attr-input"
                                id="height"
                                type="text"
                                name="attrHeight"
                                value={inputVal.attrHeight}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <HeightFieldValidation 
                            isHeightValid={productFieldState.height.isHeightValid} 
                            productHeight={productFieldState.height.attrHeight} 
                        />
                        <div className="attr-type-input-cover-item">
                            {
                                productInfoObj && <label htmlFor="width">{productInfoObj.productAttributes.attribute[1]}:</label>
                            }
                            <input 
                                className="product-attr-input"
                                id="width"
                                type="text"
                                name="attrWidth"
                                value={inputVal.attrWidth}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <WidthFieldValidation 
                            isWidthValid={productFieldState.width.isWidthValid} 
                            productWidth={productFieldState.width.attrWidth} 
                        />
                        <div className="attr-type-input-cover-item">
                            {
                                productInfoObj && <label htmlFor="length">{productInfoObj.productAttributes.attribute[2]}:</label>
                            }
                            <input 
                                className="product-attr-input"
                                id="length"
                                type="text"
                                name="attrLength"
                                value={inputVal.attrLength}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <LengthFieldValidation 
                            isLengthValid={productFieldState.length.isLengthValid} 
                            productLength={productFieldState.length.attrLength} 
                        />
                        <div className="attr-type-desc-cover-flex">
                            <div className="attr-type-desc-cover-item">
                                {
                                    productInfoObj && <p className="attr-type-desc">{productInfoObj.productAttributes.desc}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        case null:
            return (
                <div className="attr-type-empty-form-cover">
                    
                </div>
            )
    }
}