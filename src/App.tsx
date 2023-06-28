import { Application } from "./components/application/application"
import { Skills } from "./components/skills/skills"
import "./App.css"
import { Counter } from "./components/counter/counter"


function App() {
  return (
   <div className="App">
   {/* <Application/>
   <Skills skills={['HTML', 'CSS']} /> */}
  <Counter/>
   </div>
      
  )
}

export default App