import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";
import { Form } from "./styles";
import { selectIsLoggedIn } from "../../store/auth-reducer/selectors";
import { loginTC } from "../../store/auth-reducer/thunks";

export const Login = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const formik = useFormik({
    validate: (values) => {
      if (!values.email) {
        return {
          email: "Email is required",
        };
      }
      if (!values.password) {
        return {
          password: "Password is required",
        };
      }
    },
    initialValues: {
      email: "mikutishvili.koba@gmail.com",
      password: "simplePassword1234",
      rememberMe: false,
    },
    onSubmit: (values) => {
      dispatch(loginTC(values));
    },
  });

  const emailError = formik.errors.email ? (
    <div>{formik.errors.email}</div>
  ) : null;

  const passwordError = formik.errors.password ? (
    <div>{formik.errors.password}</div>
  ) : null;

  if (isLoggedIn) {
    return <Redirect to={"/"} />;
  }

  return (
    <Grid container justify="center">
      <Grid item>
        <Form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>
              {/* <p>
                To log in get registered{" "}
                <a
                  href={"https://social-network.samuraijs.com/"}
                  target={"_blank"}
                >
                  here
                </a>
              </p> */}
              <p style={{ color: "#2E3B55" }}>
                You can use test account credentials
              </p>
              <p>
                <span style={{ color: "#2E3B55" }}> Email: </span>
                mikutishvili.koba@gmail.com
              </p>
              <p>
                <span style={{ color: "#2E3B55" }}>Password: </span>
                simplePassword1234
              </p>
            </FormLabel>
            <FormGroup>
              <TextField
                label="Email"
                margin="normal"
                {...formik.getFieldProps("email")}
              />
              {emailError}
              <TextField
                type="password"
                label="Password"
                margin="normal"
                {...formik.getFieldProps("password")}
              />
              {passwordError}
              {/* <FormControlLabel
                label={"Remember me"}
                control={
                  <Checkbox
                    {...formik.getFieldProps("rememberMe")}
                    checked={formik.values.rememberMe}
                  />
                }
              /> */}
              <Button
                type={"submit"}
                variant={"contained"}
                style={{ background: "#2E3B55", color: "#fff" }}
              >
                Login
              </Button>
            </FormGroup>
          </FormControl>
        </Form>
      </Grid>
    </Grid>
  );
};
