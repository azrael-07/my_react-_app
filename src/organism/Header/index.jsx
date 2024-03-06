import InputArea from "../../molecules/InputArea";
import Text from "../../atoms/Text";
import Profile from "../../molecules/profileArea";
import Cart from "../../molecules/cart";
import headerJquery from "./header";
import Unavail from "../../molecules/unavail";
var $;
$ = require("jquery");
const Header = (props) => {
  // headerJquery()
  const clickHam = () => {
    console.log("click Ham");
    $(".hamburgerContainer").toggleClass("active");

    $(".input-area-wrap").toggleClass("active2");
    $(".cart").toggleClass("active2");

    $(".profile-wrap").toggleClass("active1");
    $(".input-area-wrap").toggleClass("active1");
  };

  const { num, showAlert, seacrhEvent, setFilter } = props;

  const textInfo = "Meta";
  const typeInfo = "h1";
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="logo">
          <a href="#" className="logoa">
            {" "}
            <Text
              icon={<i className="bx bxl-tailwind-css"></i>}
              textInput={textInfo}
              type={typeInfo}
            />{" "}
          </a>
        </div>
        <InputArea setFilter={setFilter} seacrhEvent={seacrhEvent} />
      </div>
      <Profile />

      <Cart num={num} />
      <div
        aria-label={"Open the menu"}
        role={"button"}
        className="hamburgerContainer"
        onClick={clickHam}
      >
        <div aria-hidden={true} className="hamburger"></div>
      </div>
      {/* {showAlert ? <Unavail className="unavail" /> : <div></div>} */}
    </header>
  );
};

export default Header;
