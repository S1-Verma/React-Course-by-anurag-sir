import render from "./react-dom";
import React, { useState } from "./React";

export default function App () {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);
    const [name, setName] = useState("yash");

    return (<div>
        <h1 style={{ textAlign: "center", userSelect: 'none', cursor: "pointer" }} onclick = {(e)=> {
            setCount(count + 1)
        }} > {count} </h1>

        <h1 style={{ textAlign: "center", userSelect: 'none', cursor: "pointer" }} onclick = {(e)=> {
            setCount2(count2 + 1)
        }} > {count2} </h1>

        <h1 style={{textAlign:'center', userSelect:'none', cursor:'pointer'}} >
            {name}
        </h1>

        <div style={{textAlign:'center'}}>
            <input type="text" onchange={(e)=>{ setName(e.target.value)}} value={name}  />
        </div>
    </div>)
}

render(<App />, document.querySelector("#root"))