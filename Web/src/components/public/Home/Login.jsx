import React from "react";
import { Formik } from "formik";

import { useLoginMutation } from "@app/slices/AuthSlice";

const Login = () => {
  const [login] = useLoginMutation();

  return (
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="title-default-bold mb-none">Login</div>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={{
                email: "admin@gmail.com",
                password: "123",
              }}
              onSubmit={async (values) => {
                await login(values).unwrap();
              }}
            >
              {(props) => (
                <form className="login-form" onSubmit={props.handleSubmit}>
                  <input
                    value={props.values.email}
                    type="text"
                    name="email"
                    className="main-input-box"
                    placeholder="Correo electrónico"
                    onChange={props.handleChange}
                  />
                  <input
                    value={props.values.password}
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    onChange={props.handleChange}
                    className="main-input-box"
                  />
                  <div className="inline-box mb-5 mt-4">
                    <div className="checkbox checkbox-primary">
                      <input id="modal-checkbox" type="checkbox" />
                      <label htmlFor="modal-checkbox">Remember Me</label>
                    </div>
                    <label className="lost-password">
                      <a href="#">Lost your password?</a>
                    </label>
                  </div>
                  <div className="inline-box mb-5 mt-4">
                    <button className="btn-fill" type="submit" value="Login">
                      Login
                    </button>
                    <a href="#" className="btn-register">
                      <i className="fas fa-user" />
                      Register Here!
                    </a>
                  </div>
                </form>
              )}
            </Formik>
            <label>Login connect with your Social Network</label>
            <div className="login-box-social">
              <ul>
                <li>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
