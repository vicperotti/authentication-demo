import React from "react";
import { Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "./queries";

export const LogoutButton = () => {
  const [logout, { error, loading }] = useMutation(LOGOUT_USER, {
    refetchQueries: ["GET_SESSION"],
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
