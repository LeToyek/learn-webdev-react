import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import Coin from "../components/Coin";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import TableHead from "../components/TableHead";
const Main = ({ coins, onSearch }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  const slideCoin = coins && coins.slice(0, 10);

  return (
    <div className="main">
      <div className="jumbotron">
        <div className="cards">
          <ReactElasticCarousel
            breakPoints={breakPoints}
            enableAutoPlay={true}
            enableSwipe={true}
          >
            {/* <Slider dots
          slidesToShow ={4}
          autoplay = {true}

          > */}
            {slideCoin &&
              slideCoin.map((c) => <Jumbotron key={c.id} id={c.id} {...c} />)}
            {/* </Slider> */}
          </ReactElasticCarousel>
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
