import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { updateIsDark } from "../store/reducers/view/viewMovieReducer";
import { isDark } from "../const/config";
import { useState } from "react";

const ChangeBtnDiv = styled.div`
  perspective: 340px;
  position: absolute;
  right: 90px;
  top: 22px;
  &:hover .front {
    color: var(--color-primary);
  }
  &:hover .back {
    color: var(--color-primary);
  }

  @media only screen and (max-width: 600px) {
    right: 70px;
    top: 16px;
  }
`;

const ChangeBtn = styled.span<{ isTurn: boolean }>`
  backface-visibility: hidden;
  color: ${(props) => props.theme.header.color};
  transition: 1s;
  width: 100%;
  cursor: pointer;
`;

const ChangeBtnFront = styled(ChangeBtn)`
  position: absolute;
  transform: rotateY(${(props) => (props.isTurn ? "180deg" : "0deg")});
`;

const ChangeBtnBack = styled(ChangeBtn)`
  transform: rotateY(${(props) => (props.isTurn ? "0deg" : "-180deg")});
`;

const BlackAndWhite = () => {
  const mode = ["brightness_5", "dark_mode"];
  const dispatch = useDispatch();
  const isPageDark = useSelector((state: RootState) => state.view.movie.isDark);
  const [isTurn, setTurn] = useState(false);
  //클릭이 되었을때만 달라지면됨
  const clickHandle = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.textContent === mode[1]) {
      dispatch(updateIsDark(false));
    } else {
      dispatch(updateIsDark(true));
    }
    setTurn((prev) => !prev);
  };

  return (
    <>
      <ChangeBtnDiv>
        <ChangeBtnFront
          isTurn={isTurn}
          className="front material-symbols-outlined"
          onClick={(e) => clickHandle(e)}
        >
          {isDark() ? mode[1] : mode[0]}
        </ChangeBtnFront>
        <ChangeBtnBack
          isTurn={isTurn}
          className="back material-symbols-outlined"
          onClick={(e) => clickHandle(e)}
        >
          {isDark() ? mode[0] : mode[1]}
        </ChangeBtnBack>
      </ChangeBtnDiv>
    </>
  );
};

export default BlackAndWhite;
