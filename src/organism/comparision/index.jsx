import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";


const Compare = (props) => {
    const { compareValue, mobiles } = props
    console.log(" compareValue", compareValue)
    //carousel set up
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    //slick slider
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    const d = mobiles.filter(val => {
        return compareValue.indexOf(val.model) > -1

    })
    console.log(d)
    const [mobData, setMobData] = useState(mobiles.filter((val) => {

        return compareValue.indexOf(val.model) > -1

    }).map((dat) => {
        return (


            <div className="details-indepth ">
                <ul className="comparision">
                    <li className="detail-image"><img src={dat.images[0]} alt={dat.model} /></li>
                    <div className="div"></div>
                    <li>{dat.brand}</li>
                    <div className="div"></div>
                    <li>{dat.model}</li>
                    <div className="div"></div>
                    <li>&#8377; {dat.price}</li>
                    <div className="div"></div>
                    <li>{dat.emi}</li>
                    <div className="div"></div>
                    <li>{dat.bank}</li>
                    <div className="div"></div>
                    <li>{dat.fiveg}</li>
                    <div className="div"></div>
                    <li>{dat.processor}</li>
                    <div className="div"></div>
                    <li>{dat.warrenty}</li>
                    <div className="div"></div>
                    <li>{dat.camera}</li>
                    <div className="div"></div>
                    <li>{dat.battery}</li>
                    <div className="div"></div>
                    <li>{dat.rating}</li>
                    <div className="div"></div>
                    <li>{dat.scrren_Size}</li>
                    <div className="div"></div>
                    <li>{dat.speakers}</li>
                    <div className="div"></div>
                </ul>

            </div>

        )
    })





    )

    return (
        <div className="wrap-compare">
            <div className="head-back">
                <div className="back">
                    <Link  to="/">
                  <button className="back-button"><i class='bx bx-arrow-back bx-fade-left' > Back</i></button>
                  </Link>
                </div>
                <div className="compare-title">
                    <h1>Compare</h1>
                </div>
            </div>
            
                <div className="compare-count" >
                    <p> <span className="count">{compareValue.length}</span> Devices in comparision</p>
                </div>

           
            <div className="details-indepth  static-table">
                <ul className="comparision">
                    <li className="detail-image text ">Image</li>
                    <div className="div"></div>
                    <li>Brand</li>
                    <div className="div"></div>
                    <li>Model</li>
                    <div className="div"></div>
                    <li>Price</li>
                    <div className="div"></div>
                    <li>Discount</li>
                    <div className="div"></div>
                    <li>Offers</li>
                    <div className="div"></div>
                    <li>5g</li>
                    <div className="div"></div>
                    <li>Processor</li>
                    <div className="div"></div>
                    <li>Warrenty</li>
                    <div className="div"></div>
                    <li>Camera</li>
                    <div className="div"></div>
                    <li>Battery</li>
                    <div className="div"></div>
                    <li>Rating</li>
                    <div className="div"></div>
                    <li>Scrren_Size</li>
                    <div className="div"></div>
                    <li>Speakers</li>
                    <div className="div"></div>
                </ul>



            </div>
            <div class="carousel-wrap">
                <Carousel responsive={responsive}>

                    {mobData}

                </Carousel>;
            </div>








        </div>

    )
}
export default Compare