import React, { SyntheticEvent } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setAppErrorAC } from "../../store/app-reducer/app-reducer";
import { selectErrod } from "../../store/app-reducer/selectors";

export const ErrorSnackbar = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectErrod);

  const isOpen = error !== null;

  const handleClose = (_: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setAppErrorAC({ error: null }));
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        elevation={6}
        variant="filled"
        severity="error"
        onClose={handleClose}
      >
        {error}
      </Alert>
    </Snackbar>
  );
};
