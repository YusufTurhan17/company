import { createElement } from 'react'
import styled from 'styled-components'

const StackTitle = styled(({ tagName = 'h4', children, ...props }) =>
  createElement(tagName, props, children)
)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: 21px;
    line-height: 1.8rem;
    margin:0px;
     
 
 
`

export default StackTitle
