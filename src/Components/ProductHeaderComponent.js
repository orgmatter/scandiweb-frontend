import React, {useEffect} from "react";
import ProductListActionBtn from "./ProductListActionBtn";
import { deleteProductAction } from "../Store/Action";
import { connect } from "react-redux";

function ProductHeaderComponent(props) {

    const { 
        locPathname, 
        handleSelectChange, 
        selectVal, 
        deleteProdState, 
        deleteProdAction 
    } = props;


    const handleClickAction = (e, actionType) => {

        e.preventDefault();

        if(actionType === "add-product") {
            window.location = "/product-add";
            
        }else if(actionType === "mass-delete") {

            const chkboxCollection = document.getElementsByClassName("delete-checkbox");

            const checkedElems = Array.from(chkboxCollection).filter((chkbox) => chkbox.checked);

            const checkedVals = checkedElems.map((checkedElem, index) => {

                return checkedElem.value;
            });

            deleteProdAction(checkedVals);
        }
        return;
    }

    useEffect(() => {

        if(deleteProdState.status === "success") {

            window.location = "/product-list";
        }

    }, [deleteProdState.status])

    switch(locPathname) {

        case "/product-list":
            return (
                <div className="product-header-cover-flex">
                    <div className="product-header-cover-item">
                        <p className="product-header-txt">Product List</p>
                    </div>
                    <div className="product-header-cover-item">
                        <div className="action-cover-flex">
                            <div className="action-cover-item">
                                <button 
                                    className="action-type-btn"
                                    type="button"
                                    value="ADD"
                                    onClick={(e) => handleClickAction(e, "add-product")}
                                >ADD</button>
                            </div>
                            <div className="action-cover-item">
                                <button 
                                    className="action-type-btn"
                                    type="button"
                                    value="MASS DELETE"
                                    onClick={(e) => handleClickAction(e, "mass-delete")}
                                >MASS DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "/product-add":
            return (
                <div className="product-header-cover-flex">
                    <div className="product-header-cover-item">
                        <p className="product-header-txt">Product Add</p>
                    </div>
                    <div className="product-header-cover-item">
                        
                    </div>
                </div>
            )
        default:
            return (
                <div></div>
            )
    }
}

const mapStateToProps = (state) => ({
    deleteProdState: state.deleteProductState
});

const mapDispatchToProps = (dispatch) => ({
    deleteProdAction: (params) => dispatch(deleteProductAction(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductHeaderComponent)