import styled from "styled-components";

const StyledHeadLine = styled.div`
  margin-bottom: 40px;
`;

const StyledMainText = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  line-height: 1;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 60px;
  }
`;

const StyledMainHighlightText = styled.span`
  color: var(--color-primary);
`;
const StyledText = styled.p`
  color: ${(props) => props.theme.headline.color};
`;

const HeadLine = () => {
  return (
    <StyledHeadLine>
      <StyledMainText>
        <StyledMainHighlightText>OMDb API</StyledMainHighlightText>
        <br />
        THE OPEN
        <br />
        MOVIE DATABASE
      </StyledMainText>
      <StyledText>
        The OMDb API is a RESTful web service to obtain movie information, all
        content and images on the site are contributed and maintained by our
        users.
        <br />
        If you find this service useful, please consider making a one-time
        donation or become a patron.
      </StyledText>
    </StyledHeadLine>
  );
};

export default HeadLine;
