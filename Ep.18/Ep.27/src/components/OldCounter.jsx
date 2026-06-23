import { Component } from "react";

class OldCounter extends Component {

    // ab yaha par ek contructor ko ko call karna padega 

    constructor(props) {
        // ab yahar par agar hume parent class ki properties ko access karna he to hume super keyword ka use karna padega 
        super(props)
        this.state = {
            count: 0,
        }

        this.timerId = null
        // ab contructor ke under hume props ka access nahi hota agar hume yaha par props chahiye to hume contructor me pass karna hoga 
        console.log("contructor")
         console.log(document.querySelector('#old-heading')) // yaha par ye null dega kyu ki abhi tak ye heading tag render nahi hua he 
    }

    // sabse pehele constructor call hota he and uske bad render methude and sabse last me componentDidMount methude run hoga 

    componentDidMount(){
        console.log("componentDidMount") // functional components me useeffect jaisa mana ja sakta he kyu ki vo bhi sabse last me run hota he 
        console.log(document.querySelector('#old-heading')) // yaha par ye acceable hoga kyu ki tab tak ye render ho chuka hoga agar ise contructor ya render methed me log kare to vaha par ye null dega kyu ki tab tak dom me ye heading render nahi hoti 

    //    this.timerId = setInterval(() => {
    //         console.log('hii')
    //     }, 1000);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate") // ye kisi state ke update hone ke bad run hoga 
    }

    componentWillUnmount(){
        console.log('componentWillUnmount') ; // ye methude tab run hota jab user page ko elements page se remove hote he yani ki user kisi dure page par jayege to dom se pelehe page ke elements ko remove kar diya jata he 

        clearInterval(this.timerId)
    }


    render() {
        console.log(document.querySelector('#old-heading')) // yaha par ye null dega kyu ki abhi tak ye heading tag render nahi hua he 
        const name = this.props.name //  yaya hume by default prop ka access hota he hume distructure karne ki jarurat nahi hoti 
        return (
            <div className="flex flex-col items-center justify-center gap-1 ">
                <h3 id="old-heading">Class Component Counter </h3>

                <div className=' flex items-center '>
                    <button onClick={ () => {
                        this.setState({ count: this.state.count - 1 })
                    }} className=' border-2 cursor-pointer p-1 rounded-2xl  font-normal '>Count -</button>
                    <p className=' border-2 p-1 rounded-2xl m-4 w-20'>{this.state.count}</p>
                    <button onClick={() => {
                        this.setState({ count: this.state.count + 1 })
                    }} className=' border-2 cursor-pointer p-1 rounded-2xl font-normal'>Count + </button>
                </div>

            </div>
        )
    } 

}

export default OldCounter;