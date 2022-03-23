import styled from "styled-components";

 

const StyledTextArea = styled.textarea`

`


const TextArea = ({name}) => {

    return  <StyledTextArea name={name}></StyledTextArea>

             
}

export default TextArea;