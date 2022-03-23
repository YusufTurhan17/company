import styled from "styled-components";

const StyledBoxImageContent = styled.div`
  width: 100%;
  height: 8.4rem;
  margin-bottom: 1rem;
  position: relative;
`;

const StyledBoxImage = styled.img`
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    opacity: 1;
    transition: opacity .3s ease;
`;

const BoxImage = ({ src }) => (
    <StyledBoxImageContent>
      <StyledBoxImage src={src} />
    </StyledBoxImageContent>
  );


export default BoxImage;
