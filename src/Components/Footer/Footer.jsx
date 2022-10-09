import React from "react";
import './Footer.css';


const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footerContent">
					<div className="footerContentItem">
						<div className="footerContentItemTitle">О нас</div>
						<div className="footerContentItemText">Контакты</div>
						<div className="footerContentItemText">О проекте</div>
					</div>
					<div className="footerContentItem">
						<div className="footerContentItemTitle">Помощь</div>
						<div className="footerContentItemText">Как играть</div>
						<div className="footerContentItemText">Правила</div>
					</div>
					<div className="footerContentItem">
						<div className="footerContentItemTitle">Соц. сети</div>
						<div className="footerContentItemText">Вконтакте</div>
						<div className="footerContentItemText">Facebook</div>
						<div className="footerContentItemText">Instagram</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;