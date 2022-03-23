import PropTypes from 'prop-types'
import styled from 'styled-components'
import  View  from '../view/View'
import { layout } from 'styled-system'
import { flexbox } from 'styled-system'
import CardImage from './CardImage'
import CardTitle from './CardTitle'
import CardContent from './CardContent'
import CardTag from './CardTag'

const StyledCard = styled.a`
    display: flex;

    ${layout}
    ${flexbox}
  :hover {
 
    box-shadow: 0 0.6rem 1.5rem 0 rgb(21 21 29 / 20%);
  }

`

const Card = ({ children, direction, }) => (
  <StyledCard  flexDirection={direction}  alignItems={direction === "row" ? "stretch" : "flex-start"}>
      
            {children}
 
         
       
  </StyledCard>
 
)

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
   direction: "column",
}


Card.Image = CardImage
Card.Title = CardTitle
Card.Content = CardContent
Card.Tag = CardTag

export default Card
