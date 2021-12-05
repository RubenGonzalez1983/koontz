import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Guitars = () => (
	<div>
		<div>
			<br /> <br /> <br />
			<div className="kustom">
				<div className="guitars">
					<img className="kustomgtr" src="https://i.ibb.co/f1wKW2q/the-maverick.jpg" />

					<div className="middle">
						<div className="text">
							<h3>The Maverick-Jon Nuñez Model</h3>
							<br />
							Mahogany Body <br />
							Robot Graves Aluminum Neck <br />
							Wilde Bill L500L Pickup
							<br />
							Master OMV Bridge and Tremolo
							<br />
							Natural Walnut
							<br />
							$3,200
							<br />
							<a
								href="https://koontzkustomguitars.bigcartel.com/product/the-maverick"
								target="_blank"
								rel="noopener noreferrer">
								Buy
							</a>
						</div>
					</div>
				</div>

				<div className="guitars">
					<img className="kustomgtr" src="https://i.ibb.co/Zc2d2zJ/the-maverick-bass.jpg" />

					<div className="middle">
						<div className="text">
							<h3>The Maverick Bass</h3>
							<br />
							Mahogany Body
							<br />
							32&quot; scale Maple neck
							<br />
							Benson Custom Pickups
							<br />
							Surf Green
							<br />
							$1,900
							<br />
							<a
								href="https://koontzkustomguitars.bigcartel.com/product/the-mav"
								target="_blank"
								rel="noopener noreferrer">
								Buy
							</a>
						</div>
					</div>
				</div>

				<div className="guitars">
					<img className="kustomgtr" src="https://i.ibb.co/dDMBFz6/aaa-kust.jpg" />

					<div className="middle">
						<div className="text">
							<h3>The AAA</h3>
							<br />
							Mahogany Body
							<br />
							25&quot; scale Maple Neck
							<br />
							Wild Bill Lawrence L500 humbuckers
							<br />
							<Link to="/contact" target="_blank" rel="noopener noreferrer">
								Contact me for more info
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
