import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../page/Home';
import Signup from '../page/Signup';
import Login from '../page/Login';
import Landing from '../page/Landing';
import NotFound from '../page/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" element={<Landing/>}/>
              <Route path="/home" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="*" element={<NotFound/>}/>
        </Switch>
    );
};

export default Routes;
