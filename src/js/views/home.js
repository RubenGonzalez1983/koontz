import React from "react";
import "../../styles/home.css";
import { ContactUs } from "../component/contact";
import { RepairsHome } from "../component/repairshome";
import { Guitars } from "../component/guitars";

export const Home = () => (
	<div>
		<div className="body">
			<div className="logodiv">
				<br /> <br />
				<img className="homeimg" src="https://i.ibb.co/9y0cvK3/header-logo.png" />
				<br />
				<h1>Repair Services</h1>
				<RepairsHome />
				<Guitars />
				<ContactUs />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	</div>
);
