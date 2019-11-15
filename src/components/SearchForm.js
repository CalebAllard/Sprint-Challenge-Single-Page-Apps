import React, { useState } from "react";
import CharacterList from "./CharacterList";
import Styled from "styled-components";


const SearchFormS = Styled.div`
  form > label > input{
    margin-left:.5rem;
    padding:3px;
    
  }

`;


export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
 
  function handleChange(event){
    setSearchTerm(event.target.value);
    
  }
  
  return (
    <div>
    <SearchFormS>
     <form>
       <label>Search : 
       <input type='text' name='search' onChange={handleChange} value={searchTerm}/>
       </label>
     </form>
    </SearchFormS>
    <CharacterList searchTerm={searchTerm} />
    </div>
  );
}
