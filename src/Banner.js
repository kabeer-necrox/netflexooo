import axios from "./axios";
import React, {useEffect, useState} from "react"
import requests from "./requests"
import "./Banner.css"

export default function Banner(){

    const [movie, setMovie ] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length)
            ])


    }
        fetchData()
        

        

    }, [])

    console.log(movie?.backdrop_path)

    return(
        <header className="banner" style={{
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            textAlign:"left"

        }}>
            
            
            <div className="banner-contents">
                <h1 className="banner-title">
                    
                    { movie?.title || movie?.name || movie?.original_name }
                </h1>
                
                <div className="banner-buttons">
                    <button className = "banner-button">Play</button>
                    <button className = "banner-button">My List</button>
                    
                </div>
                <h1 className="description">{movie?.overview}</h1>
                
                

            </div>

        </header>
    )
    



}