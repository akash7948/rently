import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../home";
import "./cards.css";
import "../detailpage";
import "../bookingform";

class Cards extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={this.props.image} alt="fff"></img>
            </div>
            <div className="card-content">
              <h5>{this.props.title}</h5>
              <Link
                to={this.props.car_link}
                className="waves-effect waves-light btn"
              >
                Rent
              </Link>

              <Link to="/book" className="waves-effect waves-light btn">
                Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
