import PropTypes from 'prop-types'
import styled from 'styled-components'
import View from '../view/View'

import BoxImage from './BoxImage'
import BoxTitle from './BoxTitle'

const StyledBox = styled.a`
  padding: 26px;
  background:#fff;
  display: inline-block;
  border-radius: 5px;

  &:hover {
    transform: scale3d(1.025, 1.025, 1.025);
    box-shadow: 0 0.6rem 1.5rem 0 rgb(21 21 29 / 20%);
    background-color: ${({ theme }) => theme.colors.dark};;
    color: #fff;

    ${BoxTitle} {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

const Box = ({ children }) => (
  <StyledBox>
        <View>
          {children}
        </View>
  </StyledBox>
)

Box.propTypes = {
  children: PropTypes.node
}

Box.Image = BoxImage
Box.Title = BoxTitle

export default Box
