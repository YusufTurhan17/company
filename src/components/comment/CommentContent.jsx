import Styled from "styled-components"

const  StyledCommentContent = Styled.div`
        flex: 2;
`

const CommentContent = ({children}) => {

        return <StyledCommentContent>{children}</StyledCommentContent>

}

export default CommentContent;