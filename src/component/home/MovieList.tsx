import styled from "styled-components"
import {useState} from "react";
import {Loading} from "../common/Loading";

const StyledMovieListArea = styled.div`
  padding : 20px;
  border-right: 4px;
  background-color: var(--color-area);
`

const StyledMessage = styled.div`
  color : var(--color-primary);
  font-size: 20px;
  text-align: center;
`

const StyledMovies = styled.div`
  display: flex;
  flex-wrap : wrap;
  justify-content: center;
  gap : 20px;
`



const MovieList = ()=>{

    const [message ,setMessage] = useState('Search for the movie title!')

    return (
        <StyledMovieListArea>
            <StyledMessage>{message}</StyledMessage>
            <StyledMovies>

            </StyledMovies>
            <Loading isShow={false}></Loading>
        </StyledMovieListArea>
    )
}

export default MovieList