import './App.css';
import React, {Component} from "react";
import Car from "./car/car";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            cars: [
                {name: 'KIA', year: 2020},
                {name: 'BMW', year: 2018},
                {name: 'Audi', year: 2013},
                {name: 'Mercedes', year: 2015},
            ],
            pageTitle: 'Your car',
            showCars: false
        }
    }

    onChangeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({
            cars: cars
        })
    }

    onShowCars() {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    deleteCar(index) {
        const cars = [...this.state.cars]
        cars.splice(index, 1)
        this.setState({
            cars: cars
        })
    }

    render() {
        return (
            <div className='App'>
                <h1>{this.state.pageTitle}</h1>
               <ClickedContext.Provider value={this.state.clicked}>
                   <Counter />
               </ClickedContext.Provider>

                <button style={{marginTop: 25}} onClick={this.onShowCars.bind(this)}>Click</button>

                <button onClick={() => this.setState({clicked: true})}>clicked</button>

                {this.state.showCars
                    ?this.state.cars.map((car, index) => {
                    return (
                        <Car
                            index={index}
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeName={event => this.onChangeName(event.target.value, index)}
                            deleteCar={this.deleteCar.bind(this, index)}

                        />
                    )
                })
                    : null
                }
            </div>
        )
    }

}

export default App
