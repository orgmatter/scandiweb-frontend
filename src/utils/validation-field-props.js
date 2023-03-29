export const validationFieldProps = {
    sku: {
        dataType: "string",
        length: 10,
        isUnique: true,
    },
    name: {
        dataType: "string",
    },
    price: {
        currency: "$",
        dataType: "float"
    },
    attributes: {
        book: {
            weight: {
                dataType: "float",
                format: "KG"
            }
        },
        dvd: {
            size: {
                dataType: "float",
                format: "MB"
            }
        },
        furniture: {
            height: {
                dataType: "float",
            },
            width: {
                dataType: "float",
            },
            length: {
                dataType: "float"
            }
        }
    }
}