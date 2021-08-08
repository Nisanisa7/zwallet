import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../utils';

// ICON CONDITIONAL
const IconArrowUp = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 22.1663V5.83301"
      stroke="#ffffff"
      stroke-opacity="0.8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.83333 13.9997L14 5.83301L22.1667 13.9997"
      stroke="#ffffff"
      stroke-opacity="0.8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const IconPlus = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 5.83301V22.1663"
      stroke="#ffffff"
      stroke-opacity="0.8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.83333 14H22.1667"
      stroke="#ffffff"
      stroke-opacity="0.8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Button = ({ children, icon, onClick, className, primary, disabled }) => {
  return (
    <StyledButton
      disabled={disabled}
      className={className}
      onClick={onClick}
      primary={primary}
    >
      {icon === 'top-up' && IconPlus}
      {icon === 'transfer' && IconArrowUp}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.checkPropTypes,
};

Button.defaultProps = {
  children: 'Type of button',
  // icon: IconArrowUp,
};

export default Button;

const StyledButton = styled.button`
  /* background: rgba(255, 255, 255, 0.2); */
  width: 100%;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 27px;
  color: white;
  font: inherit;
  /* background-color: yellow; */
  background-color: ${({ primary }) => (primary ? colors.primary : '#ffffff')};
  background-color: ${({ disabled }) => disabled && '#DADADA'};
  color: ${({ disabled }) => disabled && '#88888F'};
  svg {
    margin-right: 1rem;
  }
  &:hover {
    opacity: 0.8;
  }
`;
