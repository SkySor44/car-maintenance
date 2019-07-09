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
        axios.get('http://localhost:3001/test', '').then(res => 
            this.setState({
                page: res.data
            })
        )
    }

    // componentDidMount() {
    //     this.getData();
    //   }

    render(){
        const {page} = this.state
        return (
            <div>
                <div>
                    <button onClick = {() => this.getData()}>Hello World!</button>
                    {page === "" ? <p>No response yet</p> : <p>{page}</p> }
                </div>
                
    
            </div>
        )
    }
    
}

