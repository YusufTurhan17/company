import styled from "styled-components";
import {layout} from "styled-system"

const StyledInput = styled.input`
    min-height: 2rem;
    border: none;
    border-bottom: 0.05rem solid #757575;
    border-radius: 0;
    position: relative;
    box-shadow: none !important;
    outline: none !important;
    background: rgba(0,0,0,0) !important;
    color: #ffffff !important;
    font-size: .8rem;
    line-height: 1rem;
    transition: all .3s ease;

    ${layout} 
`


const input = ({...outherProps}) => {
    return <StyledInput {...outherProps}></StyledInput>
    

}

input.propTypes = {
}

export default input;