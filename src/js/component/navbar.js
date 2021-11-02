import React, { useState } from "react";
import { Link } from "react-router-dom";
var menu = [
	{
		title: "Home",
		link: "/"
	},
	{
		title: "Repair Services",
		link: "/repairs"
	},
	{
		title: "Guitars",
		link: "/kustom"
	},
	{
		title: "About",
		link: "/about"
	},
	{
		title: "Contact",
		link: "/contact"
	}
];
export const Navbar = () => {
	const [showmenu, setShowmenu] = useState();
	const [selectedIndex, setSelectedIndex] = useState();
	return (
		<nav className="navbarkoontz navbar-expand-lg nav-fixed navbar-light nav">
			<button
				onClick={() => (showmenu == " " ? setShowmenu("show") : setShowmenu(" "))}
				className="navbar-toggler navcolor"
				type="button"
				data-bs-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="link">
				<img className="navlogo" src="https://i.ibb.co/ypTrQHH/koontzlogoflatnav.jpg" />
			</div>

			<div className={"collapse navbar-collapse  " + showmenu} id="navbarTogglerDemo03">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0 navright nav">
					{menu.map((item, index) => {
						return (
							<li key={index} className="navbarfont" onClick={() => setSelectedIndex(index)}>
								<Link
									className={`nav-link hover link ${selectedIndex == index ? "active" : ""}`}
									to={item.link}>
									{item.title}
								</Link>
							</li>
						);
					})}

					{/* <li className="nav-item">
						<a className="nav-link hover link" href="tel:305-343-3807">
							305-343-3807
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};
