import styled from "styled-components";
import {CommonBtn} from "../common/Btn";

const StyledMoreBtn = styled(CommonBtn)<{isShow:boolean}>`
  display: block;
  width : 100%;
  max-width: 300px;
  margin: 20px auto;
  display: ${(props)=>props.isShow ? 'block':'none'};
`

const MoreBtn =()=>{

    return (
        <StyledMoreBtn isShow={false}>View more ...</StyledMoreBtn>
    )
}

export default MoreBtn