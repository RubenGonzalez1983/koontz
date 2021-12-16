import React from "react";
import "../../styles/home.css";
import { ContactUs } from "../component/contact";
import { RepairsHome } from "../component/repairshome";
import { Guitars } from "../component/guitars";
import { Link } from "react-router-dom";
import { Featured } from "../component/featured";
import YoutubeEmbed from "../component/YoutubeEmbed";

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
				<Link className="button-link-home" to="/repairs">
					<button className="button"> Repairs</button>
				</Link>
				<Link className="button-link-home" to="/kustom">
					<button className="button">Custom Guitars</button>
				</Link>
				<Link className="button-link-home" to="/contact">
					<button className="button">Contact</button>
				</Link>
			</div>
		</div>
		<RepairsHome />
		<h1 className="headerhome">Featured guitars for sale</h1>
		<div className="borderbottom" />
		<Guitars />
		<h1 className="headerhome">Featured guitars I&apos;ve built by request</h1>
		<div className="borderbottom" />
		<Featured />
		<h1 className="headerhome">
			Or if you want to get weird check out the Guiterror. An all analog wooden sound machine. See below.
		</h1>{" "}
		<br /> <br />
		<YoutubeEmbed embedId="KFKSyuuF-pc" />
		<div className="borderbottom" /> <br />
		<br />
		<ContactUs />
		<br />
		<br />
		<br />
	</div>
);
