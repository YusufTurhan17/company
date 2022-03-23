import styled from "styled-components";
import { space } from 'styled-system'
import PropTypes from '@styled-system/prop-types'

const Section = styled.section`
  padding: 96px 0;

  @media (max-width: 600px) {
    padding: 20px 0;
  }
  ${space}
`;

Section.propTypes = {
  ...PropTypes.space
}

export default Section;
