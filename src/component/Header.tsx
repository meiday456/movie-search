import styled from "styled-components";

import userImg from "../public/images/userImg.jpg"

const StyledHeader = styled.header`
  padding: 20px 40px;
  background-color: rgba(14, 17, 27, .9);
  position: sticky;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: flex-end;
  gap: 40px;

  @media only screen and (max-width: 600px) {
    padding: 14px 20px;
  }
`

const StyledLogo = styled.a`
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
  color: var(--color-white-50);
  text-decoration: none;
`
const StyledLogoTitle = styled.span`
  color: var(--color-primary);
`

const StyledNav = styled.nav`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const StyledNavUl = styled.ul`
  display: flex;
  gap: 14px;
`

const StyledNavPageName = styled.a<{ isActive: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.isActive ? 'var(--color-primary)' : 'var(--color-white-50)'};
  text-decoration: none;
`

const StyledNavUser = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-area);
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  margin: auto;
  transition: .3s;
  overflow: hidden;

  &:hover {
    transform: scale(1.2);
  }
  @media only screen and (max-width: 600px) {
    right : 20px;
  }
`
const StyledNavUserImg = styled.img`
  width: 100%;
`


const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo>
                <StyledLogoTitle>OMDbAPI</StyledLogoTitle>.COM
            </StyledLogo>
            <StyledNav>
                <StyledNavUl>
                    {
                        <li><a> test</a></li>
                    }
                </StyledNavUl>
            </StyledNav>
            <StyledNavUser>
                <StyledNavUserImg src={userImg}/>
            </StyledNavUser>
        </StyledHeader>
    )
}
export default Header