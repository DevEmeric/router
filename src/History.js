import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class History extends Component {
    render() {
        return(
            <div>
                <NavLink to="/" ><p>Voici l'accueil</p></NavLink>
                <NavLink to="/notre-histoire" activeStyle={{ color: 'red' }}><p>Notre histoire</p></NavLink>
            </div>
        )
    }
}

export default History