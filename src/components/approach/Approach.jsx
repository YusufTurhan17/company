import PropTypes from 'prop-types'

import styled from "styled-components";
 
import ApproachContent from "./ApproachContent"


const StyledApproach = styled.div`
     
    border-radius: 0;
    border:1px solid #000;
`

const Approach = ({ children }) => (
  <StyledApproach>
       
          {children}
        
  </StyledApproach>
)

Approach.propTypes = {
  children: PropTypes.node
}

 
Approach.Content = ApproachContent

export default Approach;