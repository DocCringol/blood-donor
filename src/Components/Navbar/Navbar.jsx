import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import Home from '../HomePage/Home';
import Test from '../TestPage/Test';
import Footer from '../Footer/Footer';
import './Navbar.css'
import './NavbarMobile.css'


const AnimatedRouter = () => {
	const location = useLocation();
	return (
			<AnimatePresence exitBeforeEnter >
					<Routes location={location} 
							key={location.pathname}>
							<Route path='/' element={<Home/>} />
							<Route path='/test' element={<Test/>} />
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
	onClick;
	render() {
		return (
			<>
				<Router>
					<AnimatedRouter />
					<div className={"bg-blur " + (this.state.menuVisible ? "Visible" : "Invisible")}></div>
					<nav className={"navbar" + (this.state.isMobile ? "Mobile" : "") +" "+
						(this.state.menuVisible ? "menuVisible" : "")
						}>
						{this.state.isMobile ? 
							// this.state.menuVisible ? <img src='multiply.png' onClick={this.toggleMenu} className="toggleMenu"></img> 
							// : <img src='menu.png' onClick={this.toggleMenu} className="toggleMenu"></img>
							<img className={"toggleMenu " + (this.state.menuVisible ? "Visible" : "Invisible")}
							onClick={this.toggleMenu}></img>
						: null}
						{this.state.isMobile ? this.onClick = this.toggleMenu : this.onClick = null}
						<Link to="/" id="home" onClick={this.onClick}>Главная</Link>
						<Link to="/game" id="game" onClick={this.onClick}>Игра</Link>
						<Link to="/test" id="test" onClick={this.onClick}>Тест</Link>
					</nav>
					<Footer></Footer>
				</Router>
			</>
		)
	}
}


export default Navbar