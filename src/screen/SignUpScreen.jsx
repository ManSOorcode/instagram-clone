// import { Box, Button, Card, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../assets/Logo-Instagram.png";

import { Grid, Card, TextField, Button, Typography, Box } from "@mui/material";

const SignUpScreen = () => {
  const [isModal, setIsModal] = useState(false);

  const handleToggel = () => {
    setIsModal((prev) => !prev);
  };

  const formContainerStyle = {
    padding: "18px", // Adjust the padding as needed
    margin: "auto",
  };

  const textFieldStyle = {
    marginBottom: "16px", // Adjust the margin as needed
  };

  const buttonStyle = {
    marginTop: "16px", // Adjust the margin as needed
    textTransform: "none",
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="absolute w-full top-16"
    >
      <Grid item sm={8} xs={12} md={4}>
        <Card variant="outlined" style={formContainerStyle}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <img src={logo} alt="Logo" className="w-48 m-auto " />
            </Grid>
            <Grid item xs={12} textAlign="center" sx={{ paddingTop: 0 }}>
              <Typography variant="h6" gutterBottom>
                Sign up to see photo and videos from your friends.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-error-helper-text-1"
                label="Name"
                size="small"
                required
                fullWidth
                style={textFieldStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-error-helper-text-2"
                label="Email"
                type="password"
                size="small"
                required
                fullWidth
                style={textFieldStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-error-helper-text-3"
                label="Password"
                autoComplete="current-password"
                size="small"
                required
                fullWidth
                style={textFieldStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                style={buttonStyle}
                onClick={() => console.log("Sign In clicked")}
              >
                Sign up
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
          Have an account?
          <Button
            // variant="contained"
            sx={{ textTransform: "none", fontSize: "1.2rem", padding: "0 8px" }}
            onClick={() => console.log("Sign In clicked")}
          >
            Log in
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUpScreen;
