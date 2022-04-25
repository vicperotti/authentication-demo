import { Grid, Typography } from "@mui/material";
import React from "react";
import { RegisterUserForm } from "../modules/user/RegisterUserForm";

export const RegisterUser = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h2">Register Your Account</Typography>
      </Grid>
      <Grid item>
        <RegisterUserForm />
      </Grid>
    </Grid>
  );
};
