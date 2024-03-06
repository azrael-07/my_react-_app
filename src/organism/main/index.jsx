// import { useState } from "react";
import Card from "../../molecules/Card";
import Filter from "../../molecules/filter";
// import Unavail from "../../molecules/unavail";
import { Link } from "react-router-dom";
import Comparecard from "../../molecules/compareCard";
import Banner from "../carousel";
const Main = (props) => {
  const {
    mobileData,
    incrementFunc,
    alertFunc,
    showAlert,
    searchVal,
    compareValue,
    setCompare,
    count,
    filter,
    setFilter,
  } = props;
  console.log(mobileData);

  return (
    // <h1>{mobileData}</h1>

    <div>
      <Banner searchVal={searchVal} />
      <Filter setFilter={setFilter}></Filter>

      <main className="main">
        <Comparecard
          setCompare={setCompare}
          compareValue={compareValue}
          mobileData={mobileData}
        />

        {mobileData
          .filter((val) => {
            if (searchVal === "") {
              return val;
            } else if (
              val.model.toLowerCase().includes(searchVal.toLowerCase()) ||
              val.brand.toLowerCase().includes(searchVal.toLowerCase())
            ) {
              return val;
            }
          })
          .map((data) => {
            return (
              <div>
                <div>
                  <Card
                    incrementFunc={incrementFunc}
                    brand={data.brand}
                    model={data.model}
                    available={data.available}
                    actual={data.actual}
                    price={data.price}
                    image={data.image}
                    color={data.color}
                    rating={data.rating}
                    bank={data.bank}
                    emi={data.emi}
                    id={data.id}
                    slide={data.images}
                    count={count}
                    alertFunc={alertFunc}
                    showAlert={showAlert}
                    compareValue={compareValue}
                    setCompare={setCompare}
                  />
                </div>

                {
                  // <div className="card">
                  //     <a href = "#">
                  //         <img src={data.image} alt={data.model} />
                  //         <h4 className="brand">{data.brand} <span className="model">{data.model}</span></h4>
                  //         <p className=" price">MRP: <span>&#8377; </span > { data.price} <span className="actual"> &#8377; {data.actual}</span></p>
                  //         <p className="discount">  {discount} % Off </p>
                  //         <div className="division"></div>
                  //         <p className="emi"><i role="presentation" airahidden={true} className="fas fa-wallet"></i><a className="emilink" href="#">{data.emi} at &#8377;{emiCalc}/month </a></p>
                  //         <p>Offer {data.bank}</p>
                  //         <a className = "buyLink" href = "#">{buy}</a>
                  //     </a>
                  // </div>
                }
              </div>
            );
          })}
      </main>
    </div>
  );
};
export default Main;
