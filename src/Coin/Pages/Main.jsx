import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Coin from "../components/Coin";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import TableHead from "../components/TableHead";
const Main = ({ coins, slideCoin, onSearch }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  return (
    <div className="main">
      <div className="jumbotron">
        <div className="cards">
          <Carousel
            containerClass="carousel-container"
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            showDots={true}
            dotListClass="dots"
            removeArrowOnDeviceType={['mobile','tablet','desktop']}
          >
            {!!slideCoin && slideCoin.map((c) => (
              <Jumbotron key={c.id} id={c.id} {...c} />
            ))}
          </Carousel>
        </div>
        <div className="buttons"></div>
      </div>
      <SearchBar onSearch={onSearch} />
      <h4 className="recent">Recent</h4>
      <TableHead />
      {coins && coins.map((c) => <Coin key={c.id} id={c.id} {...c} />)}
    </div>
  );
};

export default Main;
