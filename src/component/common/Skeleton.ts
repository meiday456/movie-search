import styled, {css,keyframes} from "styled-components"

const skeletonLoader = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

export const StyledSkeleton =  css`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--color-area);
  
  &::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(270deg,
    rgba(255,255,255,0),
    rgba(255,255,255,.1),
    rgba(255,255,255,0)
    );
    transform: translateX(-100%);
    animation: ${skeletonLoader} 2s infinite;
  }
`
