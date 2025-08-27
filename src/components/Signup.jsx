import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { LoginStyled } from "./styled";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  //  validation checks
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!/^[A-Za-z\s]+$/.test(value)) {
          newErrors.name = "Please enter valid name";
        } else {
          delete newErrors.name;
        }
        break;

      case "username":
        if (!/^[a-zA-Z0-9._-]+$/.test(value)) {
          newErrors.username = "Please enter valid username";
        } else {
          delete newErrors.username;
        }

        // check username !== password
        if (values.password && value === values.password) {
          newErrors.password = "Username & password cannot be same";
        } else {
          delete newErrors.password;
        }
        break;

      case "email":
        if (!/^[\w.-]+@gmail\.com$/.test(value)) {
          newErrors.email = "Enter a valid gmail";
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (!/^\+\d{1,3}\d{10}$/.test(value)) {
          newErrors.phone =
            "Enter valid phone with country code (e.g. +9198xxxxxxxx)";
        } else {
          delete newErrors.phone;
        }
        break;

      case "password":
        if (!/^[a-zA-Z0-9@#$%^&*!]+$/.test(value)) {
          newErrors.password =
            "Password must be alphanumeric with special chars";
        } else if (value === values.username) {
          newErrors.password = "Username & password cannot be same";
        } else {
          delete newErrors.password;
        }

        if (values.confirmPassword && value !== values.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }
        break;

      case "confirmPassword":
        if (value !== values.password) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  // submit validation
  const validateAll = () => {
    let newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(values.name)) {
      newErrors.name = "Please enter valid name";
    }
    if (!/^[a-zA-Z0-9._-]+$/.test(values.username)) {
      newErrors.username = "Please enter valid username";
    }
    if (!/^[\w.-]+@gmail\.com$/.test(values.email)) {
      newErrors.email = "Enter a valid gmail";
    }
    if (!/^[a-zA-Z0-9@#$%^&*!]+$/.test(values.password)) {
      newErrors.password = "Password must be alphanumeric with special chars";
    }
    if (values.username === values.password) {
      newErrors.password = "Username & password cannot be same";
    }
    if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!/^\+\d{1,3}\d{10}$/.test(values.phone)) {
      newErrors.phone =
        "Enter valid phone with country code (e.g. +9198xxxxxxxx)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      alert("Signup done success");
      navigate("/"); // Redirect to Login
    }
  };

  return (
    <LoginStyled>
      <header>
        <Typography variant="h5" component="h1" gutterBottom>
          Create a new Account
        </Typography>
      </header>

      <Container>
        <form onSubmit={handleSubmit}>
          <div className="signUppage">
            <TextField
              name="name"
              label="Name"
              variant="standard"
              value={values.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />
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
              name="email"
              label="Email"
              variant="standard"
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              name="phone"
              label="Phone (+91XXXXXXXXXX)"
              variant="standard"
              value={values.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="standard"
              value={values.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              fullWidth
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              variant="standard"
              value={values.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              fullWidth
            />
          </div>

          <div>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </div>
        </form>
      </Container>
    </LoginStyled>
  );
}

export default Signup;
