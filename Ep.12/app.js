import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div>
           { true ? <AppleCounter> </AppleCounter> : <Counter />} 
        </div>
    );
}

export default App;
