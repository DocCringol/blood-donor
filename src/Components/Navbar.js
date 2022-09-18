import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import AnimatedRouter from "./AnimatedRouter";
import './Navbar.css'

const Navbar = () => {
	return (
		<>
			<Router>
				<AnimatedRouter />
				<nav id="mySidenav" className="sidenav">
					<Link to="/" id="home">Home</Link>
					<Link to="/game" id="game">Game</Link>
				</nav>
			</Router>
		</>
	)
}


export default Navbar