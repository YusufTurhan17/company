import PropTypes from 'prop-types'
import styled from 'styled-components'
 
import ListItem from './ListItem'
 

const StyledList = styled.ul`

    list-style:${({type})=> type};

`

const List = ({ children, type }) => (
  <StyledList type={type}>
      
            {children}
 
  </StyledList>
 
)

List.propTypes = {
  children: PropTypes.node,
  type:PropTypes.string
}

List.defaultProps = {}


List.Item = ListItem
 

export default List
