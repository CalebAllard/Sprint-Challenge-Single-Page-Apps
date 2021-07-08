import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function DetailView(props){
    const [charId ] = useState(props.location.state.status)
    const [charInfo, setCharInfo] = useState([]);
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
        .then(resp => {
            // console.log(resp)
            setCharInfo(resp.data);
        }).catch(error => console.log(error));



    },[charId])


    return(
        <div>
        {console.log(charInfo)}
        <img src={charInfo.image} alt={charInfo.name} />
        <h1>{charInfo.name}</h1>

        <Link to='/characters'>Return</Link>

        
        </div>

    );

}