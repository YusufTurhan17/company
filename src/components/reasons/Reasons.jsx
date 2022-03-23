import PropTypes from 'prop-types'

import styled from "styled-components";
 
import ReasonsContent from "./ReasonsContent"
import ReasonsImage from './ReasonsImage';


const StyledReasons = styled.div`
     
   display: flex;
    align-items: flex-start;
    
    padding: 0;
`

const Reasons = ({ children }) => (
  <StyledReasons>
       
          {children}
        
  </StyledReasons>
)

Reasons.propTypes = {
  children: PropTypes.node
}

 
Reasons.Content = ReasonsContent
Reasons.Image = ReasonsImage

export default Reasons;