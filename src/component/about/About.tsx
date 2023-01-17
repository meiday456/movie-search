import styled, {css} from "styled-components"
import {StyledContainer} from "../common/Container";
import userImg from "../../public/images/userImg.jpg"


const StyledPhoto = styled.div`
  width: 230px;
  height: 230px;
  margin: 0 auto 20px;
  border-radius: 10px;
  background-size: cover;
  background-image: url(${userImg});
`


const StyledP = styled.p`
  line-height:  1.5;
  text-align: center;
  margin-bottom: 4px;
`
const StyledName = styled(StyledP)`
  font-size: 40px;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 20px;
`

const StyledEmailA = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  
  &:hover{
    text-decoration: underline;  
  }
`

const About = () => {
    return (
        <StyledContainer>
            <StyledPhoto></StyledPhoto>
            <StyledName>Meiday</StyledName>
            <StyledP>
                <StyledEmailA>email!!!</StyledEmailA>
            </StyledP>
            <StyledP>
                <StyledEmailA>github!!!</StyledEmailA>
            </StyledP>
            <StyledP>
                <StyledEmailA>Blog!!!</StyledEmailA>
            </StyledP>
        </StyledContainer>
    )
}

export default About