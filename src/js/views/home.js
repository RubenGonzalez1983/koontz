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
		<h2 className="headerhome">Guitar repair services and custom-made instruments in Miami, FL.</h2>
		<br />
		<div className="buttonshm">
			<div className="btn-group">
				<button className="button">
					{" "}
					<Link className="button-link-home" to="/repairs">
						Repairs
					</Link>
				</button>
				<button className="button">
					<Link className="button-link-home" to="/kustom">
						Buy Guitars
					</Link>
				</button>
			</div>
		</div>
		<RepairsHome />
		<h1 className="headerhome">Featured Guitars</h1>
		<Guitars />
		<ContactUs />
		<br />
		<br />
		<br />
		<br />
		<br />
	</div>
);
