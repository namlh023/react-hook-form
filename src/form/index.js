import React, { useState } from "react";
import "./form.css";
import EyeIcon from "../assets/eye.svg";
import EyeCloseIcon from "../assets/eye-close.svg";

export default function Form() {
  const [passwordIcon, setPasswordIcon] = useState(EyeIcon);
  const [passwordType, setPasswordType] = useState("password");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangePasswordType = (e) => {
    if (passwordIcon === EyeIcon) {
      setPasswordIcon(EyeCloseIcon);
      setPasswordType("text");
    } else {
      setPasswordIcon(EyeIcon);
      setPasswordType("password");
    }
  };

  return (
    <form className="form">
      <div className="d-flex as-start gap-8">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">Show email and password</label>
      </div>
      <div className="d-flex gap-8 j-space-between mr-top-16 w-100">
        <div className="d-flex gap-8">
          <input type="radio" id="age" name="age" value="age" />
          <label for="age">Age</label>
        </div>
        <div className="d-flex gap-8">
          <input type="radio" id="no-age" name="age" value="noAge" />
          <label for="no-age">No Age</label>
        </div>
      </div>
      <div className="d-flex gap-8 mr-top-16 w-100">
        <input className="w-100" type="email" placeholder="Email" />
      </div>
      <div className="d-flex gap-8 mr-top-16 w-100 password">
        <input
          className="w-100 password__input"
          type={passwordType}
          placeholder="Password"
        />
        <img
          type="password"
          src={passwordIcon}
          alt=""
          width="15px"
          height="12px"
          onClick={handleChangePasswordType}
        />
      </div>
      <div className="d-flex gap-8 mr-top-16 w-100">
        <input className="w-100" type="number" placeholder="Minimum age" />
      </div>
      <div className="d-flex gap- 8 mr-top-16 w-100">
        <input className="w-100" type="number" placeholder="Maximum age" />
      </div>
      <button className="mr-top-16" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
