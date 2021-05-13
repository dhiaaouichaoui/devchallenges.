import React from 'react';
import {Route,NavLink,Router} from 'react-router-dom';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './All'
import Active from './Active'
import Completed from './Complet'
import './App.css';

// const Tab = createBottomTabNavigator();

function Navigation() {

    return (
        <nav className='nav'>
            <ul className="list">
                <li className="link">
                    <NavLink to='/All' activeClassName='all'>All</NavLink>
                </li>
                <li className="link">
                    <NavLink to='/active' activeClassName='active'>Active</NavLink>
                </li>  
                <li className="link">
                    <NavLink to='/completed' activeClassName='completed'>Completed</NavLink>
                </li> 
            </ul>
        </nav>
        
    )
}

export default Navigation;