import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect } from 'react'
import { APIKey } from "../config/key";
import { Link } from "react-router-dom"


function Home() {

    const [movies, setMovie] = useState ([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovie(data.results)
            })
    }, [])

    return (
        <Container>
            <h1>MOVIES</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>

                            <Link to={`/details/${movie.id}`}>
                            <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )
}

export default Home;