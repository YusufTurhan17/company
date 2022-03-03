import styled from "styled-components";
import React from "react";
import { typography, variant } from "styled-system";


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
`;

export default Title;
