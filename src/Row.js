import movieTrailer from "movie-trailer";
import React, { useEffect, useState }  from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css"
const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row(props){
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(props.fetchUrl)
            setMovies(request.data.results)
            

        }
        fetchData()

    }, [])

    var opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }

    const handleClick = (movie) =>{
        
            movieTrailer(movie?.name || movie?.title || "").then((url) =>{
                    const urlParams = new URLSearchParams(new URL(url).search)
                    if (trailerUrl === urlParams.get('v')){
                        setTrailerUrl("")
                    }
                    else setTrailerUrl(urlParams.get('v'))
            }).catch((err) => console.log(err))
        
    }


    return(
        <div className={props.isLargeRow? "row large":"row"} >

            <h2>{ props.title }</h2>
            <div className="row-posters">
            {
                movies.map( m => {
                    if(m.title === undefined){
                        return (<div className="card">
                                <img onClick={() => handleClick(m)} src={`${baseUrl}${props.isLargeRow? m.poster_path: m.backdrop_path}` }/>
                               </div>)
                        
                    }
                    else{
                        return (<div className="card">
                            <img onClick={() => handleClick(m)} src={`${baseUrl}${props.isLargeRow? m.poster_path: m.backdrop_path}`}  />
                           </div>)
                    }
                    
                })
            }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row