import React from 'react';
import './MainLayout.css';
import AppNavBar from './AppNavbar';
import SideBar from './Sidebar';
import Home from './Home';
import Footer from './Footer';
import { sidemenus} from './routing';
import { Route, Switch} from 'react-router-dom';
import Counter from './Counter';
import List from './List';
import Todo from './Todo';
import Erorr404 from './Error404'

const MainLayout = () => {
    return (
        <div className="container">
            <AppNavBar />
            <SideBar menus ={sidemenus}/>
            <Footer/>
            <div className="main-content">
                <Switch>
           
                <Route path= "/" component={Home} exact/>
                <Route path= "/counter" component={Counter} exact/>
                <Route path= "/list" component={List} exact/>
                <Route path= "/todo" component={Todo} exact/>
                <Route component={Erorr404}/>
                </Switch>
            </div>
        </div>

    )
}

export default MainLayout;