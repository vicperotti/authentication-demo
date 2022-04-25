import React from "react";
import { Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "./mutations";
import { useNavigate } from "react-router-dom";
import { client } from "../..";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const [logout, { error, loading }] = useMutation(LOGOUT_USER, {
    onCompleted: () => {
      client.resetStore();
      navigate("/");
    },
  });
  if (error) {
    console.error(error);
  }
  return (
    <Button onClick={() => logout()} color="inherit" disabled={loading}>
      Log Out
    </Button>
  );
};
