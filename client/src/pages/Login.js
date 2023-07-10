import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="/">
            Heartfelt Veterinary
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link text-white active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white active"
                  aria-current="page"
                  href="/login"
                >
                  Login
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link text-white active"
                  aria-current="page"
                  href="/register"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="form-container1 ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          class="register-form1"
        >
          <h3 class="text-center text-white">Login From</h3>

          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" class="m-2">
            Not a user Register here
          </Link>
          <button class="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>

      <footer class="text-center1 text-white">
        <div class="text-center text-light p-2 bg-dark">
          <a
            class="btn2 btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            class="btn2 btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            class="btn2 btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <div>
            {" "}
            © 2023 Copyright: Verterinary Doctor Appointment Scheduling System
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;
