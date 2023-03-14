import styled from "styled-components";
import { BtnPrimary } from "../common/Btn";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as MovieAction } from "../../store/saga/movieAction";
import { RootState } from "../../store/reducers/rootReducer";
import { updateSearchText } from "../../store/reducers/view/viewMovieReducer";
import { debouncing } from "../../const/config";

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  height: 50px;
  padding: 0 20px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  color: ${(props) => props.theme.search.color};
  background-color: var(--color-area);

  &::placeholder {
    color: ${(props) => props.theme.search.placeholder};
  }
`;

const Search = () => {
  const dispatch = useDispatch();

  const [word, setWord] = useState("");
  const storeWord = useSelector(
    (state: RootState) => state.view.movie.searchText
  );

  const debounceInputHandler = debouncing((value: string) => {
    setWord(value);
  });
  const inputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    debounceInputHandler(value);
  };

  const btnClick = () => {
    if (word) {
      dispatch(updateSearchText(word));
      if (storeWord !== word) {
        dispatch(
          MovieAction.fetchMovieList({
            page: 1,
          })
        );
      }
    }
  };

  return (
    <StyledContainer>
      <StyledInput
        placeholder="Enter the movie title to search!"
        onInput={inputChangeHandler}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            btnClick();
          }
        }}
      />
      <BtnPrimary onClick={btnClick}>Search!</BtnPrimary>
    </StyledContainer>
  );
};

export default Search;
