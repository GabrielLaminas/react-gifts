import React from 'react'
import styled from 'styled-components';
import search from '../assets/search-icon.png';

const Container = styled.div`
  padding: 5px 4px;
  display: flex;
  align-items: center;
  background-color: #fdfdfd;
  border-radius: 4px;
`;

const InputSearch = styled.input`
  padding: 3px;
  color: #282C34;
  border: 0;
  outline: none;
`;

const Image = styled.img`
  margin-left: 4px;
`;

const debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const Search = ({value, setValue}) => {

  function handleChange({target}){
    const values = target.value;

    if(values !== ''){
      debounce(setValue(values), 1000);
    }
    else{
      setValue('');
    }
  }

  return (
    <Container>
      <InputSearch type="search" onChange={handleChange} value={value} />
      <Image src={search} alt="search icon" />
    </Container>
  )
}

export default Search;