import { useEffect,useState } from "react";
import Cast from "../Cast/Cast";
import Crew from "../Crew/Crew";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";

function Details(){

    
    const [details,setDetails]=useState([]);
    const {id}= useParams();

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac71aa023847362617a6ea79ba561a94&language=en-US&append_to_response=credits,videos`).then((res)=>{
            return res.json();
        }).then((res)=>{
            // console.log(res.genres);
            setDetails(res);
            

        })

    },[]);

    return(
        <div>
           {details && <DetailsBanner details={details} />} 
           {details?.credits?.cast && <Cast cast={details.credits.cast.slice(0,8)} />}
           {details?.credits?.crew && <Crew crew={details.credits.crew.slice(0,8)} />}
        </div>
    )
}
export default Details;