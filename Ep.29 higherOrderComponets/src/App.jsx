import ClickCounter from "./components/ClickCounter"
import HoverCounter from "./components/HoverCounter"

function App() {
  return (
    <div>
      <h1 className="text-center font-bold">Counter</h1>
      <ClickCounter name="Click Counter" /> 
      <br />
      <HoverCounter name="HoverCounter" />
    </div>
  )
}

export default App
