import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(...values);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* {showAlert && <Alert />} */}
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            labelText="name"
          />
        )}

        {/* email field */}
        <FormRow
          type="email"
          name="email"
          // value={values.email}
          onChange={handleChange}
          labelText="Email"
        />

        {/* password field */}
        <FormRow
          type="password"
          name="password"
          // value={values.password}
          onChange={handleChange}
          labelText="Password"
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="submit" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
