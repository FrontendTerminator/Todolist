import React, { FC } from "react";

import {
  AppBar as MaterialAppBar,
  Button,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { StyledToolbar } from "./styles";
import { selectStatus } from "../../store/app-reducer/selectors";
import { selectIsLoggedIn } from "../../store/auth-reducer/selectors";
import { logoutTC } from "../../store/auth-reducer/thunks";

export const AppBar: FC = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const status = useSelector(selectStatus);

  return (
    <MaterialAppBar position="static" style={{ background: "#2E3B55" }}>
      <StyledToolbar>
        <Typography variant="h6">Todolist</Typography>
        {isLoggedIn && (
          <Button color="inherit" onClick={() => dispatch(logoutTC())}>
            Log out
          </Button>
        )}
      </StyledToolbar>
      {status === "loading" && <LinearProgress />}
    </MaterialAppBar>
  );
};
