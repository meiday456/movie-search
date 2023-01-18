import styled, {css} from "styled-components";
import {StyledContainer} from "../common/Container";
import {StyledSkeleton} from "../common/Skeleton";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateActiveMovieId} from "../../store/reducers/view/viewMovieReducer";
import {RootState} from "../../store/reducers/rootReducer";
import {actions} from "../../store/saga/movieAction"


const MovieContainer = styled(StyledContainer)`
  color: var(--color-white-50);
  display: flex;
  gap: 70px;
  --width: 500px;

  @media (max-width: 1200px) {
    gap: 30px;
  }
  @media (max-width: 600px) {
    display: block;
  }
`

//스켈레톤 ui 를적용해야하는데
//음 값을 받아오는 순간을 어찌할수 있을까
//처음

const StyledPoster = styled.div<{ isSkeleton: boolean, image:string }>`
  ${(props) => props.isSkeleton && css`${StyledSkeleton}`}
  flex-shrink: 0;
  width: var(--width);
  height: calc(var(--width) * 3 / 2);
  border-radius: 10px;
  background-size: cover;
  background-color: var(--color-area);
  background-image: ${(props)=>props.isSkeleton ? 'none' :`url(${props.image})`};

  @media (max-width: 1200px) {
    --width: 300px;
  }
`

const StyledSpecArea = styled.div`
  flex-grow: 1;
`

const StyledTitle = styled.div<{ isSkeleton: boolean }>`
  ${(props) => props.isSkeleton && css`${StyledSkeleton}`}
  height: ${(props) => props.isSkeleton ? '70px' : 'auto'};
  font-size: 70px;
  font-family: 'Oswald', sans-serif;
  line-height: 1;
  color: var(--color-white);
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 50px;
    margin-top: 50px;
  }
`

const StyledLabels = styled.div<{ isSkeleton: boolean }>`
  ${(props) => props.isSkeleton && css`${StyledSkeleton}`}
  height: ${(props) => props.isSkeleton ? '30px' : 'auto'};
  color: var(--color-primary);
  margin-bottom: 20px;
`

const StyledPlot = styled.div<{ isSkeleton: boolean }>`
  ${(props) => props.isSkeleton && css`${StyledSkeleton}`}
  width: ${(props) => props.isSkeleton ? '80%' : 'auto'};
  height: ${(props) => props.isSkeleton ? '400px' : 'auto'};
`

const StyledH3 = styled.h3`
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
  color: var(--color-white);
  margin: 24px 0 6px;
`

const Movie = () => {
    const dispatch = useDispatch()

    const isLoading = useSelector((state: RootState) => state.server.movie.infoLoading)
    const movieInfo = useSelector((state: RootState) => state.server.movie.movieInfo)


    useEffect(() => {
        window.addEventListener('load', () => {
                const queryList = window.location.search.replace('?', '').split('&')
                const idQuery = queryList.find((query) => {
                    return query.split("=")[0].includes("id")
                })

                if (idQuery) {
                    //올바른 query 값이 있는경우에만 수행
                    const id = idQuery.split("=")[1]
                    dispatch(updateActiveMovieId(id))
                    dispatch(actions.fetchMovieInfo({i: id, page: 1}))
                } else {
                    window.location.replace("/search")
                }
            }
        )
    }, []);


    return (
        <MovieContainer>
            <StyledPoster isSkeleton={isLoading} image={movieInfo ? movieInfo.Poster.replace('SX300', 'SX700'):''}/>
            <StyledSpecArea>
                <StyledTitle isSkeleton={isLoading}>{movieInfo?.Title}</StyledTitle>
                <StyledLabels isSkeleton={isLoading}>
                    {
                        !isLoading &&
                        <>
                            <span>{movieInfo?.Released}</span>&nbsp;/&nbsp;
                            <span>{movieInfo?.Runtime}</span>&nbsp;/&nbsp;
                            <span>{movieInfo?.Country}</span>
                        </>
                    }
                </StyledLabels>
                <StyledPlot isSkeleton={isLoading}>{movieInfo?.Plot}</StyledPlot>
                {
                    !isLoading &&
                    <>
                        <StyledH3>Ratings
                            {movieInfo?.Ratings.map((rating) => {
                                return <p key={rating.Source}>{rating.Source} - {rating.Value}</p>
                            })}
                        </StyledH3>
                        <div>
                            <StyledH3>Actors<p>{movieInfo?.Actors}</p></StyledH3>
                        </div>
                        <div>
                            <StyledH3>Director<p>{movieInfo?.Director}</p></StyledH3>
                        </div>
                        <div>
                            <StyledH3>Production<p>{movieInfo?.Production}</p></StyledH3>
                        </div>
                        <div>
                            <StyledH3>Genre<p>{movieInfo?.Genre}</p></StyledH3>
                        </div>
                    </>

                }
            </StyledSpecArea>
        </MovieContainer>
    )
}

export default Movie