const breakpoints = ["320px", "576px", "768px", "992px", "1200px", "1400px"];

const [
  xsmallBreakpoint,
  smallBreakpoint,
  mediumBreakpoint,
  largeBreakpoint,
  xlargeBreakpoint,
  xxlargeBreakpoint,
] = breakpoints;

// aliases
breakpoints.xs = xsmallBreakpoint;
breakpoints.sm = smallBreakpoint;
breakpoints.md = mediumBreakpoint;
breakpoints.lg = largeBreakpoint;
breakpoints.xl = xlargeBreakpoint;
breakpoints.xxl = xxlargeBreakpoint;

export default breakpoints;
