import styled from "styled-components";
import { createElement } from "react";
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types';
import { typography, color, variant, space } from "styled-system";

const textVariants = ({ theme }) => variant({
  
    prop: 'size',
    variants: {
      small: {
        fontSize:theme.fontSizes.small,
     
      },
      large: {
        fontSize:theme.fontSizes.large,
 
      },
      default: {
          fontSize:theme.fontSizes.base
      }
       
    }
  })

  
const Text = styled(({ tagName = "p", children, ...props }) =>
  createElement(tagName, props, children)
)`
  
  ${textVariants}
  ${typography}
  ${color}
  ${space}
  
`;

 

Text.defaultProps = {
 
}

Text.propTypes = {
  textVariants: PropTypes.oneOf([
    'small',
    'large',
    'default',
   
  ]),
  ...propTypes.color,
  ...propTypes.typography
}

 


export default Text;




  
 
  