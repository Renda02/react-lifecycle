import React, { Component } from 'react'


export default class Counter extends Component {
   constructor(props){
       super(props)
           this.state = {
               counter: 2
           }

           this.increment =()=>{
               this.setState({counter: this.state.counter +1})
           }

           this.decrement = ()=>{
               this.setState({counter: this.state.counter -1})
           }
       
   }

   componentDidMount(){
       //its called after render and each time when construct a state .
       console.log('Component Did Mount');
   }


   componentDidUpdate(){
       //takes parameters like prevState, prevProps, snapshot
       console.log('Component Did Update')
   }


    render() {
        return (
            <div>
                <h1> Counter: {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
               
            </div>
        )
    }
}
