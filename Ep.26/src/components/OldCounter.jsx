import { Component } from "react";

class OldCounter extends Component {

    // ab yaha par ek contructor ko ko call karna padega 

    constructor(props) {
        // ab yahar par agar hume parent class ki properties ko access karna he to hume super keyword ka use karna padega 
        super(props)
        this.state = {
            count: 0,
            count2 : 0
        }
        // ab contructor ke under hume props ka access nahi hota agar hume yaha par props chahiye to hume contructor me pass karna hoga 
    }

    render() {
        const name = this.props.name //  yaya hume by default prop ka access hota he hume distructure karne ki jarurat nahi hoti 
        return (
            <div className="flex flex-col items-center justify-center gap-1 ">
                <h3>Class Component Counter </h3>

                <div className=' flex items-center '>
                    <button onClick={() => {
                        this.setState({ count: this.state.count - 1 })
                    }} className=' border-2 cursor-pointer p-1 rounded-2xl  font-normal '>Count -</button>
                    <p className=' border-2 p-1 rounded-2xl m-4 w-20'>{this.state.count}</p>
                    <button onClick={() => {
                        this.setState({ count: this.state.count + 1 })
                    }} className=' border-2 cursor-pointer p-1 rounded-2xl font-normal'>Count + </button>
                </div>

                <div className=' flex items-center '>
                    
                    <button onClick={() => {
                        this.setState({ count2: this.state.count2 - 1 })
                    }} className=' border-2 cursor-pointer p-1 rounded-2xl  font-normal '> Count - </button>
                    <p className=' border-2 p-1 rounded-2xl m-4 w-20 '>{this.state.count2}</p>
                    <button onClick={() => {
                        this.setState({ count2: this.state.count2 + 1 })
                    }} className=' border-2 cursor-pointer p-1 rounded-2xl font-normal'> Count + </button>
                </div>
            </div>
        )
    } 

}

export default OldCounter;