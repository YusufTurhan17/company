import PropTypes from 'prop-types'
import styled from 'styled-components'
 
import NewslatterContent from './NewslatterContent'
 

 

const Newslatter = styled.div`
    max-width: 288px;
    margin: 0 auto;
    box-shadow: 0 0.2rem 2rem 0 rgb(21 21 29 / 8%);
`

Newslatter.propTypes = {
  children: PropTypes.node
}

Newslatter.defaultProps = {
   direction: "column",
}


 
Newslatter.Content = NewslatterContent
 
export default Newslatter
