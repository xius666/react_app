import React ,{useState,useEffect}from 'react'
import axios from './axios.js'
function Row({title,fetchUrl}) {

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            //console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);//dependent on the fetchurl pulled from outside
    console.log(movies);
    return (
        <div>
           <h2>{title}</h2>
           {} 
        </div>
    )
}

export default Row
