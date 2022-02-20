import React from 'react'
import styled, {keyframes} from 'styled-components'
import sucessIcon from '../assets/check-icon.png';

const showbottom = keyframes`
  from{
    bottom: -50px;
    opacity: 0;
  }
  to{
    bottom: 0;
    opacity: 1;
  }
`

const AlertContainer = styled.div`
  width: 100%;
  padding: 24px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #388e3c;
  animation: ${showbottom} .5s forwards;

  & > p{
    margin-left: 10px;
    color: #fdfdfd;
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: .5px;
  }

  @media screen and (max-width: 480px) {
    padding: 16px 24px;
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