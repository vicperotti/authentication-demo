import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "./mutations";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup.string().required().email().label("User name"),
  password: yup.string().required(),
});

export const LoginForm = () => {
  const navigate = useNavigate();

  const [authenticate, { loading, error }] = useMutation(AUTHENTICATE_USER, {
    onCompleted: () => {
      navigate("/");
    },
    refetchQueries: ["GET_SESSION"],
  });
  const {
    handleReset,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { username, password } = values;
      await authenticate({ variables: { username, password } });
    },
    validationSchema,
  });

  if (error) {
    console.error(error);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            name="username"
            label="Username (email)"
            placeholder="joe@example.com"
            autoComplete="email"
            value={values.username}
            error={!!errors.username}
            helperText={errors.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <TextField
            name="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="***************"
            value={values.password}
            error={!!errors.password}
            helperText={errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        {error && (
          <Grid item>
            <Typography color="error">Error! {error.message}</Typography>
          </Grid>
        )}
        <Grid item>
          <Button type="submit" disabled={!isValid || isSubmitting || loading}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
