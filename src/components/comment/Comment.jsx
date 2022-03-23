import PropTypes from 'prop-types'
import styled from "styled-components";
import CommentAuthor from './CommentAuthor';
import CommentContent from './CommentContent';
import CommentImage from './CommentImage';
   
const StyledComment = styled.div`
  display: flex;
  align-items: center;
  max-width:700px;
  justify-content: flex-start;
  height: 12.8rem;
  padding: 1.5rem;
  border-radius: 0.25rem;
  background-color: #23232d;
  transition: background-color .3s ease;
  color: #fff;
    
    &:hover {
          background-color: #2e2e3b;
    }
`

const Comment = ({children}) => {
    return <StyledComment>
                {children}
          </StyledComment>
}

Comment.propTypes = {
  children: PropTypes.node
}

Comment.Author = CommentAuthor
Comment.Content = CommentContent
Comment.Image = CommentImage
 

export default Comment