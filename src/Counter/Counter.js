import React from "react";
import {Counter2} from "./Counter2";

class Counter extends React.Component {
    state = {
        counter: 0
    }

    counterPlus = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    counterMinus = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>

                <Counter2 />

                <button onClick={this.counterPlus}>+</button>

                <button onClick={this.counterMinus}>-</button>

            </div>
        )
    }
}

export default Counter