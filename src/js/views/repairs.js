import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Repairs = () => (
	<div>
		<div className="bodyweb">
			<br /> <br /> <br /> <br />
			<div className="webtags">
				<img className="picweb" src="https://i.ibb.co/6sVVtSW/3L9A1145.jpg" />
				<h1 className="underline">Set-Up and Fret Level</h1>
				<br />
				<p>
					Full Set-Up includes: Inspection of instrument and electronics, personalized recommendations for
					upgrades and improvements, cleaning and oiling of fretboard, tighten all hardware, restring, adjust
					truss rod, adjust bridge height, set intonation, check and clean electronics.
				</p>
				<br />
				<p>
					{" "}
					Fret Level includes: measuring and precision leveling of frets using the Erlewine Neck Jig, recrown
					fret tops, polish all frets.
				</p>{" "}
				<br />
				<h3>Pricing for Standard Guitars</h3>
				<p>
					{" "}
					Hardtails, Les Pauls, Teles, Strat style guitars, acoustic and classical Guitars, Bigsby Guitars, 7
					strings, 4 or 5 string basses, acoustic basses.
				</p>{" "}
				<br />
				<ul>Regular Set-up ---- $70</ul>
				<ul>With Fret Level ---- $150</ul>
				<br />
				<h3>Pricing for Other Guitars</h3>
				<p>
					{" "}
					Locking tremolo guitars (Floyd Rose), 12 string guitars, 6 string basses, banjos, Jaguars and
					Jazzmasters.
					<br />
				</p>
				<ul>Full set-up ---- $80</ul>
				<ul>Set-up with fret level ---- $160</ul>
				<br /> <br />
				<h1 className="underline">Crack and Structural Repairs</h1> <br />
				<ul>
					<li>Seal crack up to 3” ---- $50-$100</li>
					No Finish <br /> <br />
					<li>Seal crack up to 6” ---- $100-$150</li>
					No Finish <br /> <br />
					<li>Repair Crack up to 3” ---- $150-200</li>
					With finish touch up plus materials($10) Over 6” must quote. <br />
					<br />
					<li>Seal Cracked bridge ---- $25-75</li> <br />
					<li>Headstock reglue ---- $200-250</li>
					No touch up, no splines <br /> <br />
					<li>Headstock Reglue ---- $300-350</li>
					w/spline reinforcements, no touchup w/touch up add $50-75 <br /> <br />
					<li>Reglue loose brace ---- $50</li>
					$30 each additional brace. <br />
					<br />
				</ul>{" "}
				<br />
				<h1 className="underline">Nuts</h1> <br />
				<p>
					<i>Different types of neck repairs from nuts to frets. For headstock crack see crack repair</i>
				</p>
				<ul>
					<li>Fender style bone nut ---- $90</li>
					Made from scratch. <br /> <br />
					<li>Gibson style bone nut ---- $95</li>
					Made from scratch. <br /> <br />
					<li>12 String bone nut ---- $150</li>
					Made from scratch. <br /> <br />
					<li>Install synthetic nut ---- $50</li>
					Plus cost of nut. <br /> <br />
					<li>Brass nut ---- $150</li>{" "}
				</ul>
				<br /> <br />
				<h1 className="underline">Frets and Fingerboards</h1> <br />
				<ul>
					<li>Full Fret level and recrown ---- $100</li> <br />
					<li>Fret end file ---- $50</li> <br />
					<li>Fret level, recrown, fret ends ---- $125</li> <br />
					<li>Recrown only ---- $40</li> <br />
					<li>Reseat fret ---- $15 a fret</li> <br />
					<li>Full refret ---- $350</li>
					Unbound maple or rosewood neck. <br /> <br />
					<li>Refret bound neck ---- 450</li>{" "}
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
