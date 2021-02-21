import {useParams} from 'react-router-dom'
import {movieData} from "./movieData"
import React from 'react'
import './Movie.css'

function MovieDesc() {
    const id = useParams().id // untuk mengambil id di parameter
    const found = movieData.find(element => element.id == id); //untuk mengambil data dari moviedata
    console.log(found);
    console.log(movieData)
    return (
        <div>
            <div className="Movie123"/>
            <h1>{found.title}</h1>
            <img src={"../images/"+found.poster_path} alt="poster"/>
        </div>
    )
}

export default MovieDesc

