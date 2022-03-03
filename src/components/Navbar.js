import styled from "styled-components";

const StyledNavbar = styled.nav`
  padding: 0.8rem 0;
`;

const StyledLink = styled.a`
  ${({ theme }) => theme.mediaQueries.lg} {
  }

  color: #fff;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  & + & {
    margin-left: 100px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink href="#">Anasayfa</StyledLink>
      <StyledLink href="#">Hakkımızda</StyledLink>
      <StyledLink href="#">Blog</StyledLink>
      <StyledLink href="#">İletişim</StyledLink>
    </StyledNavbar>
  );
};
export default Navbar;
