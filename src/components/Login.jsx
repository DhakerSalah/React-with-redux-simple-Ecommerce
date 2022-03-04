import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-2 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-4 pb-1">
                          Welcome With <span className="fw-bold">D-COMMERCE</span>
                        </h4>
                      </div>

                      <form>

                        <div className="mb-3">
                          <label className="form-label">Username or email address</label>
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Username or email address..."
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="password..."
                          />
                        </div>

                        <div className="text-center pt-1 mb-2 pb-1 d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn text-light btn-block gradient-custom-2 mb-2"
                            type="button">
                            LOG IN
                          </button>
                        </div>
                        
                        <div className="text-center pt-1 mb-3 pb-1">
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <NavLink to="/register" className="btn btn-outline-dark">
                            Create new
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
