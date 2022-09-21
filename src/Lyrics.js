
// import './App.css';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
  
function Lyrics() {
    // const [artist, setArtist] = useState("");
    const [song, setSong] = useState([]);
    // const [lyrics, setLyrics] = useState("");
  
    // function searchLyrics() {
    //     if (artist === "" || song === "") {
    //         return;
    //     }

    const getSongs =async ()=>{
        await fetch("https://api.lyrics.ovh")
        .then((response)=> response.json())
        .then((song)=> setSong(song))
        .catch((error)=>{
            throw new Error(error)
        }) 

        }
        useEffect(()=>{
            getSongs()
        }, [])

//         Axios.get(
// ${artist}/${song}`).then(res => {
//             console.log(res.data.lyrics);
//             setLyrics(res.data.lyrics);
//         })
//     }
  
    return (
        <div className="Main">
            <h1>Lyrics Finder</h1>
            {
                song.map((song)=>
                <div key={song.name}>
                    <h2>{song.username}</h2>
                    <p>{song.city}</p>
                    <p>{song.country}</p>
                    <img src={song.thumbnail} alt = "image"/>

                </div>)

            }
  
            {/* <input className="inp" type="text" 
                placeholder='Artist name'
                onChange={(e) => { setArtist(e.target.value) }} />
            <input className="inp" type="text" 
                placeholder='Song name'
                onChange={(e) => { setSong(e.target.value) }} />
            <button className="btn" 
                onClick={() => searchLyrics()}>
                    Search button</button>
            <hr />
            <pre>{lyrics}</pre> */}
        </div>
    );
}
 
export default Lyrics;
