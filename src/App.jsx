import './App.css'
import MyComponent from './components/MyComponent'
import MyComponentFunc from './components/MyComponentFunc'

function App() {
  return (
    <>
      <MyComponent name="ReactJS"/>
      <MyComponent age={100} />
      <hr/>
      <MyComponentFunc name="I'm 함수형"/>
    </>
  )
}

export default App
