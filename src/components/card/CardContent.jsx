import styled from 'styled-components'
 



import  View  from '../view/View'

const CardContent = styled(View)`

    padding: 26px;
    background:#fff;
 
    :hover {
      background-color: #23232d;
      color: #fff;
     
    }
  
    
`

CardContent.defaultProps = {
  mt: '29px'
}

export default CardContent
