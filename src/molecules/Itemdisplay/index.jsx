import Img from "../../atoms/Image";
import Button from "../../atoms/Button";
// import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import ImageGallery from 'react-image-gallery'
import { useEffect, useState } from "react";
import { Carousel } from 'react-carousel-minimal';

var $;
$ = require('jquery')
const Itemdisplay = (props) => {
    $(document).ready(function () {
        $('.image-title').addClass('show')
        $('.image-detail').addClass('show')
        $('.delivery-type').addClass('show')
    });
    const { mobId, mobdata, incrFunc } = props;
    console.log("display", mobId)
    console.log("displayData", mobdata)
    const id = mobId - 1
    var calcDiscount = ((mobdata[id].actual - mobdata[id].price) / mobdata[id].actual) * 100;
    var discount = calcDiscount.toFixed(2);
    // var emiCalc = (mobdata[id].price / 6).toFixed(2);
    console.log("slide mobadata", mobdata[id].images[0])
    var buy, delivery, col;
    if (mobdata[id].available) {
        buy = "In Stock";
        delivery = "Free Delivery Slots Available";
        col = "green";

    }
    else {
        buy = "Out Of Stock";
        delivery = "Stock Un-Availability check Later";
        col = "red";
    }



    //Image mini carousel
    const captionStyle = {
       display:"none"
    }
    const slideNumberStyle = {
     display:"none"
    }
    const data = [
        {
            image: `http://localhost:3000/${mobdata[id].images[0]}`,
            caption: mobdata[id].model
        },
        {
            image: `http://localhost:3000/${mobdata[id].images[1]}`,
            caption: mobdata[id].model
        },
        {
            image: `http://localhost:3000/${mobdata[id].images[2]}`,
            caption: mobdata[id].model
        }


    ];


    return (
        <div>

            <div className="display-item-wrap">
                <div className="image-carousel">
                    <Carousel data={data}
                        time={8000} width="22em" height="23.8em" captionStyle={captionStyle} radius="10px" slideNumber={true} slideNumberStyle={slideNumberStyle} captionPosition="bottom"
                        automatic={true} dots={true} pauseIconColor="white" pauseIconSize="40px" slideBackgroundColor="darkgrey" slideImageFit="cover" thumbnails={true} thumbnailWidth="50em" thumbnailHeight="5em"
                         style={{
                            textAlign: "center", maxWidth: "20em", margin: "1em auto",  boxShadow:" 5px 5px 15px rgb(85, 82, 82)", borderRadius:"10px"
                        }}
                    />
                    {/* <Img sourse={'/' + mobdata[id].image} alter={mobdata[id].model} /> */}
                </div>
                <div className="image-detail">
                    <div className="model-info">
                        < Text className={"image-model"} textInput={mobdata[id].model} type={"h1"} />
                        <Text className="brand-name" textInput={'Brand : ' + mobdata[id].brand} />
                    </div>
                    <div className="division"></div>
                    <div className="price-info">
                        <div className="price-detail">
                            <p className='actual-price'>M.R.P : &#8377; <span> {mobdata[id].actual}</span> </p>
                            <Text className={'selling-price'} spanTextB={"special-price :"} textInput={mobdata[id].price} type={'p'} />
                            <Text className={'discount-price'} spanTextB={"Discount :"} textInput={discount + ' % Off'} type={'p'} />
                        </div>
                        <div className="division"></div>
                        <div className="stock-avail-wrap">
                            <div className="stock-container">
                                <Text className={'stock'} textInput={buy} type={'h2'} style={{ color: col }} />
                                <Text className={'seller'} textInput={"Sold by META In Patnership With " + mobdata[id].brand + "Through Meta Logistics Pvt.Ltd"} />

                            </div>
                        </div>
                        <div className="division"></div>
                        <div className="about-wrap">
                            <div className="about-item">
                                <p className="offers">Offers and Benifits</p>
                                <ul>
                                    <li><Text className={"emi-info"} textInput={mobdata[id].emi} type={'p'} /></li>
                                    <li><Text className={"bank-info"} textInput={mobdata[id].bank} type={'p'} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="delivery-type">
                    <div className="delivery-info">
                        <Text className={"item-type"} textInput={"META mobiles"} type={'h2'} />
                        <Text className={"delivery-speed"} textInput={'Free And Fast Delvery with Meta pro'} type={'p'} />
                    </div>
                    <div className="pro-button-container">
                        <Button classText={"pro-button"} buttonText={"Go Pro!"} />
                    </div>
                    <div className="division"></div>
                    <div className="delivery-slot-container">
                        <Text className={"delivery-slot"} textInput={delivery} type={"p"} />
                    </div>
                    <div className="buy-link" onClick={(e) => {
                        e.preventDefault()
                        incrFunc()
                    }}  >
                        <Button classText="buylinkbt" buttonText={buy} />
                    </div>
                </div>


            </div>
            {/* <ImageGallery item={images}  /> */}

        </div>
    )

}
export default Itemdisplay