import React from "react";
import Styled from 'styled-components';

const Card = Styled.div`
  background-color:#663399;
  color:white;
  margin:.5rem;
  width:25%;
  text-align:center;
  // box-shadow:0 .5rem 1rem rgba(000,000,000,0.8);
  box-sizing: border-box;
    div{
      width:100%;
      height:100%;
      // background-color:white;
      // color:black;
      padding-bottom:.5rem;
      margin:0;
    
      
    }
`;

export default function CharacterCard(props) {


  return (
    
    
    <Card>
    <h2>{props.name}</h2>
      <div>
      <p>{props.status}</p>
      </div>
    </Card>
  
  );



}
