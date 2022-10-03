import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import Home from '../Home/Home';
import './Navbar.css'
import './NavbarMobile.css'
import { Button } from 'react-bootstrap';


const AnimatedRouter = () => {
	const location = useLocation();
	return (
			<AnimatePresence exitBeforeEnter >
					<Routes location={location} 
							key={location.pathname}>
							<Route path='/' element={<Home/>} />
					</Routes>
			</AnimatePresence>
	)
}


class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuVisible: false,
			isMobile: this.props.isMobile,
		}
	}
	toggleMenu = () => {
		this.setState({menuVisible: !this.state.menuVisible})
	}
	render() {
		return (
			<>
				<Router>
					<AnimatedRouter />
					<nav className={"navbar" + (this.state.isMobile ? "Mobile" : "") +" "+
						(this.state.menuVisible ? "menuVisible" : "")
						}>
						{this.state.isMobile ? 
							<button onClick={this.toggleMenu} className="toggleMenu">!</button>
						: null}
						<Link to="/" id="home">Главная</Link>
						<Link to="/game" id="game">Игра</Link>
					</nav>
				</Router>
			</>
		)
	}
}


export default Navbar