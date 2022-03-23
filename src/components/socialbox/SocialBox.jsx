import styled from "styled-components";
import {flexbox} from "styled-system";

import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg';
import {ReactComponent as Youtube} from '../../assets/icons/youtube.svg';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg';


const StyledSocialBox = styled.div`

        display: flex;
        ${flexbox}
        
`

const StyledSocialBoxLink = styled.a`
    margin-left: 20px;
`

const SocialBox = ({...outherprops}) => {

    return <StyledSocialBox {...outherprops}>
                <StyledSocialBoxLink>
                        <Facebook/>
                </StyledSocialBoxLink>
                 <StyledSocialBoxLink>
                        <Instagram/>
                </StyledSocialBoxLink>
                 <StyledSocialBoxLink>
                        <Youtube/>
                </StyledSocialBoxLink>
                 <StyledSocialBoxLink>
                        <Twitter/>
                </StyledSocialBoxLink>
           </StyledSocialBox>
}

export default SocialBox;