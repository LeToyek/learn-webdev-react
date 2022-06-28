import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import Coin from "../components/Coin";
import Jumbotron from "../components/Jumbotron";
import TableHead from "../components/TableHead";
const Main = ({ coins }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
  return (
    <div className="main">
      <div className="jumbotron">
        <div className="cards">
          <ReactElasticCarousel breakPoints={breakPoints}>
            {coins &&
              coins.map((c) => <Jumbotron key={c.id} id={c.id} {...c} />)}
          </ReactElasticCarousel>
        </div>
        <div className="buttons"></div>
      </div>
      <TableHead />
      {coins && coins.map((c) => <Coin key={c.id} id={c.id} {...c} />)}
    </div>
  );
};

export default Main;
