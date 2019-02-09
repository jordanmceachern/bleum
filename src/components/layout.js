import React, { Component } from 'react'
import { Link } from 'gatsby'
import './layout.css'
import facebook from './facebook.png'
import logo from './logo.jpg'

class Layout extends Component {
state = {
    logoLoaded: false
}

componentDidMount(){
    const img = new Image()
    img.src = logo
    img.onload = () => {this.setState({logoLoaded: true})}
}

toggleHandler = () => {
    const navhtml = document.getElementsByClassName("mobile")
    const navArr = Array.from(navhtml)
    navArr.forEach(element => element.classList.toggle("hideThis"))
}
    
render(){
    let logoPlaceHolder = "William McQuinn"
    if(this.state.logoLoaded){logoPlaceHolder = <img src={logo} alt="brand logo"/>}

    return (
        <nav>
            <div id="hamburger" onClick={this.toggleHandler}>
                <hr />
                <hr />
                <hr />
            </div>
            <Link id="home" to="/">{logoPlaceHolder}</Link>
            <Link className="heading mobile hideThis" to="/aboutme">about me</Link>
            <Link className="heading mobile hideThis" to="/photos">stills</Link>
            <Link className="heading mobile hideThis" to="/videos">videos</Link>
            <Link className="heading mobile hideThis" to="/contact">contact</Link>
            <div id="facebook" className="heading mobile hideThis" onClick={this.toggleHandler}>
                <a 
                    href="https://www.facebook.com/williammcquinn7" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <img id="fb" src={facebook} alt="link to facebook"/>facebook page
                </a>
            </div>
        </nav>
        )
    }
}

export default Layout