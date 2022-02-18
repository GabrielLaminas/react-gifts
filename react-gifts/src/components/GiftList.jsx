import React from 'react'
import styled from 'styled-components';
import Spinner from './Spinner';
import copy from '../assets/copy-icon.png';

const ContainerList = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;

  & > h1{
    margin-bottom: 16px;
    font-size: 2rem;
    color: #282C34;
  }
`;

const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-items: center;
  gap: 16px;
`;

const ListGift = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const CopyImg = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover{
    background-color: red;
  }
`;

const GiftList = ({ gifs, load }) => {
  //console.log('GiftsList montou')

  if(load)return <Spinner bgColor="#282C34" colorEffect="#61DAFB" />
  if(gifs === null) return null;

  return (
    <ContainerList>
      <h1>Trending</h1>
      <GridList>
      {gifs.data.map((item, i) => (
        <ListGift key={item.id + i}>
          <img 
            src={item.images.original.url} 
            alt={item.title}
            style={{
              width: '250px', 
              height: '220px', 
              borderRadius: '8px'
            }} 
          />
          <CopyImg 
            src={copy} 
            alt="copy icon"
            
            //onClickCapture={(e) => handleCopy(item.images.original.url, e)}
          />
        </ListGift>
      ))}
      </GridList>
    </ContainerList>
  )
}

export default GiftList;