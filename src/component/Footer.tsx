import styled from "styled-components";
import { myInfo } from "../const/config";

const StyledFooter = styled.footer`
  font-family: "Roboto", sans-serif;
  padding: 40px 40px 60px;
  text-align: center;
`;

const StyledFooterAText = styled.a`
  color: var(--color-white-20);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <StyledFooterAText href={myInfo.github + myInfo.repository}>
          Github Repository
        </StyledFooterAText>
      </div>
      <div>
        <StyledFooterAText href={myInfo.github}>
          {new Date().getFullYear()} Meiday
        </StyledFooterAText>
      </div>
    </StyledFooter>
  );
};

export default Footer;
