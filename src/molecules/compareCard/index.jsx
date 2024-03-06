import { Link } from "react-router-dom";
import Card from "../Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
var $ = require("jquery");
const Comparecard = (props) => {
  const { compareValue, mobileData, setCompare } = props;

  //carousel

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  //endof carousel
  //remove card

  function getRemoveId(val) {
    console.log("value of ", val);
    // const index = compareValue.splice(compareValue.indexOf(val));
    // if (index > -1) {
    //     compareValue.splice(index, 1);
    // }
    // console.log(index)

    compareValue.forEach((item, index) => {
      if (item === val) {
        console.log("item", item);
        compareValue.splice(index, 1);
      }
    });

    setCompare([...compareValue]);
  }
  function removeAll(val) {
    setCompare([]);
  }

  //end of remove Card
  //toggile comparecard
  function upDown() {
    $(".compare-Card-detail").toggleClass("active3");
    $(".down i").toggleClass("bx-flip-vertical");
  }

  //

  const [compareCard, setCompareCard] = useState(
    mobileData
      .filter((val) => {
        return compareValue.indexOf(val.model) > -1;
      })
      .map((dat) => {
        return (
          <div className="compare-card-wrap">
            <div className="compare-image">
              <img src={dat.images[0]} alt={dat.model} />
            </div>
            <div className="price-brand-wrap">
              <div className="brand-model">
                <div className="brand">{dat.brand}</div>
                <div className="wrap">{dat.model}</div>
              </div>
              <div className="price-info">
                <div className="price">&#8377; {dat.price}</div>
              </div>
            </div>

            <button
              value={dat.model}
              onClick={(e) => getRemoveId(e.currentTarget.value)}
              className="close compare-card-close "
            >
              <i class="bx bx-x"></i>
            </button>
          </div>
        );
      })
  );

  return (
    <div className="compare-Card-detail">
      {compareValue.length > 0 ? (
        <div
          onClick={() => {
            upDown();
          }}
          className="down"
        >
          <i class="bx bxs-down-arrow"></i>
        </div>
      ) : (
        ""
      )}
      <div className="carousel-compare-card">
        <Carousel responsive={responsive}>{compareCard}</Carousel>
      </div>
      <div className="compare-button">
        {compareValue.length > 1 ? (
          <div>
            <Link to="/compare">
              <button className="buyLink compare-btn">Compare</button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="clear-button">
        {compareValue.length > 0 ? (
          <div>
            <button
              onClick={() => {
                removeAll();
              }}
              className="buyLink clear-btn"
            >
              Clear All
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Comparecard;
