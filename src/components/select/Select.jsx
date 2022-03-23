import styled from "styled-components";
import PropTypes from 'prop-types'

const StyledSelect = styled.select`
     min-height: 2rem;
    border: none;
    border-bottom: 0.05rem solid rgba(255,255,255,0.5);
    border-radius: 0;
    min-width: 200px;
 
    box-shadow: none !important;
    outline: none !important;
    background: rgba(0,0,0,0) !important;
    color: #ffffff !important;
    font-size: .8rem;
    line-height: 1rem;
    transition: all .3s ease;
    
`;
const StyledOption = styled.option``;

const Select = ({ value, onChange, className, children }) => (
  <StyledSelect className={className} value={value} onChange={onChange}>
      {children}
  </StyledSelect>
);

Select.Option = StyledOption

Select.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number])
}

export default Select;
