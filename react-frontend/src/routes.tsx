import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Cadastro" exact component={Cadastro} />
        </Switch>
    );
}
 
export default Routes;