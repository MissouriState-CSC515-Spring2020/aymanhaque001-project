import React from 'react';
import './App.css';
import Nav from './Nav';
import Summer from './Summer';
import Spring from './Spring';
import Fall from './Fall';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return ( 
        <Router >
        <div className = "App" >

        <Nav />
        <Switch>
        <Route path ="/" exact component= { Home } />
        <Route path = "/Spring" component = { Spring } /> 
        <Route path = "/Summer" component = { Summer } />  
        <Route path = "/Fall" component = { Fall } />
        </Switch>


        </div>

        </ Router >

    );
}

const Home =()=> (
    <div>
        <h1 className="header">Home Page</h1>

    </div>
);

export default App;