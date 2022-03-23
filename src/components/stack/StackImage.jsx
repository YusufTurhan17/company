import styled from "styled-components";

 

const StackImage = styled.img`
     display: inline-block;
    width: 6rem;
    height: 6rem;
    margin-bottom: 2rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    transition: transform .3s ease;
    transform-origin: center;

    &:hover {
            transform: scale(1.66);
    }
`

 


export default StackImage;
