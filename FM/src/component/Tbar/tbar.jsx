import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Tbar extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    'id': 1,
                    'name': '我的',
                    'path': '/home'
                }, {
                    'id': 2,
                    'name': '热门',
                    'path': '/common'
                }, {
                    'id': 3,
                    'name': '分类',
                    'path': '/classify'
                }, {
                    'id': 4,
                    'name': '精品',
                    'path': '/boutique'
                },
            ]
        }
    }
    render() {
        let {list} =this.state
        return (
            <div className='header'>
                <div className='Tbar'>
                    <div className='Tbar-left'>
                        <i className='glyphicone glyphicon glyphicon-headphones'></i><span>想听FM</span>
                    </div>
                    <div className='Tbar-right'>
                        <i className='glyphicons glyphicon glyphicon-search '></i>  <input type="text" placeholder='抖音' />
                    </div>
                </div>
                <div className='jump'>
                    {
                        list.map((item,index)=>{
                            return(
                                <NavLink key={index} to={item.path} className='list'>
                                    <div>
                                    {item.name}
                                </div>
                                </NavLink>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Tbar;