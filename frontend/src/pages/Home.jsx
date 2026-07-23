{/*../ because we need to go back one level*/}
import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    /*searchQuery - defines the state, setSearchQuery - a function to update the state */

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 1, title: "Terminator", release_date: "1999"},
        {id: 1, title: "The Matrix", release_date: "1998"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        /*text typed in the textbox stays, withought getting refreshed.*/
        alert(searchQuery)
    };

    return (
    <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    /*update the state form the input element*/
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        <div className="movies-grid">
            {movies.map(
                (movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id} />
                /*.map function iterates through all our mivies values*/
                )
            ))}
        </div>
    </div>
    );
}

export default Home