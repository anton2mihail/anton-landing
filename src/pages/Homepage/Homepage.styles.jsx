import styled from '@emotion/styled';

const StyledHomepage = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo content";
  background-color: #dedede;
`;

// eslint-disable-next-line import/prefer-default-export
export default StyledHomepage;
