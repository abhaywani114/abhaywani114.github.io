import React from "react"
import Mail_Icon from "../images/mail.png"
export default function Info() {
	return (
		<div className="info-main-div">
			<h1>Abrar Ajaz Wani</h1>
			<h3>Computer Science Engineer</h3>
			<h4>abhaywani114.github.io</h4>
			<a href="mailto:abhaywani114@gmail.com" target="_blank">
				<button className="info-mail-btn"><img src={Mail_Icon}/><span>Email</span></button>
			</a>
		</div>
	);
}
