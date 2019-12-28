import React from 'react';
//import $ from 'jquery';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
//import { Carousel, Modal,Button, Panel,Image,Row,Col } from 'react-bootstrap';
import Header from './components/Header'

//import Home from './components/Home';
import Footer from './components/Footer';

import routes from './routes';
import {Switch, Route, BrowserRouter} from 'react-router-dom';



class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div className="">
                    <Header />
                    {this.showContentMenu(routes)}
                    <Footer />
                </div>
            </BrowserRouter>
            
        );
    }

    showContentMenu = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return(
                <Route 
                    key={index} 
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
                )
            } )
        }
    return <Switch>{result}</Switch>;
    }

}

export default App;
