import React from 'react'
import styled from 'styled-components'
import sucessIcon from '../assets/check-icon.png';

const AlertContainer = styled.div`
  width: 100%;
  padding: 24px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #388e3c;

  & > p{
    margin-left: 10px;
    color: #fdfdfd;
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: .5px;
  }
`;

const Alert = ({ isCopy, setIsCopy }) => {

  setTimeout(() => setIsCopy(false), 3000)

  console.log('Alert ', isCopy)

  return (
    <AlertContainer role="alert">
      <img src={sucessIcon} />
      <p>The Gif has been copy. Share with somebody</p>
    </AlertContainer>
  )
}

export default Alert;