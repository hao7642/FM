import React, { Component } from 'react';
import Tbar from '../Tbar/tbar'
import {save_list} from '../../store/action/action'
import {connect} from 'react-redux'
class boutique extends Component {
       constructor(){
           super()
           this.state={

           }
       }
       componentDidMount(){
           this.props.booklist()
       }
    render() {
       let {getlist}=  this.props
        return (
            <div>
                <Tbar></Tbar>
                {
            getlist.map((item,index)=>{
              return(
                <div key={index} className='boxcont'>
                  <div className='pic'>
                    <img src={item.pic} alt=""/>
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
        );
    }
}

let Newboutique =connect(
    (state)=>{
        return{
            getlist:state.getlist
        }
    },
    (dispatch)=>{
        return{
            booklist:()=>{
                dispatch(save_list())
            }
        }
    }
)(boutique)
export default Newboutique;