import './App.css'
import MovieCard from "./components/MovieCard"

function App() { {/*component - any function in JS that returns some kind of JSX code*/}
  const movieNumber = 1;
  return (
    <> {/*fragmentwraps different components so that we can return them*/}
    {/*if statement block*/}
      {movieNumber === 1 ? ( 
        <MovieCard movie={{title: "Tim's Film", release_date:"2024"}}/>
      ) : (
       <MovieCard movie={{title: "Tim's Film", release_date:"2020"}}/>
      )}
    </>
  );
}

function Text(){
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

export default App
