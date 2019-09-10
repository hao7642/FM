import React, { Component } from 'react';
import Router from '../Router/router'
import 'antd-mobile/dist/antd-mobile.css'
import '../mock/mock'
import './app.css'
class App extends Component {
       constructor(){
           super()
           this.state={

           }
       }
    render() {
        return (
            <>
             <Router></Router>
            </>
        );
    }
}

export default App;