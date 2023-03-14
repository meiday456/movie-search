import { StyledContainer } from "../common/Container";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: var(--color-white-10);
  text-align: center;
`;

const NotFound = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        Sorry...
        <br />
        Page Not Found.
      </StyledTitle>
    </StyledContainer>
  );
};

export default NotFound;
