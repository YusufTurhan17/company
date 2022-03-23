import styled from "styled-components";

 

const StyledExpertiseImage = styled.img`
     display: inline-block;
        width: 3rem;
        height: 3rem;
        margin: 0;
         margin-right: 1.5rem;
`;

const ExpertiseImage = ({ src }) => (
    
      <StyledExpertiseImage src={src} />
 
  );


export default ExpertiseImage;
