import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/home.css";

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm("service_9gyr8mr", "template_fhrii5l", e.target, "user_xEbved8R2ctCBnhDEdffV").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
		e.target.reset();
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<header className="center">Get in touch!</header>

			<form id="form" className="topBefore">
				<input type="text" name="name" placeholder="NAME" />
				<input type="email" name="email" placeholder="E-MAIL" />
				<textarea name="message" placeholder="MESSAGE" />
				<input id="submit" type="submit" value="GO!" />
			</form>
			<header className="center">
				E-mail me directly at:
				<br /> koontzkustoms@gmail.com
				<br /> Follow me on instagram: @koontzguitars
				<br /> Buy my guitars here.
				<br />
				<br />
			</header>
		</form>
	);
};
