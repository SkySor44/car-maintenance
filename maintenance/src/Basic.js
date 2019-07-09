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
        // let headers = {
        //     'accept': 'application/json',
        //     'accept-encoding': 'gzip, deflate',
        //     'accept-language': 'en-US,en;q=0.8',
        //     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
        //     'authorization': 'Basic YjAzMmE3NGMtZTJiZC00MzYzLTg1ZDctZWMzY2RjZWNlZDZh',
        //     'partner-token': 'd8c9783132344d67a724b1736f4db713'
        //   };

        axios.get('https://api.carmd.com/v3.0/maint?year=2004&make=JEEP&model=GRANDCHEROKEE&mileage=143000', { headers: { 'authorization': 'Basic YjAzMmE3NGMtZTJiZC00MzYzLTg1ZDctZWMzY2RjZWNlZDZh', 'partner-token': 'd8c9783132344d67a724b1736f4db713' }}).then(res => 
        console.log(res.data)
            // this.setState({
            //     page: res.data
            // })
        )
    }

    componentDidMount() {
        this.getData();
      }

    render(){
        const {page} = this.state
        return (
            <div>
                <div>
                    <button onClick = {() => this.getData()}>Hello World!</button>
                    {page === "" ? <p>Click button to test api</p> : <p>{page}</p> }
                </div>
                
    
            </div>
        )
    }
    
}

