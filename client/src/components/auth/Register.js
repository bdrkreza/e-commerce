import { useMutation } from "@apollo/client";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { REGISTER_USER } from "../../gqlOperation/mutation";
import "./auth.css";

/**
 * @author
 * @function Register
 **/

export const Register = (props) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({
      variables: {
        input: formData,
      },
    });
  };

  if (data) {
    navigate("/login");
  }

  if (loading) {
    return (
      <h3 className=" card-panel cyan-text center-align">
        registration are loading...
      </h3>
    );
  }

  return (
    <div>
      <div id="login-page" className="row">
        <h1 className="card-panel black cyan-text">Register Now</h1>

        <div className="col s12 z-depth-6 card-panel">
          {error && <div className="card-panel red">{error.message}</div>}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_box</i>
                <input
                  onChange={handleChange}
                  className="validate"
                  id="user"
                  name="username"
                  placeholder="Enter Your UserName!"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mail_outline</i>
                <input
                  onChange={handleChange}
                  className="validate"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email!"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock_outline</i>
                <input
                  onChange={handleChange}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l12  login-text">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button
                  disabled={loading}
                  className="btn waves-effect waves-light col s12"
                >
                  Register
                </button>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m6 l6">
                <p className="margin medium-small">
                  <NavLink to="/login">login Now!</NavLink>
                </p>
              </div>
              <div className="input-field col s6 m6 l6">
                <p className="margin right-align medium-small">
                  <a href="#">Forgot password?</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
