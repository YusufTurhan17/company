import styled from "styled-components";

export { default as BoxImage } from "./BoxImage";

const StyledBox = styled.div``;

const Box = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
