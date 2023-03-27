import React, {useEffect, useState} from "react";
import ProductHeaderComponent from "../Components/ProductHeaderComponent";
import ProductListContentComponent from "../Components/ProductListContentComponent";
import { listProductAction } from "../Store/Action";
import { connect } from "react-redux";
import { useLocation } from "react-router";

function ProductList(props) {

    const {listProdState, listProdAction } = props;
    const { pathname } = useLocation();

    // initial select values
    const initialSelectVal = {
        actionType: ""
    }

    // initial chkbox values
    const initialChkboxVal = {};

    const [selectVal, setSelectVal] = useState(initialSelectVal);

    
    // method to handle the action type field on the header
    const handleSelectChange = (e) => {
        e.preventDefault();

        setSelectVal(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    // method to handle the chekcbox field on each list
    const handleChkboxChange = (e) => {

        const { id } = e.target;

        const chkbox = document.getElementById(`${id}`);
    }




    useEffect(() => {

        listProdAction();

    }, [])

    return (
        <div className="product-list-cover-flex">
            <div className="product-list-cover-item">
                <div className="product-list-comp-cover-flex">
                    <div className="product-list-comp-cover-item">
                        <ProductHeaderComponent 
                            locPathname={pathname} 
                            handleSelectChange={handleSelectChange}
                            selectVal={selectVal}
                        />
                        <ProductListContentComponent 
                            listProdState={listProdState} 
                            actionType={selectVal.actionType} 
                            handleChkboxChange={handleChkboxChange}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    listProdState: state.listProductState
})

const mapDispatchToProps = (dispatch) => ({
    listProdAction: () => dispatch(listProductAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

