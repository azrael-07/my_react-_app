// import Cart from "../cart";
import React, { createRef, useRef, useState } from "react";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";
import Unavail from '../unavail'
var $ = require('jquery')

const Card = (props) => {
    const { brand, model,
        incrementFunc,
        available, actual,
        price, image, slide,compareValue,setCompare,count,

        bank, emi, id } = props;
    var calcDiscount = ((actual - price) / actual) * 100;
    var discount = calcDiscount.toFixed(2);
    var emiCalc = (price / 6).toFixed(2);
    console.log(emiCalc)
    var buy, clickFunction;

    const [showAlert, setShowAlert] = useState(false)
    const alertFunc = () => {

        setShowAlert(!showAlert)

    }



    if (available) {
        buy = "Add To Cart";
        clickFunction = incrementFunc;

    }
    else {
        buy = "Notify ME"
        clickFunction = alertFunc;
    };

    // console.log("slide", model)
    //strat compare
function showCompare(){
    console.log('hi compare')
    $('.compareCard').addClass('active')

}

   
        

  
   
    return (
        <div>
            {showAlert ? <Unavail className="unavail" showAlert={showAlert} setShowAlert={setShowAlert} /> : <div></div>}
            <div className="card-wrap compare-wrap">
                <div className="card compare-card" >

                    <a href="#">
                        <div >
                            <Link to={`shop/${id}`}>
                                <img src={slide[0]} alt={model} />
                                <div className="product-info">
                                    <h4 className="brand">{brand} <span className="model">{model}</span></h4>

                                    <p className=" price">MRP: <span>&#8377; </span > {price} <span className="actual"> &#8377; {actual}</span></p>
                                    <p className="discount">  {discount} % Off </p>
                                    <div className="division"></div>
                                    <p className="emi"><i role="presentation" className="fas fa-wallet"></i><a className="emilink" href="#">{emi} at &#8377;{emiCalc}/month </a></p>
                                    <p>Offer {bank}</p>
                                </div>
                            </Link>
                        </div>
                    </a>
                    <div role={'button'} className="buy-link" value={model} id={id} onClick={(e) => {
                        console.log(e.target.value)
                       
                        if( !count.includes( e.target.value)){
                            clickFunction([...count, e.target.value])} else{
                                alert("already added"); 
                            }
                    }}>
                        <Button classText="buyLink" value={id} buttonText={buy} />
                             
                    </div>
                    <button className="compare" value={model} onClick={   (e)=>{
                        showCompare();
                        if( !compareValue.includes( e.target.value)){
                      compareValue.length>3?alert("cant send anymore"):setCompare([...compareValue, e.target.value])} else{
                          alert("already added"); 
                      }
                    } }>{'Add To compare  '}<i className='bx bx-plus plusIcon'></i></button> 

                    



                </div>


            </div>

        </div>
    )

}

export default Card