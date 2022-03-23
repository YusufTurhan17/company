import PropTypes from 'prop-types'

import styled from "styled-components";
import TeamContent from './TeamContent';
import TeamImage from './TeamImage';



const StyledTeam = styled.div`
   
   padding: 0 1.5rem;
    text-align: center;

`

const Team = ({ children }) => (
  <StyledTeam>
       
          {children}
        
  </StyledTeam>
)

Team.propTypes = {
  children: PropTypes.node
}

Team.Image = TeamImage
Team.Content = TeamContent
 
export default Team;