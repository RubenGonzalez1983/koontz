import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const RepairsHome = () => (
	<div>
		<div className="bodyweb">
			<br /> <br />
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
					Hardtails, Les Pauls, Teles, Strat style guitars, acoustic and classical Guitars, Bigsby Guitars, 7
					strings, 4 or 5 string basses, acoustic basses.
				</p>
				<br />
				<ul className="article">
					<span className="item">Regular Set-up</span> <span className="dots" />
					<span className="price">$70</span>
				</ul>
				<ul className="article">
					<span className="item">With Fret Level</span>
					<span className="dots" />
					<span className="price">$150</span>
				</ul>
				<br />
				<h3>Pricing for Other Guitars</h3>
				<p>
					Locking tremolo guitars (Floyd Rose), 12 string guitars, 6 string basses, banjos, Jaguars and
					Jazzmasters.
					<br />
				</p>
				<ul className="article">
					<span className="item">Full set-up</span>
					<span className="dots" />
					<span className="price">$80</span>
				</ul>
				<ul className="article">
					<span className="item">Set-up with fret level</span>
					<span className="dots" /> <span className="price">$160</span>
				</ul>
				<br /> <br />
				<h1 className="underline">Crack and Structural Repairs</h1> <br />
				<ul>
					<li className="article">
						<span className="item">Seal crack up to 3”</span>
						<span className="dots" /> <span className="price">$50-$100</span>
					</li>
					No Finish. <br /> <br />
					<li className="article">
						<span className="item">Seal crack up to 6” </span>
						<span className="dots" /> $100-$150
					</li>
					No Finish. <br /> <br />
					<li className="article">
						<span className="item">Repair Crack up to 3”</span>
						<span className="dots" />
						<span className="price"> $150-200</span>
					</li>
					With finish touch up plus materials($10) Over 6” must quote. <br />
					<br />
					<li className="article">
						<span className="item">Seal Cracked bridge </span>
						<span className="dots" /> <span className="price"> $25-75</span>
					</li>{" "}
					<br />
					<li className="article">
						<span className="item">Headstock reglue</span>
						<span className="dots" /> <span className="price">$200-250</span>
					</li>
					No touch up, no splines. <br /> <br />
					<li className="article">
						<span className="item">Headstock Reglue</span>
						<span className="dots" /> <span className="price">$300-350</span>
					</li>
					w/spline reinforcements, no touchup w/touch up add $50-75. <br /> <br />
					<li className="article">
						<span className="item">Reglue loose brace</span>
						<span className="dots" /> <span className="price">$50</span>
					</li>
					$30 each additional brace. <br />
					<br />
				</ul>{" "}
				<br />
				<h1 className="underline">Nuts</h1> <br />
				<p>
					<i>Different types of neck repairs from nuts to frets. For headstock crack see crack repair</i>
				</p>
				<ul>
					<li className="article">
						<span className="item">Fender style bone nut</span>
						<span className="dots" /> <span className="price">$90</span>
					</li>
					Made from scratch. <br /> <br />
					<li className="article">
						<span className="item">Gibson style bone nut</span>
						<span className="dots" /> <span className="price">$95</span>
					</li>
					Made from scratch. <br /> <br />
					<li className="article">
						<span className="item">12 String bone nut</span>
						<span className="dots" /> <span className="price">$150</span>
					</li>
					Made from scratch. <br /> <br />
					<li className="article">
						<span className="item">Install synthetic nut</span>
						<span className="dots" /> <span className="price">$50</span>
					</li>
					Plus cost of nut. <br /> <br />
					<li className="article">
						<span className="item">Brass nut</span>
						<span className="dots" /> <span className="price">$150</span>
					</li>{" "}
				</ul>
				<br /> <br />
				<h1 className="underline">Frets and Fingerboards</h1> <br />
				<ul>
					<li className="article">
						<span className="item">Full Fret level and recrown</span>
						<span className="dots" /> <span className="price">$100</span>
					</li>{" "}
					<br />
					<li className="article">
						<span className="item">Fret end file</span>
						<span className="dots" /> <span className="price">$50</span>
					</li>{" "}
					<br />
					<li className="article">
						<span className="item">Fret level, recrown, fret ends</span>
						<span className="dots" /> <span className="price">$125</span>
					</li>{" "}
					<br />
					<li className="article">
						<span className="item">Recrown only</span>
						<span className="dots" /> <span className="price">$40</span>
					</li>{" "}
					<br />
					<li className="article">
						<span className="item">Reseat fret</span>
						<span className="dots" /> <span className="price">$15 a fret</span>
					</li>{" "}
					<br />
					<li className="article">
						<span className="item">Full refret</span>
						<span className="dots" /> <span className="price">$350</span>
					</li>
					Unbound maple or rosewood neck. <br /> <br />
					<li className="article">
						<span className="item">Refret bound neck</span>
						<span className="dots" /> <span className="price">450</span>
					</li>{" "}
				</ul>
				<br />
				<br />
				<h1 className="underline">Restring and Tune</h1> <br />
				<ul>
					<li className="article">
						<span className="item">6 string, 7 string, banjo, ukelele</span>
						<span className="dots" /> <span className="price">$30</span>
					</li>
					<br />
					<li className="article">
						<span className="item">12 string</span>
						<span className="dots" /> <span className="price">$40</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Classical, mandolin</span>
						<span className="dots" /> <span className="price">35</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Floyd Rose</span>
						<span className="dots" /> <span className="price">$35</span>
					</li>
					<br />
				</ul>{" "}
				<br /> <br />
				<h1 className="underline">Adjustments and Extras</h1> <br />
				<ul>
					<li className="article">
						<span className="item">Adjust action or intonation</span>
						<span className="dots" /> <span className="price">$25</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Adjust truss rod</span>
						<span className="dots" /> <span className="price">$15</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Filling nut slot</span>
						<span className="dots" /> <span className="price">$15($3 each Additional)</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Lower nut slot</span>
						<span className="dots" /> <span className="price">$15-$25</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Keyholing bridge holes</span>
						<span className="dots" /> <span className="price">$5-$15</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Clean electronics</span>
						<span className="dots" /> <span className="price">$25</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Dowel and drill strap button</span>
						<span className="dots" /> <span className="price">$10-20</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Shimming neck</span>
						<span className="dots" /> <span className="price">$20(plus materials)</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Dirty guitar/rusty frozen hardware</span>
						<span className="dots" /> <span className="price">$25+</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Saddle installation Strat</span>
						<span className="dots" /> <span className="price">$50</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Saddle installation Gibson</span>
						<span className="dots" /> <span className="price">$75</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Tuner install drop in</span>
						<span className="dots" /> <span className="price">$15</span>
					</li>
					(+cost of restring and setup)
					<br />
					<br />
					<li className="article">
						<span className="item">Tuner install w/ reaming + drilling</span>
						<span className="dots" /> <span className="price">$40</span>
					</li>
					<br />
					<li className="article">
						<span className="item">12 string tuner install</span>
						<span className="dots" /> <span className="price">$75</span>
					</li>
				</ul>
				<br />
				<br />
				<h1 className="underline">Electronics</h1>
				<br />
				<ul>
					<li className="article">
						<span className="item">Min bench fee</span>
						<span className="dots" /> <span className="price">$25</span>
					</li>{" "}
					<br />
					<li className="article">
						<span className="item">Clean electronics</span>
						<span className="dots" /> <span className="price">$25</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Pick up install:</span>
					</li>{" "}
					<br />
					<ul>
						<li className="article">
							<span className="item">one pick up</span>
							<span className="dots" /> <span className="price">$50</span>
						</li>{" "}
						<br />
						<li className="article">
							<span className="item">two pick ups</span>
							<span className="dots" /> <span className="price">$69 </span>
						</li>
						<br />
						<li className="article">
							<span className="item">three pick ups</span>
							<span className="dots" /> <span className="price">$79</span>
						</li>
					</ul>
					<br />
					<br />
					<li className="article">
						<span className="item"> Pick up install Tele: </span>
					</li>{" "}
					<br />
					<ul>
						<li className="article">
							<span className="item">bridge</span>
							<span className="dots" /> <span className="price">$65</span>
						</li>
						<br />
						<li className="article">
							<span className="item">neck</span>
							<span className="dots" /> <span className="price">$50</span>
						</li>
						<br />
						<li className="article">
							<span className="item">set</span>
							<span className="dots" /> <span className="price">$75</span>
						</li>
					</ul>
					<br /> <br />
					<li className="article">
						<span className="item">Rout body flat</span>
						<span className="dots" /> <span className="price">$90($50 Addt’l)</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Route body archtop</span>
						<span className="dots" /> <span className="price">$55-$100</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Replace switch</span>
						<span className="dots" /> <span className="price">$50</span>
					</li>
					<br />
					<li className="article">
						<span className="item">Replace pot: </span>
					</li>{" "}
					<br />
					<ul>
						<li className="article">
							<span className="item">for 1</span>
							<span className="dots" /> <span className="price">$45</span>
						</li>
						<br />
						<li className="article">
							<span className="item">for 2</span>
							<span className="dots" /> <span className="price">$65</span>
						</li>
						<br />
						<li className="article">
							<span className="item">for 3</span>
							<span className="dots" /> <span className="price">$80</span>
						</li>
						<br />
						<li className="article">
							<span className="item"> for 4</span>
							<span className="dots" /> <span className="price">$90</span>
						</li>
					</ul>
					<br />
					<br />
				</ul>
				<h2>
					If you don&apos;t see what you need,{" "}
					<Link to="/contact" target="_blank" rel="noopener noreferrer">
						contact me.
					</Link>{" "}
				</h2>
			</div>
			<br /> <br /> <br /> <br />
		</div>
	</div>
);
