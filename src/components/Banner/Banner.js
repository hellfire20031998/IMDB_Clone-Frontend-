import { useEffect,useState } from "react";
import './Banner.css'


function Banner(){
    // const[films,setFilms] = useState([]);
    const[film, setFilm]= useState([]);

    useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=ac71aa023847362617a6ea79ba561a94`).then((res)=>{
                return res.json();
            }).then((res)=>{
                // console.log(res);
                // setFilms(res.results);
                let id= Math.floor(Math.random()*20)
                setFilm(res.results[id]);
                // console.log(res.results[id]);

            })

        },[]);
return(
<div className="banner">
    <div className="banner-img">
    <img src={`https://image.tmdb.org/t/p/original//${film.backdrop_path}`} />

    </div>

    <div className="banner-title">
        {film.title}
    </div>
</div>
);
}
export default Banner;