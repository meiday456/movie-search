import styled, {keyframes} from "styled-components";


const loader =keyframes`
  0% {transform : rotate(0deg)}
  100% {transform : rotate(360deg)}
`

export const Loading = styled.div<{isShow:boolean}>`
  display: ${(props)=>props.isShow ? 'block' :'none'};
  width : 30px;
  height: 30px;
  margin : 30px auto;
  border: 4px solid var(--color-primary);
  border-top-color : transparent;
  border-radius : 50%;
  animation : ${loader} 1s infinite linear;
`

