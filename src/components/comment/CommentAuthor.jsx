import Styled from "styled-components"

const StyledCommentAuthor = Styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        padding-top:40px;
        margin-bottom: 2rem;
        flex-direction:column;
        flex: 1;
`

const CommentAuthor = ({children}) => {
    return <StyledCommentAuthor>
                {children}
    </StyledCommentAuthor>
}

export default CommentAuthor;






 