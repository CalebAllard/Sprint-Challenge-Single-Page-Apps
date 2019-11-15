import React, { useState } from "react";
import CharacterList from "./CharacterList";
export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
 
  function handleChange(event){
    setSearchTerm(event.target.value);
    
  }
  
  return (
    <div>
    <section className="search-form">
     <form>
       <label>Search : 
       <input type='text' name='search' onChange={handleChange} value={searchTerm}/>
       </label>
     </form>
    </section>
    <CharacterList searchTerm={searchTerm} />
    </div>
  );
}
