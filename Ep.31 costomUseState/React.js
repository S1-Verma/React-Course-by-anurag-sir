import render from "./react-dom";
import React from "./React";
import App from "./App";

export function createElement(type, props, ...children) {

    const reactElement = {
        type: type,
        props: {
            ...props,
        },
    }
    if (children.length) reactElement.props.children = children;
    return reactElement
}

let states = [] ;
let stateIndex = 0 ; 

export const useState = (initialState) => {
    states[stateIndex] = states[stateIndex] ?? initialState; // agar stateindex me already value he to vo value set kar do nohi to initialState ki value set karo
    const localIndex = stateIndex; 

    console.log(states)

    const setState = (newState) => {
        states[localIndex] = newState ; 
        stateIndex = 0; 
        render(<App></App>, document.querySelector('#root'))
    }

    stateIndex++ 
    return [states[localIndex], setState]
}

export default {
    createElement,
}; 