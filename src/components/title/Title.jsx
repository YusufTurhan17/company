import styled from "styled-components";
import React from "react";
import StyledSystemPropTypes from '@styled-system/prop-types'
import { layout, typography, variant, color, flexbox,space } from "styled-system";

const titleVariants = ({ theme }) => variant({
    prop: 'size',
    variants: {
      small: {
        fontSize:theme.fontSizes.titlesm,
     
      },
      medium: {
        fontSize:theme.fontSizes.titlemd,
 
      },
      default: {
          fontSize:theme.fontSizes.title
      }
       
    }
  })

const Title = styled(({ tagName = "h1", size="default", children, ...props }) =>
  React.createElement(tagName, props, children)
)`
   ${titleVariants}
   ${typography}
   ${color}
   ${layout}
   ${flexbox}
   ${space}
`;

Title.propTypes = {
...StyledSystemPropTypes.typography,
...StyledSystemPropTypes.color,
...StyledSystemPropTypes.layout,
...StyledSystemPropTypes.flexbox,
...StyledSystemPropTypes.space,
}

export default Title;
