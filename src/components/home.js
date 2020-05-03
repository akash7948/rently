import React from "react";
import "./cards/cards";
import Cards from "./cards/cards";
import "./bookingform";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Rently</h1>
        </div>

        <div className="section">
          <div className="row">
            <Cards
              image={"/img/volkswagen.jpg "}
              car_link={"/volkswagen"}
              title={"Volkswagen Arteon"}
            />
            <Cards
              image={"/img/ford.jpg "}
              car_link={"/ford"}
              title={"Ford Endaveour"}
            />
            <Cards
              image={"/img/honda.jpg "}
              car_link={"/honda"}
              title={"Honda Civic"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
