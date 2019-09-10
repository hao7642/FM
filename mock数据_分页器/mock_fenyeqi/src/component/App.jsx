import React, { Component } from 'react';
import axios from 'axios'
import '../mock/mock'
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    isclick=()=>{
        axios.post('/goodlist',{page:2,pageSize:5}).then(res=>{
             this.setState({
                 list:res.data.list
             })
        })
    }

    render() {
        let {list} =this.state
        console.log(list)
        return (
            <div>
                <button onClick={this.isclick}>
                    点击获取
                </button>
                
            </div>
        );
    }
}

export default App;