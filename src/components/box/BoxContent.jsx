import styled from 'styled-components'

import View from '../view/View'

const BoxContent = styled(View)`
    padding: 26px;
    background:#fff;

    :hover {
      background-color: #23232d;
    }
`

BoxContent.defaultProps = {
  mt: '29px'
}

export default BoxContent
