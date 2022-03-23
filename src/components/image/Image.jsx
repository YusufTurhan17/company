import React from 'react'
 import PropTypes from 'prop-types'
import styled from 'styled-components'
import { position, border, space, layout } from 'styled-system'

const StyledImage = styled.img`
  object-fit: ${({ objectFit }) => objectFit};
  display: block;
  object-position: ${({ objectPosition }) => objectPosition};
  ${position}
  ${border}
  ${space}
  ${layout}
`

const Image = ({ objectFit, objectPosition, ...otherProps }) => (
  <StyledImage
  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    objectFit={objectFit}
    objectPosition={objectPosition}
    {...otherProps}
  />
)

Image.defaultProps = {
  objectFit: 'fill',
  objectPosition: '50% 50%'
}

Image.propTypes = {
  /**
   * The HTMLImageElement property src, which reflects the HTML src attribute, specifies the image to display in the <img> element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)
   */
  src: PropTypes.string,
  /**
   * The HTMLImageElement property alt provides fallback (alternate) text to display when the image specified by the <img> element is not loaded. This may be the case because of an error, because the user has disabled the loading of images, or because the image simply hasn't finished loading yet.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)
   */
  alt: PropTypes.string,
  /**
   * The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
   */
  objectFit: PropTypes.oneOf([
    'fill',
    'cover',
    'contain',
    'none',
    'scale-down'
  ]),
  /**
   * The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
   */
  objectPosition: PropTypes.string
}

export default Image
