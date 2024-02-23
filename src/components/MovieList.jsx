import { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function MovieList(props){

    const [movieList, setMovieList] = useState([])
    const elementRef=useRef(null)

    useEffect(()=>{
        getMovieByGenreId2();
    },[])

    const getMovieByGenreId2=()=>{
        GlobalApi.getMovieByGenreId(props.genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500
    }

    return (
        <div className='relative'>
            <IoChevronBackOutline className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${props.index_%3==0 ? 'mt-[80px]' : 'mt-[150px]' }`} onClick={()=>slideLeft(elementRef.current)} />
            <div className="flex overflow-x-auto scrollbar-none scroll-smooth gap-8 pt-5 px-3 pb-5" ref={elementRef}>
                {
                    movieList.map((item,index)=>(
                        <>
                            {props.index_%3==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item}/> }
                        </>
                    ))
                }
            </div>
            <IoChevronForwardOutline className={`text-[50px] text-white top-0 right-0 p-2 z-10 cursor-pointer hidden md:block absolute ${props.index_%3==0 ? 'mt-[80px]' : 'mt-[150px]' }`} onClick={()=>slideRight(elementRef.current)} />
        </div>
    )
}