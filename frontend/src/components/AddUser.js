import React, { Component } from 'react'
import axios from  'axios';

export default class AddUser extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
        }
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const {name} = this.state;
        const newDemo = {
            name: name,
        }
        axios.post('http://localhost:4000/api/demo/add',newDemo)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
    }

    render() {
        const {name} = this.state;

        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}> 
                <label>Enter Your Name:</label><input type="text" value={name} id="name" onChange={this.onChange}/>
                <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
