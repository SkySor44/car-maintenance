import React, {Component} from 'react';
import axios from 'axios';

export default class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: ''
            }
        }

    getData(){
        axios.get('/').then(res => 
            console.log(res.data)
        )
    }

    render(){
        return (
            <div>
                <div>
                    <button onClick = {() => this.getData()}>Hello World!</button>
                </div>
                
    
            </div>
        )
    }
    
}

