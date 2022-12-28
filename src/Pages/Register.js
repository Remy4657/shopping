import React, { useState, useEffect } from "react";
import styles from "./Login/Login.module.css";
import { toast } from "react-toastify";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_LOGIN } from "../redux/Shopping/action.js";

function Register() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const dispatch = useDispatch();

  const inforUser = useSelector((state) => state.shop.inforUser);

  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  console.log("re 1:", redirectInUrl, "re2", redirect);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const [focused, setFocused] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [focused3, setFocused3] = useState(false);
  const [focused4, setFocused4] = useState(false);

  const handleName = () => {
    setFocused(true);
  };
  const handleEmail = () => {
    setFocused2(true);
  };
  const handlePass = () => {
    setFocused3(true);
  };
  const handleCfPass = () => {
    setFocused4(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Confirm password  incorrect !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    axios
      .post("https://api-shopping-15mm.vercel.app/api/users/signup", {
        name,
        email,
        password,
      })
      .then(function (response) {
        const data = response.data;
        dispatch(USER_LOGIN(data));
        localStorage.setItem("inforUser", JSON.stringify(data));
        navigate(redirect || "/shopping");
      })
      .catch(function (error) {
        //console.log("err: ", error);
        //const err = error.response.data.message;
        toast.error("Account already exists", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    // try {
    //   const { data } = await axios.post("/api/users/signup", {
    //     name,
    //     email,
    //     password,
    //   });
    //   dispatch(USER_LOGIN(data));
    //   localStorage.setItem("inforUser", JSON.stringify(data));
    //   navigate(redirect || "/");
    // } catch (err) {}
  };

  useEffect(() => {
    if (inforUser) {
      navigate(redirect);
    }
  }, [navigate, redirect, inforUser]);

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1>REGISTER</h1>
        <div>
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            // pattern="^a-z0-9A-Z_[:space:]ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u','',$text"
            required
            onBlur={handleName}
            onFocus={() => setFocused(false)}
            focused={focused.toString()}
            name="username"
            value={name}
          />
          <span className={styles.span}>Username is not empty!</span>
        </div>

        <div>
          <br />
          <input
            className={styles.input}
            placeholder="Email"
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            onBlur={handleEmail}
            onFocus={() => setFocused2(false)}
            focused={focused2.toString()}
            name="email"
            value={email}
          />
          <span className={styles.span}>Email invalid.</span>
        </div>

        <div className="show-hidden-input">
          <br />
          <input
            className={styles.input}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            //pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            required
            onBlur={handlePass}
            onFocus={() => setFocused3(false)}
            focused={focused3.toString()}
            name="password"
            value={password}
            type={isShowPassword ? "text" : "password"}
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

        <div className="show-hidden-input">
          <br />
          <input
            className={styles.input}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            onBlur={handleCfPass}
            onFocus={() => setFocused4(false)}
            focused={focused4.toString()}
            name="cfpassword"
            value={confirmPassword}
            type={isShowConfirmPassword ? "text" : "password"}
          />
          <i
            className={
              isShowConfirmPassword
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => {
              setIsShowConfirmPassword(!isShowConfirmPassword);
            }}
          ></i>
          <span className={styles.span}>Confirm password is not true!</span>
        </div>

        <div className="mb-3">
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className={styles.button}
          >
            Signup
          </button>
        </div>

        <div className="mb-3">
          Already have an account?{" "}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
