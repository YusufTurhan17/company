import styled from "styled-components";
import { createElement } from "react";
import { typography } from "styled-system";

const Text = styled(({ tagName = "p", children, ...props }) =>
  createElement(tagName, props, children)
)`
  ${typography}
`;

export default Text;
