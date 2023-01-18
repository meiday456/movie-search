import styled from "styled-components";
import {CommonBtn} from "../common/Btn";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/rootReducer";
import {useEffect, useState} from "react";
import {actions} from "../../store/saga/movieAction"
import {updateCurrentPage} from "../../store/reducers/view/viewMovieReducer";

const StyledMoreBtn = styled(CommonBtn)<{isShow:boolean}>`
  display: block;
  width : 100%;
  max-width: 300px;
  margin: 20px auto;
  display: ${(props)=>props.isShow ? 'block':'none'};
`

const MoreBtn =()=>{
    const dispatch = useDispatch()
    const [isShow ,setShow] = useState(false)
    const maxPage = useSelector((state:RootState)=>state.view.movie.maxPage)
    const currentPage = useSelector((state:RootState)=>state.view.movie.currentPage)

    useEffect(() => {

        if (maxPage >1){
            setShow(true)
        }else {
            setShow(false)
        }

    }, [maxPage]);

    const clickHandler = ()=>{
        const nowPage = currentPage +1
        dispatch(updateCurrentPage(nowPage))
        dispatch(actions.fetchMovieList({page:nowPage}))
    }

    return (
        <StyledMoreBtn isShow={isShow} onClick={clickHandler}>View more ...</StyledMoreBtn>
    )
}

export default MoreBtn