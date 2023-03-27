/**
 * This scripts contains methods used to 
 * validate the variouus form fields.
 */

export const nameFieldValidation = (input) => {

    return;
}

// method to validate price field
export const priceFieldValidation = (input) => {

    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

    if(input.length === 0) {
        return null;
    }

    if(regex.test(input)) {
        return true;
    }
    return false;
}

// method to validate weight field for books
export const weightFieldValidation = (input) => {

    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

    if(input.length === 0) {
        return null;
    }

    if(regex.test(input)) {
        return true;
    }
    return false;
}

// method to validate size field for DVD
export const sizeFieldValidation = (input) => {

    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

    if(input.length === 0) {
        return null;
    }

    if(regex.test(input)) {
        return true;
    }
    return false;
}

// method to validate height field for furniture dimension
export const heightFieldValidation = (input) => {

    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

    if(input.length === 0) {
        return null;
    }

    if(regex.test(input)) {
        return true;
    }
    return false;
}

// method to validate width field for furniture dimension
export const widthFieldValidation = (input) => {

    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

    if(input.length === 0) {
        return null;
    }

    if(regex.test(input)) {
        return true;
    }
    return false;
}

// method to validate length field for furniture dimension
export const lengthFieldValidation = (input) => {

    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

    if(input.length === 0) {
        return null;
    }

    if(regex.test(input)) {
        return true;
    }
    return false;
}

export const skuFieldValidation = (input) => {

    return;
}

export const attributeFieldValidation = (productType, inputParams) => {

    switch(productType) {

        case "Book":
            return weightFieldValidation(inputParams.weight);
            
        case "DVD":
            return sizeFieldValidation(inputParams.size);

        case "Furniture":
            if(inputParams.attrName === "height") {
                return {
                    isHeightValid: heightFieldValidation(inputParams.height)
                }   
            }else if(inputParams.attrName === "width") {
                return {
                    isWidthValid: widthFieldValidation(inputParams.width)
                }   
            }else if(inputParams.attrName === "length") {
                return {
                    isLengthValid: lengthFieldValidation(inputParams.length)
                }   
            }
            break;
        default:
            return;
    }
}
