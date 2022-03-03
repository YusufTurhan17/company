import styled from "styled-components";
import { layout } from 'styled-system'


const Image = styled.img`
    
   
     object-fit: ${({ objectFit }) => objectFit};
     object-position: ${({ objectPosition }) => objectPosition};

    ${layout}
`

export default Image;

