import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LoginStyled } from "./styled";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, val) => {
    let msg = "";

    if (name === "username") {
      if (!/^[A-Za-z0-9@._-]+$/.test(val)) {
        msg = "Please enter valid name";
      } else {
        msg = "";
      }
    }

    if (name === "password") {
      if (!/^[A-Za-z0-9@._-]+$/.test(val)) {
        msg = "Please enter valid password";
      } else if (val === values.username) {
        msg = "Password should not be same as Username";
      } else {
        msg = "";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validateField(name, value); 
  };

  // submit
  const validateAll = () => {
    let newErrors = {};

    if (!/^[A-Za-z0-9@._-]+$/.test(values.username)) {
      newErrors.username =
        "Please enter valid name";
    }

    if (!/^[A-Za-z0-9@._-]+$/.test(values.password)) {
      newErrors.password =
        "Please enter valid password";
    } else if (values.password === values.username) {
      newErrors.password = "Password should not be same as Username";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleLogin = (e) => {
  e.preventDefault();
  if (validateAll()) {
    console.log("Username:", values.username, "Password:", values.password);
    navigate("/Welcomepage"); //  Welcome page 
  }
};


  return (
    <LoginStyled>
      <header>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Sign In to Continue
        </Typography>
      </header>

      <form onSubmit={handleLogin}>
        <TextField
          name="username"
          label="Username"
          variant="standard"
          value={values.username}
          onChange={handleChange}
          error={!!errors.username}
          helperText={errors.username}
          fullWidth
        />

        <TextField
          name="password"
          type="password"
          label="Password"
          variant="standard"
          value={values.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          fullWidth
        />

        <div className="flexCenter">
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>

          <div>
            <Typography variant="h6" component="h5">
              Don&apos;t have Account?{" "}
              <Button onClick={() => navigate("/signup")}>SignUp</Button>
            </Typography>
          </div>
        </div>
      </form>
    </LoginStyled>
  );
}

export default Login;
