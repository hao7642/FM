import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from '../component/home/home'
import Detali from '../component/detali/detali'
import Common from '../component/common/common';
import Boutique from '../component/boutique/boutique';
import Classify from '../component/classify/classify';
class Router extends Component {
       constructor(){
           super()
           this.state={}
       }
    render() {
        return (
            <>
             <Switch>
                 <Route path='/home' component={Home}></Route>
                 <Route path='/common' component={Common}></Route>
                 <Route path='/boutique' component={Boutique}></Route>
                 <Route path='/classify' component={Classify}></Route>
                 <Route path='/detali' component={Detali}></Route>
                 <Redirect to='/home'></Redirect>
             </Switch>
            </>
        );
    }
}

export default Router;