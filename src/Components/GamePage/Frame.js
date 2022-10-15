import React from 'react';
import {motion} from 'framer-motion/dist/es/index';


const animationConfiguration = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const Frame = ({ children, style }) => {
	let defaultStyle = {width: '90vw',
						margin: '0 auto',
						height: '100%',};
	return (
		<div className='frame' style={{...defaultStyle, ...style}}>
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