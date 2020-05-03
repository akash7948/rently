import React from "react";
import "./home";
import "./detailpage";
import "./cardetail.css";

const Car = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 m8">
            <img src={props.image} alt="abc"></img>
          </div>
          <div className="col s12 m4 specifications">
            <h6>
              Car Name :<span> {props.carname}</span>
            </h6>
            <h6>
              Description : <span>{props.description}</span>{" "}
            </h6>
            <h6>
              Vehicle Number : <span>{props.number}</span>{" "}
            </h6>
            <h6>
              Maximum Seating Capacity: <span>{props.seat} </span>
            </h6>
            <h6>
              Color :<span>{props.color}</span>{" "}
            </h6>
            <h6>
              Rent/Day: <span>{props.day} </span>
            </h6>
            <h6>
              Status: <span>{props.status}</span>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Car;
