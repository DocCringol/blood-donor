import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
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
							<div>
								<img className={"toggleMenu " + (this.state.menuVisible ? "Visible" : "Invisible")}
								onClick={this.toggleMenu}></img>
							</div>
						: null}
						{this.state.isMobile ? this.onClick = this.toggleMenu : this.onClick = null}
						<Link to="/#counter" id="home" onClick={this.onClick}><p>Главная</p></Link>
						<Link to="/#mem" id="mem" onClick={this.onClick}><p>Памятки донора</p></Link>
						<Link to="/#recomendations" id="recomendations" onClick={this.onClick}><p>Рекомендации</p></Link>
						<Link to="/#contact_us" id="contact_us" onClick={this.onClick}><p>Напишите нам</p></Link>
						<Link to="/test" id="test" onClick={this.onClick}><p>Тест</p></Link>
					</nav>
					<Footer></Footer>
				</Router>
			</>
		)
	}
}


export default Navbar