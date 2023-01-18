import styled from "styled-components";

import userImg from "../public/images/userImg.jpg"
import {useEffect, useState} from "react";
import {menu} from "../interface/CommonInterface";

const StyledHeader = styled.header`
  font-family: "Roboto" , sans-serif;
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
    right: 20px;
  }
`
const StyledNavUserImg = styled.img`
  width: 100%;
`


const Header = () => {

    const menus: menu[] = [
        {name: 'Search', href: '/' },
        {name: 'Movie', href: '/movie?id=tt4520988'},
        {name: 'About', href: '/about'}
    ]
    const [activeType, setActiveType] = useState('')


    useEffect(() => {
        setActiveType(window.location.pathname.split("/")[1].toUpperCase())
    }, [])

    return (
        <StyledHeader>
            <StyledLogo href={"/"}>
                <StyledLogoTitle>OMDbAPI</StyledLogoTitle>.COM
            </StyledLogo>
            <StyledNav>
                <StyledNavUl>
                    {
                        menus.map((menu)=>{
                            return <li key={`LI_${menu.name}`}>
                                        <StyledNavPageName key={`PAGE_${menu.name}`} href={menu.href} isActive={activeType === menu.name.toUpperCase()}>{menu.name}</StyledNavPageName>
                                    </li>
                        })
                    }
                </StyledNavUl>
            </StyledNav>
            <StyledNavUser href={"/about"}>
                <StyledNavUserImg src={userImg}/>
            </StyledNavUser>
        </StyledHeader>
    )
}
export default Header