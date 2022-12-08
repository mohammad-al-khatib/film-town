import Card from './Card';

const Cards = ({movies = []}) => (
        <div className='cards-container'>
            {movies.map((movie, index) => <Card movie={movie} key={movie.title} />)}
        </div>
)
export default Cards;