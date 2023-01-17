import styled from "styled-components"


const StyledFooter = styled.footer`
  padding : 40px 40px 60px;
  text-align: center;
`

const StyledFooterAText = styled.a`
  color: var(--color-white-20);
  text-decoration: none;
  
  &:hover{
    text-decoration: underline;
  }
`

const Footer = ()=>{

    return (
        <StyledFooter>
            <div>
                <StyledFooterAText>Github Repository</StyledFooterAText>
            </div>
            <div>

                <StyledFooterAText>{new Date().getFullYear()} Meiday</StyledFooterAText>
            </div>
        </StyledFooter>
    )
}

export default Footer