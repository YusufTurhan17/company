import styled from "styled-components";
import { flexbox, layout } from "styled-system";
import PropTypes from '@styled-system/prop-types'

const View = styled.div`
  ${flexbox}
  ${layout}
`;

View.propTypes = {
  ...PropTypes.flexbox,
  ...PropTypes.layout
}

export default View;
