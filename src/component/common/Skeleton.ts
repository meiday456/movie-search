import { css, keyframes } from "styled-components";

const skeletonLoader = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const StyledSkeleton = css`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${(props) => props.theme.skeleton.background};

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      270deg,
      ${(props) => props.theme.skeleton.from},
      ${(props) => props.theme.skeleton.between},
      ${(props) => props.theme.skeleton.to}
    );
    transform: translateX(-100%);
    animation: ${skeletonLoader} 1s infinite;
  }
`;
