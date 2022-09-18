import React, { Component } from 'react'
import './Components/hovermenu.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Test from './Components/Test';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'


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
			<div className="container">
				<>
					<Router>
						<Animated />
					</Router>
				</>
				<div id="mySidenav" class="sidenav">
					<a href="/" id="about">Home</a>
					<a href="/test" id="blog">Test</a>
					<a href="#" id="projects">Projects</a>
					<a href="#" id="contact">Contact</a>
				</div>
			</div>
		)
	}
}

export default App