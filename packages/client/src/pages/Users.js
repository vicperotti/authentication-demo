import { Grid, Typography } from "@mui/material";
import React from "react";
import { UserList } from "../modules/user/UserList";

export const Users = () => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h4">User Management</Typography>
      </Grid>
      <Grid item>
        <UserList />
      </Grid>
    </Grid>
  );
};
