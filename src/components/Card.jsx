import React, { useContext } from 'react';
import { useState } from 'react';
import { DataContext } from '../context/dataContext';

const  Card = ({movie}) => {
    const {title, poster_path, overview, popularity} = movie || {};
    const { movies, setFilteredMovies } = useContext(DataContext);
    const [isMoviePage, setIsMoviePage] = useState(false)

    const viewMovie = () => {
        setIsMoviePage(true);
        setFilteredMovies([movie])
    }

    const viewAllMovies = () => {
        setIsMoviePage(false);
        setFilteredMovies([...movies])
    }

    return (
        <div className={`card ${isMoviePage? 'single-movie-card' : ''}`}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={`${title} poster`}
                className='card-image'
                onClick={() => viewMovie()}
            />
            <h1 className='card-title'>{title}</h1>
            {isMoviePage &&
                <>
                    <span>Popularity: {popularity}</span>
                    <p className='card-description'>{overview}</p>
                    <button class="previous round" onClick={() => viewAllMovies()}>&#8249;</button>
                </>
                }
        </div>
    );
}

export default Card;