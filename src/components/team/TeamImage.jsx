import styled from "styled-components";

const  StyledTeamImage = styled.img`

    display: block;
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    margin: 0 auto 1.2rem;

`
const TeamImage = ({src}) => {

    return <StyledTeamImage src={src}/>
         
   

}

export default TeamImage