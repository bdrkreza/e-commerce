import { useMutation } from "@apollo/client";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../gqlOperation/mutation";
import "./auth.css";
/**
 * @author
 * @function Login
 **/

export const Login = (props) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);
  console.log(formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
  };

  if (data) {
    localStorage.setItem("jwt", data.login.token);
    navigate("/");
  }

  return (
    <div>
      <div id="login-page" className="row">
        <h1 className="card-panel #424242 grey darken-3 cyan-text">Login Now</h1>
        <div className="col s12 z-depth-6 card-panel #e3f2fd blue lighten-5">
          {error && <div className="card-panel red">{error.message}</div>}
          <form className="login-form " onSubmit={handleSubmit}>
            <div className="row"></div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mail_outline</i>
                <input
                  onChange={handleChange}
                  className="validate"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="userName or user@gmail.com"
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
                  Login
                </button>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m6 l6">
                <p className="margin medium-small">
                  <NavLink to="/register">Register Now!</NavLink>
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
