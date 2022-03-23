import PropTypes from 'prop-types'

import  View  from '../view/View'
import Image from '../image/Image'

const CardImage = ({ src, width, height, ...otherProps }) => (
  <View mb="16px" position="relative">
    <Image
      src={src}
      width={width}
      height={height}
      
      {...otherProps}
    />
  </View>
)

CardImage.defaultProps = {
  layout: 'responsive',
  height: 315,
  width: "100%"
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default CardImage
