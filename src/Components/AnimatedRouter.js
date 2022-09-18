import React from 'react'
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Test from './Pages/Test';


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


export default AnimatedRouter