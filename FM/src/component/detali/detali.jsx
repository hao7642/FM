import React, { Component } from 'react';
import {connect} from 'react-redux'
import {rest_shou} from '../../store/action/action'
class detali extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        let {shoucang} =this.props
        let item = this.props.location.state
        console.log(item)
        return (
            <div>
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
                <div className='but'>
                    <button onClick={()=>{
                        localStorage.getItem(shoucang(item,this))
                    }}>收藏</button>
                </div>
            </div>
        );
    }
}
let Newdetali= connect(
    (state)=>{
        return{

        }
    },
    (dispatch)=>{
        return{
            shoucang:(data,that)=>{
                dispatch(rest_shou(data))
                console.log(data,'HL')
                that.props.history.push('/home')
            }
        }
    }
)(detali)
export default Newdetali;