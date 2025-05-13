import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './Movies.css'
import Pagination from "../Pagination";

function Movies() {
    const[movies,setMovies] = useState([]);
    const[pageNo,setPageNo]= useState(1);

    function handleNext(){
        if(pageNo===500) return;
        setPageNo(pageNo+1);
    }

    function handlePrev(){
        if(pageNo===1)return;
        setPageNo(pageNo-1);
    }


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=ac71aa023847362617a6ea79ba561a94&language=en-US&page=${pageNo}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            // console.log(res);
            setMovies(res.results);
        })
    },[pageNo]);

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

        <Pagination 
        pageNumber={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
        />
        </>
    )
}

export default Movies;