import React, { Component } from 'react';
import Card from '../Components/Card'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        
        return (
            <div className="home">
                <Link to="/products" ><Card name="Barclays Premier League" imgLink="Premier-League"/></Link>
                <Card name="Ligue 1" imgLink="Ligue-1"/>
                <Card name="Serie A" imgLink="Serie-A"/>
            </div>
        );
    }
}