import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Home extends Component {
    render() {
        return(
            <div>
                <NavLink to="/notre-histoire"><p>Notre histoire</p></NavLink>
                <NavLink to="/" activeClassName="selected"><p>Voici l'accueil</p></NavLink>
            </div>
        )
    }
}

export default Home