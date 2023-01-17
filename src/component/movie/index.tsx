import styled, {css} from "styled-components";
import {StyledContainer} from "../common/Container";
import {StyledSkeleton} from "../common/Skeleton";
import {useState} from "react";


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

const StyledPoster = styled.div<{ isSkeleton: boolean }>`
  ${(props) => props.isSkeleton ? css`${StyledSkeleton}` : ''}
  flex-shrink: 0;
  width: var(--width);
  height: calc(var(--width) * 3 / 2);
  border-radius: 10px;
  background-size: cover;
  background-color: var(--color-area);

  @media (max-width: 1200px) {
    --width: 300px;
  }
`

const StyledSpecArea = styled.div`
  flex-grow: 1;
`

const StyledTitle = styled.div<{ isSkeleton: boolean }>`
  ${(props) => props.isSkeleton ? css`${StyledSkeleton}` : ''}
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
  ${(props) => props.isSkeleton ? css`${StyledSkeleton}` : ''}
  height: ${(props) => props.isSkeleton ? '30px' : 'auto'};
  color: var(--color-primary);
  margin-bottom: 20px;
`

const StyledPlot = styled.div<{ isSkeleton: boolean }>`
  ${(props) => props.isSkeleton ? css`${StyledSkeleton}` : ''}
  width: ${(props) => props.isSkeleton ? '80%' : 'auto'};
  height: ${(props) => props.isSkeleton ? '400px' : 'auto'};
`

const StyledRatings = styled.h3`
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
  color: var(--color-white);
  margin: 24px 0 6px;
`

const Movie = () => {

    const [isLoading, setLoading] = useState(true)

    return (
        <MovieContainer>
            <StyledPoster isSkeleton={true}/>
            <StyledSpecArea>
                <StyledTitle isSkeleton={true}></StyledTitle>
                <StyledLabels isSkeleton={true}></StyledLabels>
                <StyledPlot isSkeleton={true}></StyledPlot>
                {
                    !isLoading &&
                    <>
                        <StyledRatings>
                            <p></p>
                        </StyledRatings>
                        <div>
                            <h3>Actors<p></p></h3>
                        </div>
                        <div>
                            <h3>Director<p></p></h3>
                        </div>
                        <div>
                            <h3>Production<p></p></h3>
                        </div>
                        <div>
                            <h3>Genre<p></p></h3>
                        </div>
                    </>

                }
            </StyledSpecArea>
        </MovieContainer>
    )
}

export default Movie