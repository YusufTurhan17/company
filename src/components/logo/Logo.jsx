import styled from "styled-components";
 

const StyledLogo = styled.img`
  width: 100px;
`;

const Logo = () => {
  return (
    <StyledLogo
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      alt="img"
    />
  );
};
export default Logo;
