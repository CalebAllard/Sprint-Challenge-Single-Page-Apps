import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Styled from 'styled-components';

const CardList = Styled.div`
  display:flex;
  justify-content:center;
  align-content:flex-start;
  flex-wrap:wrap;
  width:85vw;
  margin:0 auto;
  

`;

const Pageinate = Styled.div`
  width:100vw;
  margin: 1.5rem auto;
  text-align:center;
  a{
    box-sizing:border-box;
    text-decoration:none;
    border:1px solid black;
    padding:.5rem .5rem;
    margin: 0 2px;
    cursor:pointer;
    
  }

`;




export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);
  // set page state
  const [page, setPage] = useState(1);
  const [pageAmount, setPageAmount] = useState(0);
  function changePage(e){
    // console.log(e.target.innerText);
    setPage(e.target.innerText);
  }
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
  axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      // console.log(response);
      return setPageAmount(response.data.info.pages);
    })
    .catch(error => console.log(`error: ${error}`));
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`).then((response)=>{
      const characters = response.data.results.filter(character => {

        return character.name.toLowerCase().includes(props.searchTerm.toLowerCase())
      });
      setChar(characters);

    }).catch(error => console.log(error))
      
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.searchTerm,page]);
  
  let pageArray = [];
  for(let i = 0; i < pageAmount; i++){
    let tempPage = pageAmount;
    pageArray.push(tempPage - pageAmount + i + 1);
  }

  return (
    <CardList>
     
      <Pageinate>
      {
        pageArray.map(i => 
          <button onClick={changePage} key={i}>{i.toString()}</button>
        )

      }
      </Pageinate>
      { 
    
        char.map((char) => (
          
          <CharacterCard key={char.id} name={char.name} status={char.status} id={char.id} />
        
        ))
        
      
      }
      
    </CardList>
  );
}
