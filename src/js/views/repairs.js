import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Repairs = () => (
	<div>
		<div className="bodyweb">
			<br /> <br /> <br /> <br />
			<div className="webtags">
				<img className="picweb" src="https://i.ibb.co/6sVVtSW/3L9A1145.jpg" />
				<h1>Set-Up and Fret Level</h1>
				<br />
				<p>
					Full Set-Up includes: Inspection of instrument and electronics, Personalized recommendations for
					upgrades and improvements, Cleaning and oiling of fretboard, Tighten all hardware, Re-String, Adjust
					Truss Rod, Adjust Bridge height, Set intonation, Check and clean electronics.
				</p>
				<br />
				<p>
					{" "}
					Fret Level includes: Measuring and precision leveling of frets using the Erlewine Neck Jig, ReCrown
					fret tops, polish all frets.
				</p>{" "}
				<br />
				<h3>Pricing for Standard Guitars</h3>
				<p>
					{" "}
					Hardtails, Les Pauls, Teles, Strat style guitars, Acoustic and Classical Guitars, Bigsby Guitars, 7
					strings, 4 or 5 string basses, Acoustic Basses.
				</p>{" "}
				<br />
				<ul>Regular Set-up ---- $70</ul>
				<ul>With Fret Level ---- $150</ul>
				<br />
				<h3>Pricing for Other Guitars</h3>
				<p>
					{" "}
					Locking Tremolo Guitars (Floyd Rose), 12 String Guitars, 6 String Basses, Banjos, Jaguars and
					Jazzmasters.
					<br />
				</p>
				<ul>Full Set-Up ---- $80</ul>
				<ul>Set-Up with fret level ---- $160</ul>
				<br /> <br />
				<h1>Crack and Structural Repairs</h1> <br />
				<ul>
					<li>Seal crack up to 3” ---- $50-$100</li>
					No Finish <br /> <br />
					<li>Seal crack up to 6” ---- $100-$150</li>
					No Finish <br /> <br />
					<li>Repair Crack up to 3” ---- $150-200</li>
					With finish touch up Plus materials($10) Over 6” must quote. <br />
					<br />
					<li>Seal Cracked Bridge ---- $25-75</li> <br />
					<li>Headstock ReGlue ---- $200-250</li>
					No touch up, No Splines <br /> <br />
					<li>Headstock Reglue ---- $300-350</li>
					w/Spline reinforcements, No touchup W/touch up add $50-75 <br /> <br />
					<li>Reglue Loose brace ---- $50</li>
					$30 each additional brace. <br />
					<br />
				</ul>{" "}
				<br />
				<h1>Nuts</h1> <br />
				<p>
					<i>Different types of neck repairs from Nuts to Frets. For headstock crack see Crack Repair</i>
				</p>
				<ul>
					<li>Fender style bone nut ---- $90</li>
					Made from scratch. <br /> <br />
					<li>Gibson style bone nut ---- $95</li>
					Made from scratch. <br /> <br />
					<li>12 String bone nut ---- $150</li>
					Made from scratch. <br /> <br />
					<li>Install Synthetic Nut ---- $50</li>
					Plus cost of nut. <br /> <br />
					<li>Brass nut ---- $150</li>{" "}
				</ul>
				<br /> <br />
				<h1>Frets and Fingerboards</h1> <br />
				<ul>
					<li>Full Fret level and recrown ---- $100</li> <br />
					<li>Fret end File ---- $50</li> <br />
					<li>Fret level, recrown, fret ends ---- $125</li> <br />
					<li>ReCrown only ---- $40</li> <br />
					<li>Re-Seat fret ---- $15 a fret</li> <br />
					<li>Full Re Fret ---- $350</li>
					Unbound Maple or Rosewood neck. <br /> <br />
					<li>Re Fret Bound Neck ---- 450</li>{" "}
				</ul>
				<br />
				<br />
				<h4>
					If you don&apos;t see what you need, <Link to="/contact">contact me.</Link>{" "}
				</h4>
			</div>
			<br /> <br /> <br /> <br />
		</div>
	</div>
);
