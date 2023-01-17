import styled from "styled-components";

export const CommonBtn = styled.button`
  height : 50px;
  padding: 0 20px;
  border : none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-white);
  background-color: var(--color-area);
  cursor : pointer;
  transition: .3s;
  
  &:hover{
    background-color: var(--color-hover);
  }
`

export const BtnPrimary = styled(CommonBtn)`
  background-color : var(--color-primary);
  color: var(--color-black);
  &:hover{
    background-color : var(--color-hover);
    color: var(--color-white);
  }
`
