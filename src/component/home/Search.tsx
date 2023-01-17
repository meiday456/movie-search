import styled from "styled-components"
import {BtnPrimary} from "../common/Btn";

const StyledContainer = styled.div`
  display: flex;
  gap : 10px;
  margin-bottom: 30px;
`

const StyledInput = styled.input`
  flex-grow: 1;
  height : 50px;
  padding: 0 20px;
  border-radius : 4px;
  border : none;
  outline :none;
  font-size: 14px;
  color : var(--color-white);
  background-color: var(--color-area);
  
  &::placeholder{
    color: var(--color-white-30);
  }
`

const Search = ()=>{
    return (
        <StyledContainer>
            <StyledInput placeholder="Enter the movie title to search!"></StyledInput>
            <BtnPrimary>Search!</BtnPrimary>
        </StyledContainer>
    )
}

export default Search