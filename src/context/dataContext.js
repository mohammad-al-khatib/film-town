import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState(movies)
    return (
        <DataContext.Provider value = {{movies, setMovies, filteredMovies, setFilteredMovies} }>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;