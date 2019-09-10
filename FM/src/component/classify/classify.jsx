import React, { Component } from 'react';
import Tbar from '../Tbar/tbar'
import {Link,Route} from 'react-router-dom'
import List from './list'
import axios from 'axios'
import '../../mock/index'
class classify extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.get('/booklists').then(res => {
            this.setState({
                list:res.data.lists
            })
        })

    }
    render() {
        let {list} =this.state
        return (
            <div className='classify'>
                <Tbar></Tbar>
                <div className='nav_class'>
                {
                    list.map((item,index)=>{
                        return(
                            <Link to={{pathname:`/classify/list/${index}`,state:this.state.list[index].contlist}} key={index} className='classify_list'>
                            <div>
                                {item.navlist}
                            </div>
                            </Link> 
                        )
                    })
                }
                </div>
                <Route path='/classify/list/:index' component={List}></Route>
            </div>
        );
    }
}

export default classify;