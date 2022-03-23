import { createElement } from 'react'
import styled from 'styled-components'

const CardTitle = styled(({ tagName = 'h4', children, ...props }) =>
  createElement(tagName, props, children)
)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 21px;
  line-height: 32px;
  letter-spacing: 0;
  margin-bottom: 12px;
`

export default CardTitle
