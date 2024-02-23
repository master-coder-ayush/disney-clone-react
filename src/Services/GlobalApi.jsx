import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "2c1e678f0e0ea7a9b47596756e72c0db"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=';

// https://api.themoviedb.org/3/trending/all/day?api_key=2c1e678f0e0ea7a9b47596756e72c0db

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+api_key+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}