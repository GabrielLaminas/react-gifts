import React from 'react'
import styled from 'styled-components';
import Spinner from './Spinner';
import shareIcon from '../assets/share-icon.png';
import copy from "copy-to-clipboard"; 

import Alert from './Alert';

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

  &:hover img{
    visibility: visible;
  }
`;

const CopyImg = styled.img`
  visibility: hidden;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover{
    filter: invert(68%) sepia(84%) saturate(1372%) hue-rotate(171deg) brightness(112%) contrast(97%);;
  }
`;

const GiftList = ({ gifs, load }) => {
  //console.log('GiftsList montou')
  const [isCopy, setIsCopy] = React.useState(false);

  function copyToClipboard(text){
    copy(text);
    setIsCopy(true);
  }

  if(load) return <Spinner bgColor="#282C34" colorEffect="#61DAFB" />
  if(gifs === null) return null;
  
  return (
    <>
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
              src={shareIcon} 
              alt="copy icon"
              onClick={() => copyToClipboard(item.images.original.url)}
            />
          </ListGift>
        ))}
        </GridList>
      </ContainerList>
      {isCopy && <Alert isCopy={isCopy} setIsCopy={setIsCopy} />}
    </>
  )
}

export default GiftList;