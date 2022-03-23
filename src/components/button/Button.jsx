import styled from 'styled-components'
import PropTypes from 'prop-types'
import {  variant, space } from 'styled-system'

 const buttonVariants = ({ theme }) => variant({
    variants: {
      primary: {
        color: 'white',
        bg: theme.colors.primary,
      },
      secondary: {
        color: 'white',
        bg: theme.colors.secondary,
      },
    }
  })

const Button = styled('button')`
  padding: 12px 34px;
  min-width: 220px;
  border-radius: 25px;
  font-size:18px;
  border: 1px solid #fff;
  background-color: #fff;
  color: #000;

  :hover {
    background-color: #000;
    color: #fff;
  }
  ${space}
  ${buttonVariants}
`

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

export default Button