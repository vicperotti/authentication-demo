import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../modules/user/UserContext";

export const Navigation = () => {
  const user = useUser();
  return (
    <List>
      {user === null && (
        <>
          <ListItem button key="Register" component={NavLink} to="/register">
            <ListItemText primary="Register" />
          </ListItem>
          <ListItem button key="login" component={NavLink} to="/login">
            <ListItemText primary="Log In" />
          </ListItem>
        </>
      )}
      {user !== null && (
        <ListItem button key="users" component={NavLink} to="/users">
          <ListItemText primary="View Users" />
        </ListItem>
      )}
    </List>
  );
};
