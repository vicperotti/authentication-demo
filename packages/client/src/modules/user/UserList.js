import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { GET_USERS } from "./queries";

const columns = [
  { field: "email", headerName: "Username", width: 150 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
];

export const UserList = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  if (error)
    return (
      <Typography variant="h5" color="error">
        {error.message}
      </Typography>
    );
  if (loading) return <Typography variant="h5">Loading...</Typography>;

  return (
    <div style={{ height: 400, width: 600 }}>
      <DataGrid rows={data.users} columns={columns} />
    </div>
  );
};
