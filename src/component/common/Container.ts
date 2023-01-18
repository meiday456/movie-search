import styled from "styled-components";

export const StyledContainer = styled.div`
  font-family: "Roboto" , sans-serif;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 0;

  @media screen and (max-width: 1200px){
    padding: 40px;
  }

  @media screen and (max-width: 600px){
    padding: 40px 20px;
  }
`