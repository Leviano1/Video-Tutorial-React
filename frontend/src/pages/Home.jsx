{/*../ because we need to go back one level*/}
import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 1, title: "Terminator", release_date: "1999"},
        {id: 1, title: "The Matrix", release_date: "1998"},
    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}