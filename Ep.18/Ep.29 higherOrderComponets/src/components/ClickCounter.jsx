import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
    render() {       
        const {name} = this.props
        return (
            <div className="flex flex-col items-center justify-center">
                <h3>{name}</h3>
                <button onClick={this.props.increaseCount} className="w-lg bg-sky-200 p-2 cursor-pointer " > {this.props.count} </button>
            </div>
        ) 
    }

}

export default withCounter(ClickCounter);  