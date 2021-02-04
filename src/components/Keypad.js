// Code Keypad Component Here
import React, { Component } from 'react';

handleKeyUp = () => {
    console.log('Entering password...')
}
export default class Keypad extends Component {
    render(){
        return(
            <input type='password' onKeyUp={this.handleKeyUp}></input>
        )
    }
}