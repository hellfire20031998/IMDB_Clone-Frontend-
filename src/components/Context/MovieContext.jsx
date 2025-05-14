import React from "react";

export const MovieContext=React.createContext({
watchList:[],
setWatchList:[],
handleAddToWatchList:()=>{},
handleRemoveFromWatchList:()=>{}
});

export default MovieContext