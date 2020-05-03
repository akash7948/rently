import React, { Component } from "react";
import "./cardetail";
import Car from "./cardetail";

class Details extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    let id = this.props.match.params.car_detail;
    this.setState({
      id,
    });
  }
  render() {
    let carDetail;
    if (this.state.id === "volkswagen") {
      carDetail = (
        <Car
          image="/img/volkswagen.jpg"
          carname="Volkswagen Arteon"
          description="Petrol"
          number="HR34AG 8647"
          seat="5"
          color="green"
          day="1200 INR"
          status="Available"
        />
      );
    } else if (this.state.id === "ford") {
      carDetail = (
        <Car
          image="/img/ford.jpg"
          carname="Ford Endaveour"
          description="Diesel"
          number="HR28AG 7895"
          seat="7"
          color="white"
          day="1500 INR"
          status="Available"
        />
      );
    } else if (this.state.id === "honda") {
      carDetail = (
        <Car
          image="/img/honda.jpg"
          carname="Honda Civic"
          description="Petrol"
          number="HR25AG 8567"
          seat="5"
          color="green"
          day="1000 INR"
          status="Available"
        />
      );
    }
    return <div>{carDetail}</div>;
  }
}

export default Details;
