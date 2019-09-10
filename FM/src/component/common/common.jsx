import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {save_list} from '../../store/action/action'
import {connect} from 'react-redux'
import Tbar from '../Tbar/tbar'
class common extends Component {
 
          state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            lists:[
                {
                    id:1,
                    name:'小说',
                    icon:'glyphicon glyphicon-tasks'
                },
                {
                    id:2,
                    name:'情感',
                    icon:'glyphicon glyphicon-heart'
                },
                {
                    id:3,
                    name:'财经',
                    icon:'glyphicon glyphicon-stats'
                },
                {
                    id:4,
                    name:'相声',
                    icon:'glyphicon glyphicon-user'
                },
                {
                    id:5,
                    name:'儿童',
                    icon:'glyphicon glyphicon-globe'
                },
            ]
        }
          
          componentDidMount() {
            this.props.getlists()
            // simulate img loading
            setTimeout(() => {
              this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
              });
            }, 100);
       }
    render() {
        let {lists} =this.state
        let {getlist} =this.props
        return (
            <div>
                <Tbar></Tbar>
                <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <div className='icont_text'>
          {
              lists.map((item,index)=>{
                  return(
                      <div className='icont' key={index}>
                          <i className={item.icon}></i>
                          <span className='text'>
                              {item.name}
                          </span>
                      </div>
                  )
              })
          }
      </div>
      <div>
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
            </div>
        );
    }
}
let Newcommon = connect(
  (state)=>{
    return{
      getlist:state.getlist
    }
  },
  (dispatch)=>{
return{
getlists:()=>{
  dispatch(save_list())
}
}
  }
)( common)

export default Newcommon