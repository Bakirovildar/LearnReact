import React, {Component} from "react";
import classes from './Car.css'
import Radium from "radium";

class Car extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.current.focus()
        }
    }

    render() {


        const classInput = ['input']

        if (this.props.name !== ''){
            classInput.push('green')
        }else {
            classInput.push('red')
        }

        if (this.props.name.length > 4) {
            classInput.push('bold')
        }


        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.year}</p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    className={classInput.join(' ')}
                />
                <button onClick={this.props.deleteCar}>delete</button>
            </div>
        )
    }

}

export default Car