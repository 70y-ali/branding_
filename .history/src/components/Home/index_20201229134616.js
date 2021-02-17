import React, { Component } from "react";
import background from '../../../public/assets/background1.png'
class Main extends Component {
    render() {
        return (
            <div>
                <img src={{background}}></img>
                <h1>Simple SPA</h1>
                <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/stuff">Stuff</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="content">
                    
                </div>
            </div>
        )
    }
}

export default Main