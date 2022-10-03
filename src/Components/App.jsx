import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'


class App extends Component {
	render() {
		return (
			<Navbar isMobile={isMobile}/>
		)
	}
}

export default App