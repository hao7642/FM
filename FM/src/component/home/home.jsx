import React, { Component } from 'react';
import Tbar from '../Tbar/tbar'
import { connect } from 'react-redux'
class home extends Component {
    constructor() {
        super()
        this.state = {
           
        }
    }
    render() {
        let { addlist } = this.props
        console.log(addlist)
        return (
            <div className='home'>
                <Tbar></Tbar>
                <div className='home_list'>
                    <div className='name'>
                        <div className='img'>
                            <img src="https://s3m.nzwgs.com/galileo/768551-5fe410ca18b575f91c259cbe7ba67be8.gif" alt="" />
                        </div>
                        <div className='leap'>
                            李逍遥（来自仙剑）
                        </div>
                        <div>
                            我的账户  >
                        </div>
                    </div>
                    <div className='name1'>
                        <div className='leap'>
                            我的已购
                        </div>
                        <div>
                            >
                        </div>
                    </div>
                    <div className='name1'>
                        <div className='leap'>
                            我的收藏
                         <div>
                             
                                    {
                                        addlist.map((items, index) => {
                                            return (
                                                <div>
                                                    <div className='pic'>
                                                        <img src={items.pic} alt="" />
                                                    </div>
                                                    <div className='title_text'>

                                                        <div className='text'>
                                                            {items.name}
                                                        </div>
                                                        <div className='title'>
                                                            {items.title}
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                               
                            </div>
                        </div>
                        <div>
                            >
                        </div>
                    </div>
                    <div className='name1'>
                        <div className='leap'>
                            下载
                        </div>
                        <div>
                            >
                        </div>
                    </div>
                    <div className='name1'>
                        <div className='leap'>
                            最近收听
                        </div>
                        <div>
                            >
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
let Newhome = connect(
    (state) => {
        return {
            addlist: state.addlist,
        }
    },
    (dispatch) => {
        return {

        }
    }
)(home)

export default Newhome;