import React from 'react'
import styled from 'styled-components';
import logo from '../assets/Logo.png';
import Search from './Search';

const SectionHeader = styled.header`
  background-color: #20232A;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center; 

  @media screen and (max-width: 480px) {
    justify-content: center;
    gap: 24px;
  }
`;

const Header = ({value, setValue}) => {
  //console.log('Header montou')

  return (
    <SectionHeader>
      <HeaderContainer>
        <div>
          <img src={logo} alt="logoReactgif" />
        </div>
        <Search setValue={setValue} />
      </HeaderContainer>
    </SectionHeader>
  )
}

export default Header;