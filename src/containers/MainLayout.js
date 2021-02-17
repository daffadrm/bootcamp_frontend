import React from 'react';
import './MainLayout.css';
import AppNavBar from './AppNavbar';
import SideBar from './Sidebar';
import Home from '../pages/home/Home';
import Footer from './Footer';
import { sidemenus} from '../data/routing';
import { Route, Switch} from 'react-router-dom';
import Counter from '../components/Counter';
// import List from '../pages/list/List';
import Todo from '../pages/todo/Todo';
import Erorr404 from '../pages/Error404';
import MovieList from './movies/Movies'
import RatingList from './rating/RatingList';
import { Search } from 'react-icons-kit/fa';
// import getGenreDesc from './api/apiClient';
import StudentList from './student/StudentList'

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
                <Route path= "/movies" component={MovieList} exact/>
                <Route path= "/rating" component={RatingList} exact/>
                <Route path= "/todo" component={Todo}exact/>
                <Route path= "/search" component={Search}exact/>
                <Route path= "/student" component={StudentList}exact/>
                <Route component={Erorr404}/>
                </Switch>
            </div>
        </div>

    )
}

export default MainLayout;