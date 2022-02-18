import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const SpinnerLoading = styled.div`
  width: 40px;
  height: 40px;
  margin: 10% auto;
  background-color: transparent;
  animation: ${rotate} .9s ease-in-out infinite;
  border: 4px solid ${(props) => props.bgcolor};
  border-right: 4px solid ${(props) => props.coloreffect};
  border-radius: 50%;
`;

function Spinner({bgColor, colorEffect}) {
  return <SpinnerLoading bgcolor={bgColor} coloreffect={colorEffect} />;
}

export default Spinner;