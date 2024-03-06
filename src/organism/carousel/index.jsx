// import { Carousel } from "react-carousel-minimal"

import Carousel from "react-bootstrap/Carousel";
var $ = require("jquery");
const Banner = (props) => {
  const data = [
    {
      image: "http://localhost:3000/image/iphone13banner.jpg",
      caption: "Apple Iphone13",
    },
    {
      image: "http://localhost:3000/Image/samsungzfoldbanner.jpg",
      caption: " Samsung  Z_Flip",
    },
    {
      image: "http://localhost:3000//Image/samzfold.jpg",
      caption: "Samsung Z_Fold",
    },
  ];

  return (
    <div className="banner">
      {/* <Carousel data={data} time={8000} automatic={true}   dots={true} pauseIconColor="white" pauseIconSize="40px" slideImageFit="cover"  width="100vw" height="25em"
        // time={8000} width="20em" height="23.8em" captionStyle={captionStyle} radius="10px" slideNumber={true} slideNumberStyle={slideNumberStyle} captionPosition="bottom"
        // automatic={true} dots={true} pauseIconColor="white" pauseIconSize="40px" slideBackgroundColor="darkgrey" slideImageFit="cover" thumbnails={true} thumbnailWidth="50em" thumbnailHeight="5em"
        //  style={{
        //     textAlign: "center", maxWidth: "20em", margin: "1em auto",  boxShadow:" 5px 5px 15px rgb(85, 82, 82)", borderRadius:"10px"
        // }}
     />
     <Carousel/> */}
      <Carousel>
        <Carousel.Item interval={7000}>
          <img
            className="d-block w-100 h-75"
            src="http://localhost:3000/image/iphone13banner.jpg"
            alt="Image One"
          />
          <div className="carousel-cap-wrap">
            <Carousel.Caption>
              <div className="heading-image top-down ">Apple Iphone13</div>
              <div className="info top-down delay-2">
                <p>
                  {" "}
                  13 with A-14 Bionic: The Fastest and sleekest Iphone Ever..
                </p>
                <p> Enhanced Privacy and Accessability </p>

                <p class="highlight top-down1 delay-4">
                  Say Hello To The Future.......
                </p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 h-75"
            src="http://localhost:3000/Image/samzfold.jpg"
            alt="Image Two"
          />
          <div className="carousel-cap-wrap">
            <Carousel.Caption>
              <div className="heading-image top-down ">Galaxy Z_Fold</div>
              <div className="info top-down delay-2">
                <p> SnapDragon 855 The Fastest Ever In a Galaxy</p>
                <p> Technology At Its Core </p>

                <p class="highlight top-down1 delay-4">
                  Get Ready To Un-Fold The Future.......
                </p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img
            className="d-block w-100 h-75"
            src="http://localhost:3000//Image/samzflip.jpg"
            alt="Image Two"
          />
          <div className="carousel-cap-wrap">
            <Carousel.Caption>
              <div className="heading-image top-down">Galaxy Z_Flip</div>
              <div className="info top-down delay-2">
                <p> SnapDragon 855 The Fastest Ever In a Galaxy</p>
                <p> Nothing Like-Ever-Before In a smartPhone </p>

                <p class="highlight top-down1 delay-4">
                  Get Ready To Filp The Future.......
                </p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Banner;
