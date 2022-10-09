import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'
import Navbar from './Navbar/Navbar'


class App extends Component {
	render() {
		return (
			<Navbar isMobile={isMobile}/>
		)
	}
}

export default App