import styled from "styled-components";
import { media } from "../../utils/theme";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;

  ${media.phone`
    flex-direction: column;
  `}
`;
