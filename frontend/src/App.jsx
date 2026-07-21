import './App.css'

function App() { {/*component - any function in JS that returns some kind of JSX code*/}
  return (
    <> {/*fragmentwraps different components so that we can return them*/}
      <Text />
    </>
  )
}

function Text(){
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

export default App
