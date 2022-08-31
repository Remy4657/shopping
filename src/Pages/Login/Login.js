import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGIN } from "../../redux/Shopping/action.js";
import CheckoutSteps from "../../Components/CheckoutStep.js";

function Login() {
  const navigate = useNavigate();
  const inforUser = useSelector((state) => state.shop.inforUser);
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/shopping";

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [focused2, setFocused2] = useState(false);
  const [focused3, setFocused3] = useState(false);

  const handleEmail = () => {
    setFocused2(true);
  };
  const handlePass = () => {
    setFocused3(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { data } = await Axios.post("/api/users/signin", {
    //   email,
    //   password,
    // });

    Axios.post("http://localhost:5000/api/users/signin", {
      email,
      password,
    })
      .then(function (response) {
        const data = response.data;
        dispatch(USER_LOGIN(data));
        localStorage.setItem("inforUser", JSON.stringify(data));
        navigate(redirect || "/shopping");
        console.log("respon data: ", response);
      })
      .catch(function (error) {
        const err = error.response.data.message;
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    // const { data } = Axios.post("http://localhost:8080/api/users/signin", {
    //   email,
    //   password,
    // });
    // } catch (err) {
    //   toast.error("err", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };
  useEffect(() => {
    if (inforUser) {
      navigate(redirect);
    }
  }, [navigate, redirect, inforUser]);

  return (
    <div>
      <CheckoutSteps className="my-3" step1></CheckoutSteps>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>LOGIN</h1>

          <div>
            <br />
            <input
              className={styles.input}
              placeholder="Email"
              type="Email"
              onChange={(e) => handleChangeEmail(e)}
              required
              onBlur={handleEmail}
              onFocus={() => setFocused2(false)}
              focused={focused2.toString()}
              name="email"
              // value={email}
            />
            <span className={styles.span}>Email invalid.</span>
          </div>

          <div className="show-hidden-input">
            <br />
            <input
              className={styles.input}
              placeholder="Password"
              onChange={(e) => handleChangePassword(e)}
              //pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
              required
              onBlur={handlePass}
              onFocus={() => setFocused3(false)}
              focused={focused3.toString()}
              name="password"
              type={isShowPassword ? "text" : "password"}
              //value={password}
            />
            <i
              className={
                isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
              }
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
            ></i>
            <span className={styles.span}>Password invalid.</span>
          </div>

          <button className={styles.button}>Login</button>
          <p>
            New customer? <Link to="/signup">Create your account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
