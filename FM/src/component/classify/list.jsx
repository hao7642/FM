import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom'
class list extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    isclick(item){
        this.props.history.push('/detali',item)
    }
    render() {
        let index = this.props.match.params.index
        let list = this.props.location.state
        return (
            <div className='list_content'>
                <div>
                    {
                        list.map((item, index) => {
                            return (
                                //  <NavLink to={{pathname='/detali',state:item}}>  </NavLink>
                                <div className='boxcont' key={index} onClick={()=>{
                                    this.isclick(item)
                                }}>
                                    <div className='pic'>
                                        <img src={item.pic} alt="" />
                                    </div>
                                    <div className='title_text'>

                                        <div className='text'>
                                            {item.name}
                                        </div>
                                        <div className='title'>
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                              
                                
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default list;