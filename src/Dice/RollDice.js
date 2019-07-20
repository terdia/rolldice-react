import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstDice: 'one',
            secondDice: 'three',
            rolling: false
        };

        this.roll = this.roll.bind(this); //not really needed since I am using arrow function 
    }

    static defaultProps = {
        validFaces: [ 
            'one', 'two', 'three', 'four', 'five', 'six'
        ]
    }

    roll = () => {
        let faceOne = this.props.validFaces[
            Math.floor(Math.random() * this.props.validFaces.length)
        ];

        let faceTwo = this.props.validFaces[
            Math.floor(Math.random() * this.props.validFaces.length)
        ];

        this.setState({firstDice: faceOne, secondDice: faceTwo, rolling: true});

        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }

    render() {
        return (
            <div className="RollDice">
                <h1>Roll Dice !</h1>
                <div className="Die">
                    <Die face={this.state.firstDice} rolling={this.state.rolling} />
                    <Die face={this.state.secondDice} rolling={this.state.rolling} />
                </div>

                <button onClick={this.roll} disabled={this.state.rolling}>
                    { this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;