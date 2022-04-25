import { Grid, Typography } from "@mui/material";
import React from "react";
import { LoginForm } from "../modules/user/LoginForm";

export const Login = () => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h2">Sign In</Typography>
      </Grid>
      <Grid item>
        <LoginForm />
      </Grid>
    </Grid>
  );
};
