import React, {} from "react";

export default function ProductListActionComponent(props) {

    const { actionType, handleClickAction } = props;

    switch(actionType) {

        case "product-add":
            return (
                <button 
                    className="action-type-btn"
                    type="button"
                    onClick={(e) => handleClickAction(e, actionType)}
                >Add product</button>
            )
        case "mass-delete":
            return (
                <button 
                    className="action-type-btn"
                    type="button"
                    onClick={(e) => handleClickAction(e, actionType)}
                >Mass Delete</button>
            )
        default:
            return <div></div>
    }
}