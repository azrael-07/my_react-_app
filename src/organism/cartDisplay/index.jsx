import { useState } from "react";
const Cartdisplay = (props) => {
    const { count, setCount, mobilesData } = props;
    console.log('Cart', count)

    const [indCount, SetIndCount] = useState({})
    function incFunc(id) {
        console.log(indCount)
    SetIndCount(indCount[id]+1)
}
function decFunc(id) {
    SetIndCount(indCount[id]-1)
}
 
 
    return (
        <div className="cart-item-info">
            {
                mobilesData.filter((val) => {

                    return count.indexOf(val.id) > -1

                }).map((dat) => {
                    return (

                        <div className="cart-container">
                            <div className="image-cart">
                                <img src={dat.images[0]} alt={dat.model} />
                            </div>
                            <div className="price-info">
                                <div className="brand-mobile-info">
                                    {dat.brand} {dat.model}
                                </div>
                                <div className="cart-price">
                                M.R.P : &#8377; {dat.price}
                                </div>
                                <div className="inc-dec">
                                    <div  className="inc"  onClick={()=>{incFunc(dat.id)}}><i class='bx bxs-plus-circle' ></i></div>
                                    <div  className="count">{indCount[dat.id]}</div>
                                    <div  className="dec" onClick={()=>{decFunc(dat.id)}}><i class='bx bxs-minus-circle' ></i></div>
                                </div>
                            </div>




                        </div>








                    )
                })
            }

        </div>
    )

}

export default Cartdisplay