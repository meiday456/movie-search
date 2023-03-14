import HeadLine from "./HeadLine";
import { StyledContainer } from "../common/Container";
import Search from "./Search";
import MovieList from "./MovieList";
import MoreBtn from "./MoreBtn";

const Home = () => {
  return (
    <>
      <StyledContainer>
        <HeadLine />
        <Search />
        <MovieList />
        <MoreBtn></MoreBtn>
      </StyledContainer>
    </>
  );
};

export default Home;
