import React from "react";
import {Link} from "react-router-dom";
import './Footer.css';


const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="presentation"><a href="./presentation.pdf" download={'presentation.pdf'}>Презентация проекта</a></div>
				<div className="rezume">
					<div className="rezume-head">Резюме:</div>
					<div className="rezume-mark"><a href="https://disk.yandex.ru/d/DhSlyW3edlU_Uw">Марк (Лидер)</a></div>
					<div className="rezume-ilya"><a href="https://disk.yandex.ru/d/1miz_9u24GEm_Q">Илья (Участник)</a></div>
				</div>
				<div className="contact">
					<div className="contact-head">Контактная информация:</div>
					<div className="contact-mark">Коваленко Марк Алексеевич</div>
					<div className="mark-phone">
						<a href={'tel:+7(983)-311-28-74'}>Телефон: +7(983)-311-28-74</a>
					</div>
					<div className="mark-mail">
						<a href={'mailto:kovalenko.fa@mail.ru'}>Почта: kovalenko.fa@mail.ru</a>
					</div>
				</div>
				<div className="developer">
					<div className="developer-head">Разработчик сайта (телеграм)</div>
					<a className="developer-tg" href={'https://t.me/elyd_t'}>@elyd_t</a>
				</div>
			</div>
		</>
	);
};

export default Footer;