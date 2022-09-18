import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './Components/hovermenu.css'
import Home from './Components/Home';
import Test from './Components/Test';
import {AnimatePresence} from 'framer-motion/dist/framer-motion'


const Animated = () => {
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

class App extends Component {
	render() {
		return (
			<div class="container">
				<>
					<Router>
						<Animated />
						<nav id="mySidenav" class="sidenav">
							<Link to="/" id="home">Home</Link>
							<Link to="/test" id="test">Test</Link>
						</nav>
					</Router>
				</>
			</div>
		)
	}
}


export default App