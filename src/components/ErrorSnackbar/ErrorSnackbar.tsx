import React, { SyntheticEvent } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import { setAppErrorAC } from "../../store/app-reducer/app-reducer";

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const ErrorSnackbar = () => {
  const dispatch = useDispatch();

  const error = useSelector<AppRootStateType, string | null>(
    (state) => state.app.error
  );

  const handleClose = (_: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setAppErrorAC({ error: null }));
  };

  const isOpen = error !== null;

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  );
};
