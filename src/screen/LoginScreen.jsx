/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Grid, Card, TextField, Button, Typography } from "@mui/material";
import logo from "../assets/Logo-Instagram.png";

const formContainerStyle = {
  padding: "48px", // Adjust the padding as needed
  margin: "auto",
};

const textFieldStyle = {
  marginBottom: "16px", // Adjust the margin as needed
};

const buttonStyle = {
  marginTop: "16px", // Adjust the margin as needed
  textTransform: "none",
  borderRadius: "10px",
  fontSize: "1.2rem",
};
const LoginScreen = ({ setSignUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    console.log(id, value);

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSignUp = () => {
    // Perform form validation
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Update error state
    setErrors(newErrors);

    // If there are no errors, you can proceed with signup
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  const SignUpHandler = () => {
    setSignUp(false);
  };

  return (
    <Grid item sm={8} xs={12} md={4}>
      <Card variant="outlined" style={formContainerStyle}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <img src={logo} alt="Logo" className="w-48 m-auto " />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: "16px" }}>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              size="small"
              required
              fullWidth
              style={textFieldStyle}
              value={formData.email}
              onChange={(e) => handleChange(e)}
              error={!!errors.email}
              helperText={errors.email || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              autoComplete="current-password"
              size="small"
              required
              fullWidth
              style={textFieldStyle}
              value={formData.password}
              onChange={(e) => handleChange(e)}
              error={!!errors.password}
              helperText={errors.password || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              style={buttonStyle}
              onClick={handleSignUp}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Card
        variant="outlined"
        sx={{
          padding: "16px",
          textAlign: "center",
          marginY: "20px",
          fontSize: "1.2rem",
          verticalAlign: "none",
        }}
      >
        Don't have an account?
        <Button
          sx={{
            textTransform: "none",
            fontSize: "1.2rem",
            padding: "0 8px",
          }}
          onClick={() => SignUpHandler()}
        >
          Sign up
        </Button>
      </Card>
    </Grid>
  );
};

export default LoginScreen;
