import React, { } from "react";
import ProductListCard from "./ProductListCard";

export default function ProductListContentComponent(props) {

    const { listProdState, actionType, handleChkboxChange } = props;
    const { status, data } = listProdState;

    const handleClick = (e) => {
        e.preventDefault();

        window.location = "/product-add";
    }
    
    return (
        <div className="product-list-content-cover-flex">
            <div className="product-list-content-cover-item">
                {
                    data && data.length > 0 &&
                    <div className="list-card-cover-flex">
                        {
                            data.map((product, index) => {

                                return (
                                    <ProductListCard 
                                        actionType={actionType} 
                                        product={product}
                                        handleChkboxChange={handleChkboxChange}
                                        keyIndex={index} 
                                    />
                                )
                            })
                        }
                    </div>
                }
                {
                    data && data.length < 1 &&
                    <div className="no-data-cover-flex">
                        <div className="no-data-cover-item">
                            <div className="no-data-msg-cover">
                                <p className="no-data-msg-text">No product is listed here currently, click the button below to add a new one.</p>
                            </div>
                            <div className="add-btn-cover-flex">
                                <div className="add-btn-cover-item">
                                    <button
                                        className="add-btn"
                                        type="button"
                                        onClick={handleClick}
                                    >+ Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div> 
        </div>
    )
}