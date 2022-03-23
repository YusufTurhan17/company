 import styled from "styled-components";

const StyledNewsletterContent = styled.div`
    padding: 2rem 1rem;
    text-align: center;
    background: #ffffff;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

`

const NewsletterContent = ({children}) => {
        return <StyledNewsletterContent>
                {children}
               </StyledNewsletterContent>
}

export default  NewsletterContent;