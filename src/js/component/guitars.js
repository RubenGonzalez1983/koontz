import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Guitars = () => (
	<div>
		<div>
			<br /> <br /> <br />
			<div className="kustom">
				<div className="guitars">
					<img className="kustomgtr" src="https://i.ibb.co/bF83PHd/tropic-thunder.jpg" />

					<div className="middle">
						<div className="text">
							<h3>Tropic Thunder</h3>
							<br />
							Mahogany Body
							<br />
							25.5 Scale Mahogany neck
							<br />
							Benson Custom P90s
							<br />
							Inca Silver and Mirror Pickguard
							<br />
							$1,400
							<br />
							<a
								href="https://koontzkustomguitars.bigcartel.com/product/the-tropic-thunder"
								target="_blank"
								rel="noopener noreferrer">
								Buy
							</a>
						</div>
					</div>
				</div>

				<div className="guitars">
					<img className="kustomgtr" src="https://i.ibb.co/fDDQs43/the-dag.jpg" />

					<div className="middle">
						<div className="text">
							<h3>The Dag</h3>
							<br />
							Mahogany Body
							<br />
							24.75&quot; Scale Neck
							<br />
							Wilde Bill L500 Humbuckers
							<br />
							Natural Walnut Stain
							<br />
							$1,500
							<br />
							<a
								href="https://koontzkustomguitars.bigcartel.com/product/the-dag"
								target="_blank"
								rel="noopener noreferrer">
								Buy
							</a>
						</div>
					</div>
				</div>

				<div className="guitars">
					<img className="kustomgtr" src="https://i.ibb.co/wYgWqrQ/the-strummer.jpg" />

					<div className="middle">
						<div className="text">
							<h3>The Strummer Electric Parlor Guitar</h3>
							<br />
							Mahogany Chambered Hollow Body <br />
							Carved Mahogany cap
							<br />
							24&quot; Scale Neck with Slotted Headstock
							<br />
							CC Blade Pickups by Pete Biltoft <br /> Vintage Vibe Pickups
							<br />
							Black and Natural Mahogany
							<br />
							$2,100
							<br />
							<a
								href="https://koontzkustomguitars.bigcartel.com/product/the-strummer"
								target="_blank"
								rel="noopener noreferrer">
								Buy
							</a>
						</div>
					</div>
				</div>

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
