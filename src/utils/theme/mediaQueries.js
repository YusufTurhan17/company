import breakpoints from './breakpoints'

const mediaQueries = {
  xsDown: `@media screen and (max-width: ${breakpoints.xs})`,
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
  xxl: `@media screen and (min-width: ${breakpoints.xxl})`
}

export default mediaQueries
