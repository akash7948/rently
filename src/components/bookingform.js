import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import "./bookingform.css";

export default function Form() {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const { control } = useForm();
  const onSubmit = () => {
    swal(
      "Your car is booked..",
      "We'll get in touch with you soon!",
      "success"
    ).then((value) => {
      if (value == true) {
        history.push("/");
      }
    });
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input
        type="text"
        name="First name"
        ref={register({ required: true, maxLength: 80 })}
      />
      <label>Last name</label>
      <input
        type="text"
        name="Last name"
        ref={register({ required: true, maxLength: 100 })}
      />
      <label>Email</label>
      <input
        type="text"
        name="Email"
        ref={register({
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <label>Mobile number</label>
      <input
        type="tel"
        name="Mobile number"
        ref={register({ required: true, maxLength: 11, minLength: 8 })}
      />
      <Controller
        as={ReactDatePicker}
        control={control}
        valueName="selected" // DateSelect value's name is selected
        onChange={([selected]) => selected}
        name="ReactDatepicker"
        className="input"
        placeholderText="Issue date"
      />
      <Controller
        as={ReactDatePicker}
        control={control}
        valueName="selected" // DateSelect value's name is selected
        onChange={([selected]) => selected}
        name="ReactDatepickers"
        className="input"
        placeholderText="Return date"
      />

      <input type="submit" o />
    </form>
  );
}
