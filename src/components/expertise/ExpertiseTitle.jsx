import { createElement } from 'react'
import styled from 'styled-components'

const ExpertiseTitle = styled(({ tagName = 'h3', children, ...props }) =>
  createElement(tagName, props, children)
)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: 21px;
    line-height: 1.8rem;
    margin:0px;
    display: inline-block;
    width: auto;
    position: relative;
    
    &::after {
      content: "";
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 0;
    right: -1.6rem;
    background-image: url(https://static.agentestudio.com/assets/arrow-right-099195bc23cc9ac98eacb7f1993fe6fa144495627115aef6d4d2ac6538aa79f1.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
         
    transition: opacity .3s ease, transform .3s ease;
    transform: translateX(-100%);
    opacity: 0;
  
    }
  
 
`

export default ExpertiseTitle
