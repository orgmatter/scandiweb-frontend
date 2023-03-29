import React, {} from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProductListCard(props) {

    const { 
        actionType, 
        product, 
        handleChkboxChange
    } = props;
    
    return (
        <div className="list-card-cover-item" key={uuidv4()}>
            <div className="list-card" key={uuidv4()}>
                <div className="card-data-cover-flex">
                    <div className="card-data-cover-item" id="product-sku">{product.sku}</div>
                    <div className="card-data-cover-item" id="product-name">{product.name}</div>
                    <div className="card-data-cover-item" id="product-price">
                        {
                            parseFloat(product.price).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD"
                            })
                        }
                    </div>
                    {
                        product.productType === "Book" && 
                        <div className="card-data-cover-item" id="product-attr">{`Weight: ${JSON.parse(product.attributes).weight} KG`}</div>
                    }
                    {
                        product.productType === "DVD" && 
                        <div className="card-data-cover-item" id="product-attr">{`Size: ${JSON.parse(product.attributes).size} MB`}</div>
                    }
                    {
                        product.productType === "Furniture" && 
                        <div className="card-data-cover-item" id="product-attr">
                            {`${JSON.parse(product.attributes).height}x${JSON.parse(product.attributes).height}x${JSON.parse(product.attributes).length}`}
                        </div>
                    }
                </div>
            </div>
            <input
                className="delete-checkbox"
                id={`chk-${product.id}`}
                name={`chk${product.id}`}
                type="checkbox"
                value={product.id}
                onChange={handleChkboxChange}
            />
        </div>
    )
}