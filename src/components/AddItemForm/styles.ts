import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const StyledTextField = styled(TextField)`
  & > div {
    background: white;

    & > fieldset {
      border-radius: 6px;
      border-color: #c7c9d9;
    }
  }
`;
