import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Home!</Typography>
        <Link to="/register">Register</Link>
      </Grid>
    </Grid>
  );
};
