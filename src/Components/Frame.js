import React from 'react';
import {motion} from 'framer-motion/dist/es/index';


const animationConfiguration = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const doSomething = (deltaY) => {
	let h = window.innerHeight;
	// if (deltaY < 0) {
	// 	window.scrollBy({top:-window.innerHeight/100*95, left:0, behavior:'smooth'})
	// } else {
	// 	window.scrollBy({top:window.innerHeight/100*95, left:0, behavior:'smooth'})
	// }
	if (deltaY < 0) {
		window.scrollTo({top:window.pageYOffset-window.pageYOffset%h-h/100*95, left:0, behavior:'smooth'})
	} else {
		window.scrollTo({top:window.pageYOffset-window.pageYOffset%h+h/100*95, left:0, behavior:'smooth'})
	}
};

let ticking = false;

const handleWheel = ({deltaY}) => {
	// if (!ticking) {
	//   window.requestAnimationFrame(() => {
	// 	doSomething(deltaY);
	// 	ticking = false;
	//   });
	//   ticking = true;
	// }
	
};

const Frame = ({ children, style }) => {
	let defaultStyle = {width: window.innerWidth/100*90,
						margin: '0 auto',
						height: '100%',
						backgroundColor: 'green'};
	return (
		<div className='frame' style={{...defaultStyle, ...style}} onWheel={handleWheel}>
			<motion.div
				variants={animationConfiguration}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 1 }}
			>
				{children}
			</motion.div>
		</div>
	);
};


export default Frame;