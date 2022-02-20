import React from 'react'
import styled from 'styled-components';
import search from '../assets/search-icon.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fdfdfd;
  overflow: hidden;
  border-radius: 4px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const InputSearch = styled.input`
  padding: 6px 5px;
  color: #282C34;
  border: 0;
  outline: none;
  flex: 1;
`;

const Image = styled.img`
  padding: 4px;
  transition: all .2s;
  cursor: pointer;
  
  &:hover{
    background-color: #61dafb8b;
  }
`;

const Search = ({ setValue }) => {
  const [values, setValues] = React.useState(() => {
    const searchLocal = 
      window.localStorage.getItem('search') 
      ? window.localStorage.getItem('search')
      : ''
    ;
    return searchLocal;
  });
  
  React.useEffect(() => {
    const getSearch = window.localStorage.getItem('search', values);
    setValue(getSearch);
  }, [])

  function handleChange({target}){
    if(target.value === ''){
      setValue('');
      window.localStorage.setItem('search', '');
    }

    setValues(target.value);
  }

  function handleClick(e){
    e.preventDefault();
    setValue(values);
    window.localStorage.setItem('search', values);
  }

  function handlePress(e){
    if((e.code === "NumpadEnter") || (e.code === "Enter")){
      setValue(values);
      window.localStorage.setItem('search', values);
    }
  }

  return (
    <Container>
      <InputSearch type="search" value={values} onChange={handleChange} onKeyPress={handlePress} />
      <Image src={search} alt="search icon" onClick={handleClick} />
    </Container>
  )
}

export default Search;