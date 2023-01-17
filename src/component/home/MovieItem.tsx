import {MovieInfo} from "../../interface/MovieInterface";
import styled from "styled-components";

const StyledMovieItem = styled.div<{ url: string }>`
  --width: 200px;
  width: var(--width);
  height: calc(var(--width) * 3 / 2);
  border-radius: 4px;
  background-color: var(--color-black);
  background-size: cover;
  background-image: url(${props => props.url});
  overflow: hidden;
  position: relative;

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border: 6px solid var(--color-primary);
  }
`

const StyledMovieInfo = styled.div`
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(14, 17, 27, .3);
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`

const StyledYear = styled.div`
  color: var(--color-primary);
`

const StyledTitle = styled.div`
  color: var(--color-white);
`

interface Props {
    [key: string]: unknown

    movie: MovieInfo
}

const MovieItem = (props: Props) => {
    return (
        <StyledMovieItem url = {props.movie.Poster}>
            <StyledMovieInfo>
                <StyledYear>{props.movie.Year}</StyledYear>
                <StyledTitle>{props.movie.Title}</StyledTitle>
            </StyledMovieInfo>
        </StyledMovieItem>
    )
}

export default MovieItem