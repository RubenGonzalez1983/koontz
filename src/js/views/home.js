import React from "react";
import "../../styles/home.css";
import { ContactUs } from "../component/contact";
import { RepairsHome } from "../component/repairshome";
import { Guitars } from "../component/guitars";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="body">
		<div className="logodiv">
			<br /> <br />
			<img className="homeimg" src="https://i.ibb.co/9y0cvK3/header-logo.png" />
		</div>
		<br />
		<h1>Repair Services</h1>
		<RepairsHome />
		<Guitars />
		<h4>If you don&apos;t see what you need: </h4>
		<ContactUs />
		<br />
		<br />
		<br />
		<br />
		<br />
	</div>
);
