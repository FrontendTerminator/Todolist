import styled from "styled-components";
import { media } from "../utils/theme";

export const Wrapper = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f9f9fa;
`;

export const Content = styled.div`
  padding: 40px 100px;

  ${media.tablet`
    padding: 40px 40px;
  `}

  ${media.phone`
    padding: 40px 20px;
  `}
`;
