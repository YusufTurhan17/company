import PropTypes from 'prop-types'
import styled from "styled-components";
import { background } from "styled-system";

 import PromoContent from './PromoContent';
    
const StyledPromo = styled.div`

        position: relative;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        ${background}
         
   
`

const Promo = ({children, ...otherProps}) => {
    return <StyledPromo {...otherProps}>
                {children}
          </StyledPromo>
}

Promo.propTypes = {
  children: PropTypes.node
}

Promo.Content = PromoContent
 

export default Promo