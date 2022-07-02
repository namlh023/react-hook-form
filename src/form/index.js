import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { object, string, number, boolean } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./form.css";
import EyeIcon from "../assets/eye.svg";
import EyeCloseIcon from "../assets/eye-close.svg";

const MESSAGE_REQUIRED = "This field is required";

const schema = object({
  checkbox: boolean(),
  age: string().oneOf(["age", "noAge"]),
  email: string().when("checkbox", {
    is: true,
    then: string().required(MESSAGE_REQUIRED).email(),
  }),
  password: string().when("checkbox", {
    is: true,
    then: string().required(MESSAGE_REQUIRED),
  }),
  minAge: number().when("age", {
    is: "age",
    then: number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required(MESSAGE_REQUIRED),
    otherwise: number()
      .transform((value) => (isNaN(value) ? 0 : value))
      .nullable(),
  }),
  maxAge: number().when("age", {
    is: "age",
    then: number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required(MESSAGE_REQUIRED),
    otherwise: number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .nullable(),
  }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkbox: true,
      age: "age",
    },
    resolver: yupResolver(schema),
  });
  const [checkbox, age] = watch(["checkbox", "age"]);

  const [passwordIcon, setPasswordIcon] = useState(EyeIcon);
  const [passwordType, setPasswordType] = useState("password");
  const onSubmit = (data) => {
    console.log(data);
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
        <input type="checkbox" id="checkbox" {...register("checkbox")} />
        <label htmlFor="checkbox">Show email and password</label>
      </div>
      <div className="d-flex gap-8 j-space-between mr-top-16 w-100">
        <div className="d-flex gap-8">
          <input
            type="radio"
            id="age"
            name="age"
            value="age"
            {...register("age")}
          />
          <label htmlFor="age">Age</label>
        </div>
        <div className="d-flex gap-8">
          <input
            type="radio"
            id="no-age"
            name="age"
            value="noAge"
            {...register("age")}
          />
          <label htmlFor="no-age">No Age</label>
        </div>
      </div>
      {checkbox && (
        <>
          <div className="d-flex gap-8 mr-top-16 w-100">
            <input
              className="w-100"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <ErrorMessage errors={errors} name="email" />
          <div className="d-flex gap-8 mr-top-16 w-100 password">
            <input
              className="w-100 password__input"
              type={passwordType}
              placeholder="Password"
              {...register("password")}
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
          <ErrorMessage errors={errors} name="password" />
        </>
      )}
      {age === "age" && (
        <>
          <div className="d-flex gap-8 mr-top-16 w-100">
            <input
              className="w-100"
              type="number"
              placeholder="Minimum age"
              {...register("minAge")}
            />
          </div>
          <ErrorMessage errors={errors} name="minAge" />
          <div className="d-flex gap- 8 mr-top-16 w-100">
            <input
              className="w-100"
              type="number"
              placeholder="Maximum age"
              {...register("maxAge")}
            />
          </div>
          <ErrorMessage errors={errors} name="maxAge" />
        </>
      )}
      <button
        className="mr-top-16"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </button>
    </form>
  );
}
