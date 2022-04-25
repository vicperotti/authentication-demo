import { Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const RegistrationSuccess = () => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h2">Registration Success!</Typography>
        <Typography>
          Congratulations! You have completed your account registration. I bet
          you feel super accomplished right now.
        </Typography>
        <Typography>
          Go ahead and try to <NavLink to="/login">Log In</NavLink>. It might
          even work...
        </Typography>
      </Grid>
    </Grid>
  );
};
