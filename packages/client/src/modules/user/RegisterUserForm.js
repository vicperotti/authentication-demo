import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "./mutations";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup.string().required().email().label("Username"),
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  password: yup
    .string()
    .required()
    .label("Password")
    .min(8, "Password must be at least 8 characters."),
  confirmPassword: yup
    .string()
    .required()
    .label("Confirm Password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const RegisterUserForm = () => {
  const navigate = useNavigate();

  const [registerUser, { error }] = useMutation(REGISTER_USER, {
    onCompleted: () => {
      navigate("/register/success");
    },
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
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (input, { setSubmitting }) => {
      try {
        await registerUser({ variables: { input } });
      } catch (error) {
        console.error("Error!", error.message);
      }
    },
    validationSchema,
  });

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            name="email"
            label="Email Address"
            placeholder="joe@example.com"
            autoComplete="email"
            value={values.email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <TextField
            name="firstName"
            label="First Name"
            placeholder="Joe"
            value={values.firstName}
            error={!!errors.firstName}
            helperText={errors.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <TextField
            name="lastName"
            label="Last Name"
            placeholder="Dirte"
            value={values.lastName}
            error={!!errors.lastName}
            helperText={errors.lastName}
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
        <Grid item>
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            autoComplete="new-password"
            placeholder="***************"
            value={values.confirmPassword}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
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
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
