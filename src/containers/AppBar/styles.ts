import { Toolbar } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f9f9fa;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding: 40px 100px;
`;
