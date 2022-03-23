import Styled from "styled-components"

const  StyledPromoContent = Styled.div`
        color:#fff;
        max-width: 470px;
        padding: 100px 0;
`

const PromoContent = ({children}) => {

        return <StyledPromoContent>{children}</StyledPromoContent>

}

export default PromoContent;