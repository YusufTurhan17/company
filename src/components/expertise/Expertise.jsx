import PropTypes from 'prop-types'

import styled from "styled-components";
 import ExpertiseImage from "./ExpertiseImage"
import ExpertiseTitle from "./ExpertiseTitle"
import ExpertiseContent from "./ExpertiseContent"


const StyledExpertise = styled.a`
        display:flex;
         
        color:  ${({ theme }) => theme.colors.dark};
        text-align: left;
        width: 100%;
        max-width: 260px;
      
        padding: 0;
        transition: color .2s ease;
        &:hover {
                color:${({theme}) => theme.colors.lightBlue}

                
        }
           &::after {
                 ${ExpertiseTitle} {
                   opacity: 1;
                   transform: translateX(0);
                      
            }
        }
      
    

`

const Expertise = ({ children }) => (
  <StyledExpertise>
       
          {children}
        
  </StyledExpertise>
)

Expertise.propTypes = {
  children: PropTypes.node
}

Expertise.Image = ExpertiseImage
Expertise.Title = ExpertiseTitle
Expertise.Content = ExpertiseContent

export default Expertise;