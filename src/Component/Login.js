import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formData.email === "abc" && formData.password === "123") {
      toast.success("Logged In");
      // console.log("Printing the formData ");
      // console.log(formData)
      navigate.push("/home");
    } else {
      toast.error("Incorrect email id and password");
      navigate.push("/");
    }
  }

  return (
    <div>
      <image
        src="C:\Users\Lenono\.vscode\ReactJS\employee\purple-user-icon-in-circle-thin-line-vector-23745268.jpg"
        alt="User Image"
      ></image>
      <form onSubmit={submitHandler} className="d-flex flex-column">
        <label className="mx-auto">
          <p style={{ marginTop: 100 + "px" }} className="login">
            Email ID
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            name="email"
          />
        </label>

        <br />

        <label className="mx-auto">
          <p className="login">Password</p>
          <input
            required
            type="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            name="password"
          />
        </label>
        <button
          className="mx-auto mt-4 btn btn-primary"
          onClick={(e) => submitHandler(e)}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
