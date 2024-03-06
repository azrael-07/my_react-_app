import "./reset.css";
import "./App.css";
import "./build/main.css";
import Main from "../src/organism/main";
import Footer from "./organism/footer";
import Header from "./organism/Header";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Itemdetail from "./organism/itemDetail";
import Compare from "./organism/comparision";
import Profilepage from "./organism/profile";
import Cartdisplay from "./organism/cartDisplay";

function App() {
  const [data, setData] = useState(null);
  const [compareValue, setCompare] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data);
        console.log(data);
      })
      .catch(function (err) {
        console.log(err, "error");
      });
  }, []);
  const [count, setCount] = useState([]);

  //localstorage
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));

    if (dataCart) setCount(dataCart);
  }, [0]);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    const dataCompare = JSON.parse(localStorage.getItem("dataCompare"));

    if (dataCompare) setCompare(dataCompare);
  }, [0]);

  useEffect(() => {
    localStorage.setItem("dataCompare", JSON.stringify(compareValue));
  }, [compareValue]);
  //close local
  console.log(data);
  const [showAlert, setShowAlert] = useState(false);
  const alertFunc = () => {
    setShowAlert(true);
  };
  //search Event

  const [eve, setEve] = useState("");
  const [filter, setFilter] = useState([]);
  console.log("serachEve", eve);
  console.log(compareValue);

  //compareEvent
  const [compareCard, SetCompareCard] = useState([]);

  return (
    <Router>
      <div>
        <Header
          num={count}
          showAlert={showAlert}
          seacrhEvent={setEve}
          setFilter={setFilter}
        />
        <Switch>
          <Route
            path="/"
            exact
            component={() =>
              data ? (
                <Main
                  count={count}
                  incrementFunc={setCount}
                  mobileData={data}
                  showAlert={showAlert}
                  alertFunc={alertFunc}
                  searchVal={eve}
                  compareValue={compareValue}
                  setCompare={setCompare}
                  compareCard={compareCard}
                  SetCompareCard={SetCompareCard}
                  filter={filter}
                  setFilter={setFilter}
                />
              ) : (
                ""
              )
            }
          />
          <Route
            path="/shop/:id"
            component={() =>
              data ? (
                <Itemdetail incrementfunc={setCount} mobiledata={data} />
              ) : (
                ""
              )
            }
          />
          <Route path="/profile" exact component={Profilepage} />
          <Route
            path="/compare"
            exact
            component={() =>
              data ? <Compare compareValue={compareValue} mobiles={data} /> : ""
            }
          />
          <Route
            path="/cart"
            exact
            component={() =>
              data ? (
                <Cartdisplay
                  count={count}
                  setCount={setCount}
                  mobilesData={data}
                />
              ) : (
                ""
              )
            }
          />
        </Switch>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
