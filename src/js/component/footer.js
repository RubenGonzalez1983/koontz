import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center footcolor">
		<div>
			<div className="footerinfo">
				<div> ©2021 Koontz Kustom Guitars. Miami, FL. </div>
				<div className="footericons">
					{" "}
					<a href="https://www.instagram.com/koontzguitars/?hl=en">
						<i className="fab fa-instagram" />
					</a>{" "}
					<a href="https://koontzkustomguitars.bigcartel.com/">
						<i className="fas fa-shopping-cart" />{" "}
					</a>
				</div>
			</div>
		</div>
	</footer>
);
