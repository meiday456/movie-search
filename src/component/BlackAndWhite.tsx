import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { updateIsDark } from "../store/reducers/view/viewMovieReducer";
import { useEffect } from "react";

const ChangeBtnDiv = styled.div`
  perspective: 340px;
  position: absolute;
  right: 90px;
  top: 22px;
  &:hover .front {
    transform: rotateY(180deg);
    color: var(--color-primary);
  }
  &:hover .back {
    transform: rotateY(0deg);
    color: var(--color-primary);
  }

  @media only screen and (max-width: 600px) {
    right: 70px;
    top: 16px;
  }
`;

const ChangeBtn = styled.span`
  backface-visibility: hidden;
  color: var(--color-white-50);
  transition: 1s;
  width: 100%;
  cursor: pointer;
`;

const ChangeBtnFront = styled(ChangeBtn)`
  position: absolute;
  transform: rotateY(0deg);
`;

const ChangeBtnBack = styled(ChangeBtn)`
  transform: rotateY(-180deg);
`;

const BlackAndWhite = () => {
  const mode = ["brightness_5", "dark_mode"];
  const dispatch = useDispatch();
  const isPageDark = useSelector((state: RootState) => state.view.movie.isDark);

  //클릭이 되었을때만 달라지면됨
  const clickHandle = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.textContent === mode[0]) {
      //light mode
      dispatch(updateIsDark(false));
    } else {
      dispatch(updateIsDark(true));
    }
  };

  useEffect(() => {
    console.log(isPageDark);
  }, [isPageDark]);

  return (
    <>
      <ChangeBtnDiv>
        <ChangeBtnFront
          className="front material-symbols-outlined"
          onClick={(e) => {
            clickHandle(e);
          }}
        >
          {isPageDark ? mode[1] : mode[0]}
        </ChangeBtnFront>
        <ChangeBtnBack
          className="back material-symbols-outlined"
          onClick={(e) => {
            clickHandle(e);
          }}
        >
          {isPageDark ? mode[0] : mode[1]}
        </ChangeBtnBack>
      </ChangeBtnDiv>
    </>
  );
};

export default BlackAndWhite;
