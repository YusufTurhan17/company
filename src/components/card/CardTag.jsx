import styled from "styled-components";


const StyledTags = styled.div`
    height: 3.3rem;
    margin: 0;
    flex-shrink: 0;
    align-items: flex-end;
    overflow: hidden;
    display: flex;
    
    `

const StyledTag = styled.a`
    display: block;
    color: #ababaf;
    border: 0.05rem solid #ababaf;
    border-radius: 0.7rem;
    padding: 0.25rem 0.6rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: .6rem;
    line-height: .8rem;`


const CardTag = ({children}) => {

    return <StyledTags>  
                <StyledTag>
                        {children}
                </StyledTag>
          </StyledTags>
}

export default CardTag