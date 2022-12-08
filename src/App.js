import { useContext, useEffect } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { DataContext } from './context/dataContext';
import { fetchData } from './utils/fetchData';

const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b'

const  App = () => {
  const { setMovies } = useContext(DataContext);
  const {filteredMovies ,setFilteredMovies} = useContext(DataContext);

  useEffect(() => {
    fetchData(URL, setMovies, setFilteredMovies)
  }, [setMovies, setFilteredMovies])


  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Cards movies={filteredMovies}/>
    </div>
  );
}

export default App;
