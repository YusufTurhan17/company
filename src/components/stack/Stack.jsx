import PropTypes from 'prop-types'

import styled from "styled-components";
 import StackImage from "./StackImage"
import StackTitle from "./StackTitle"
import StackContent from "./StackContent"
import StackText from './StackText';


const StyledStack = styled.div`
      height: 20rem;
    border: 0.05rem solid #23232d;
    padding: 2rem;
    position: relative;
    text-align: left;
    transform: scale3d(1, 1, 1);
    transition: all .3s ease;
    overflow: hidden;
    &:hover {
           
            background-color: ${({theme}) => theme.colors.dark};
            transform: scale3d(1.025, 1.025, 1.025);
            border-radius: 0.25rem;
            box-shadow: 0 0.6rem 1.6rem 0 rgb(21 21 30 / 20%);
            z-index: 2;

             ${StackImage} {
                    transform: scale(1.66);
                 }
            ${StackTitle} {
                margin-bottom: 1rem;
                color: #649ab6;
                transition: all .3s ease;
            }
            ${StackText} {
                color: #fff;
                opacity: 1;
            }
            ${StackContent} {
                top: 2rem !important;
            }
    }

`

const Stack = ({ children }) => (
  <StyledStack>
       
          {children}
        
  </StyledStack>
)

Stack.propTypes = {
  children: PropTypes.node
}

Stack.Image = StackImage
Stack.Title = StackTitle
Stack.Content = StackContent
Stack.Text = StackText

export default Stack;