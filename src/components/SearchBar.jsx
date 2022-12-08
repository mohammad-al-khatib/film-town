import React, { useContext } from 'react';
import { DataContext } from '../context/dataContext';

const SearchBar = () => {
    const { movies, setFilteredMovies } = useContext(DataContext);

    const searchHandler = (text) => {
        const searchResult =movies.filter(({title}) => title.toLowerCase().includes(text.toLowerCase()));
        setFilteredMovies(searchResult)
    }

    return (
        <div className='search-bar'>
            <input
                type='text'
                onChange={(e) => searchHandler(e.target.value)}
                className='search-field'
                placeholder='search movie ....'
            />
        </div>
       
    );
}

export default SearchBar;