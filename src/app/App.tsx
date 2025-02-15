import React, { FC, useEffect } from "react";

import { TodolistsList } from "../containers/TodolistsList/TodolistsList";
import { ErrorSnackbar } from "../components/ErrorSnackbar/ErrorSnackbar";
import { useDispatch, useSelector } from "react-redux";

import { initializeAppTC } from "../store/app-reducer/app-reducer";
import { Route } from "react-router-dom";
import { Login } from "../containers/Login/Login";

import { Content, Wrapper } from "./styles";
import { AppRootStateType } from "../store/store";

import { Loader } from "../components/Loader/Loader";
import { AppBar } from "../containers/AppBar/AppBar";

export const App: FC = () => {
  const dispatch = useDispatch();

  const isInitialized = useSelector<AppRootStateType, boolean>(
    (state) => state.app.isInitialized
  );

  useEffect(() => {
    dispatch(initializeAppTC());
  }, []);

  return !isInitialized ? (
    <Loader />
  ) : (
    <Wrapper>
      <ErrorSnackbar />
      <AppBar />
      <Content>
        <Route path={"/login"} render={() => <Login />} />
        <Route exact path={"/"} render={() => <TodolistsList />} />
      </Content>
    </Wrapper>
  );
};
