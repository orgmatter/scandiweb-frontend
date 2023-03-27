var productInfoHelpers = [
    {
        productType: "DVD",
        productAttributes: {
            attribute: ["Size"],
            format: "MB",
            dataType: "integer",
            desc: "Please provide the size of the DVD above in MB format"
        }
    },
    {
        productType: "Book",
        productAttributes: {
            attribute: ["Weight"],
            format: "KG",
            dataType: "integer",
            desc: "Please enter the weight of the Book above in KG format"
        }
    },
    {
        productType: "Furniture",
        productAttributes: {
            attribute: ["Height", "Width", "Length"],
            format: "Dimension",
            dataType: "integer",
            desc: "Please enter the dimensions of the Furniture above in HxWxL format"
        }
    }
]


export const formHelpers = (productType) => {

    var productTypeObj = productInfoHelpers.find(productInfoHelper => productInfoHelper.productType == productType);

    return productTypeObj;
}