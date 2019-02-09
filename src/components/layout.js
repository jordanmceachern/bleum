import React, { Component } from 'react'
import './layout.css'
import logo from './logo.png'

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
    let logoPlaceHolder = "bleum"
    if(this.state.logoLoaded){logoPlaceHolder = <img src={logo} alt="brand logo"/>}

    return (
        <nav>
            <div id="hamburger" onClick={this.toggleHandler}>
                <hr />
                <hr />
                <hr />
            </div>
            <a href="#home" id="band" to="/">{logoPlaceHolder}</Link>
            <Link className="heading mobile hideThis" to="/aboutme">about us</Link>
            <Link className="heading mobile hideThis" to="/photos">shows</Link>
            <Link className="heading mobile hideThis" to="/videos">music</Link>
            <Link className="heading mobile hideThis" to="/contact">contact</Link>
        </nav>
        )
    }
}

export default Layout