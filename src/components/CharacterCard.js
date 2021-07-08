import React from "react";
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const Card = Styled.div`
  background-color:#663399;
  color:white;
  margin:.5rem;
  width:25%;
  text-align:center;
  
  box-sizing: border-box;
  a{
    text-decoration:none;
    color:white;
  }  
  div{
      width:100%;
      height:100%;
      
      padding-bottom:.5rem;
      margin:0;
    
      
    }
    
`;

export default function CharacterCard(props) {


  return (
    
    
    
    <Card>
    <Link to={{pathname:`/characters/${props.name}`, state: { status: props.id }
  
  
    }} >
    <h2>{props.name}</h2>
      <div>
        
      <p>{props.status}</p>
      
      </div>
      </Link>
    </Card>
      
  
  );



}
