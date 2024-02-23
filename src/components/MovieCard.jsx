const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

export default function MovieCard(props){
    return (
        <>
            <img src={IMAGE_BASE_URL+props.movie.poster_path} alt="" className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-grey-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"/>
        </>
    )
}