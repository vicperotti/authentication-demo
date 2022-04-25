import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useUser } from "../modules/user/UserContext";

export const Home = () => {
  const user = useUser();
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h2" component="h1">
          This is a boring home page
        </Typography>
      </Grid>
      <Grid item>
        {user === null ? (
          <Typography>
            There is no user currently logged in.{" "}
            <Link href="/login">Log in now?</Link>
          </Typography>
        ) : (
          <Typography>User with username {user.email} is logged in.</Typography>
        )}
      </Grid>
    </Grid>
  );
};
