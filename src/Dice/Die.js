import React, { Component } from 'react';
import './Die.css';

class Die extends Component {

    static defaultProps = {
        validFaces: [ 
            'one', 'two', 'three', 'four', 'five', 'six'
        ]
    }

    findFace(index) {
        return this.props.validFaces[index];
    }

    render() {


    
        console.log(this.props.face);
        return (
            <div>
                <i className={`fas fa-dice-${this.findFace(this.props.face)} ${this.props.rolling && "shaking"}`}></i>
            </div>
        );
    }
}

export default Die;