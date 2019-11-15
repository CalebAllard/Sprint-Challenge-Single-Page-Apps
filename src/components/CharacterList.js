import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';




export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
  axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      // setChar(response.data.results);
      const characters = response.data.results.filter(character => {
        return character.name.toLowerCase().includes(props.searchTerm.toLowerCase())
      });
      setChar(characters);

    })
    .catch(error => console.log(`error: ${error}`));
    
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.searchTerm]);

  return (
    <section className="character-list">
      <h2></h2>
      
      {console.log(char)}
      { 
    
        char.map((char) => (
          
          <CharacterCard key={char.id} name={char.name} />
        
        ))
        
      
      }
      
    </section>
  );
}
