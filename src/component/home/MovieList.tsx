import styled from "styled-components"
import {useState} from "react";
import {Loading} from "../common/Loading";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/rootReducer";
import {MovieInfo} from "../../interface/MovieInterface";
import {MovieList as MoveListResponse} from "../../interface/MovieInterface";
import MovieItem from "./MovieItem";

const StyledMovieListArea = styled.div`
  padding: 20px;
  border-right: 4px;
  background-color: var(--color-area);
`

const StyledMessage = styled.div`
  color: var(--color-primary);
  font-size: 20px;
  text-align: center;
`

const StyledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`


const MovieList = () => {

    const statusMessage: string = useSelector((state: RootState) => state.view.movie.statusMessage)
    const movieListInfo = useSelector((state: RootState) => state.server.movie.movieListInfo) as (MoveListResponse | null)
    const isLoading: boolean = useSelector((state: RootState) => state.server.movie.listLoading)


    return (
        <StyledMovieListArea>
            <StyledMessage>{statusMessage}</StyledMessage>
            <StyledMovies>
                {
                    movieListInfo?.Search.map((movie) => {
                        return <MovieItem key={movie.imdbID} movie={movie}/>
                    })

                }
            </StyledMovies>
            <Loading isShow={isLoading}></Loading>
        </StyledMovieListArea>
    )
}

export default MovieList