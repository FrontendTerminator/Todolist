import React, { FC } from "react";

import { CircularProgress } from "@material-ui/core";

import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  );
};
