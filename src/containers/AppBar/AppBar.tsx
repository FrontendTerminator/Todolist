import React, { FC } from "react";

import {
  AppBar as MaterialAppBar,
  Button,
  LinearProgress,
  Typography,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { StyledToolbar } from "./styles";
import { RequestStatusType } from "../../store/app-reducer/app-reducer";
import { AppRootStateType } from "../../store/store";
import { logoutTC } from "../../store/auth-reducer/auth-reducer";

export const AppBar: FC = () => {
  const dispatch = useDispatch();

  const status = useSelector<AppRootStateType, RequestStatusType>(
    (state) => state.app.status
  );

  const isLoggedIn = useSelector<AppRootStateType, boolean>(
    (state) => state.auth.isLoggedIn
  );

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
