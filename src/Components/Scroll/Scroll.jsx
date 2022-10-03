import { useState, useEffect } from 'react'

// ```Write function handling scroll event```

// class Scroll extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = {
// 	  scroll: 0,
// 	};
//   }

//   componentDidMount() {
// 	window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
// 	window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
// 	this.setState({ scroll: window.scrollY });
//   };

//   render() {
// 	return (
// 	  <div>
// 		<p>Scroll: {this.state.scroll}</p>
// 	  </div>
// 	);
//   }
// }

function getScroll() {
	const { scrollY: scroll } = window;
	return {
		scroll
	};
}

function useScroll() {
	const [scroll, setScroll] = useState(getScroll());
	
	useEffect(() => {
		function handleScroll() {
			setScroll(getScroll());
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return scroll;
}

export default useScroll;