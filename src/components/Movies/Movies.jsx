import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './Movies.css'

function Movies() {
    const[movies,setMovies] = useState([]);


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=ac71aa023847362617a6ea79ba561a94`).then((res)=>{
            return res.json();
        }).then((res)=>{
            // console.log(res);
            setMovies(res.results);
        })
    },[]);

    return(
        <>
         <h1>Trending Movies</h1>
        <div className="card-parent">
        {
           movies.map((movie)=>{
            return <MoviesCard movie={movie} key={movie.id}/>
           }) 
        }
        </div>
        </>
    )
}

export default Movies;