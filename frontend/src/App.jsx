import './App.css'
import MovieCard from "./components/MovieCard"
import Home from "./pages/Home"

function App() { {/*component - any function in JS that returns some kind of JSX code*/}
  const movieNumber = 1;
  return (
    <> {/*fragmentwraps different components so that we can return them*/}
      <Home />
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
