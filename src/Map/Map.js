import React, { useRef, useState, useEffect } from "react";
import style from "./Map.css";

import test1 from "./myData.json"
import test2 from "./myData2.json"
import test3 from "./myData3.json"
import test4 from "./myData4.json"
import test5 from "./myData5.json"
import test6 from "./myData4.json"
import test7 from "./myData5.json"

import L from "leaflet";
import { Parallax } from "react-scroll-parallax";
import { Map, TileLayer, Marker, Popup, Circle, Polyline, useLeaflet } from 'react-leaflet';
import { useLeafletZoom, useLeafletIsZooming } from "use-leaflet";
// import { Slider, RangeSlider } from 'rsuite';
import Slider from '@material-ui/core/Slider';
const position = [57.708870, 11.974560]

function Maps() {
	const [zoom, setZoom] = useState(13);
	const [bounds, setBounds] = useState(null);
	const mapRef = useRef();
	const [day, setDay] = useState(0);
	const [sDay, setsDay] = useState("Fredag");
	const [value, setValue] = useState(30);


	const handleChange = (event, newValue) => {
		setValue(newValue + day);
	};
	function LineDraw(inp) {
		var i;
		var start;
		for (i = 0; i < inp.length; i++) {
			start = inp[0][0][2]
			if (start <= value) {
				// setCount(test[i].slice(value - 10, value));
				{ return (<Polyline color="red" positions={inp[i].slice((value - start) - 10, (value - start))} />) };
			}
		}

	}
	function AllDraw(inp){
		const items = []
		for (const [index, value] of inp.entries()) {
			items.push(DotDraw(value))
		  }
		return(items)

	}
	function DotDraw(inp) {
		var i;
		for (i = 0; i < inp.length; i++) {
			if (inp[i][2] == value) {
				{ return (<Circle color="red" center={inp[i]} radius={40} />) };
			}
		}
	}
	function updateMap() {
		const b = mapRef.current.leafletElement.getBounds();
		setBounds([
			b.getSouthWest().lng,
			b.getSouthWest().lat,
			b.getNorthEast().lng,
			b.getNorthEast().lat
		]);
		setZoom(mapRef.current.leafletElement.getZoom());
	}
	React.useEffect(() => {
		updateMap();
	}, []);
	return (
		<div className="App">
			<header className="Map-header">
				Bestäm dag och dra i slidern för att se hur löparna sprang.   Zooma ut för att se olika delar av sverige, och världen!
				<div3>
					<button class = "button" onClick={() => {setDay(0); setsDay("Fredag")}}>
						Fredag
				</button>
					<button class = "button" onClick={() => {setDay(1440); setsDay("Lördag")}}>
						Lördag
				</button>
					<button class = "button" onClick={() => {setDay(2880); setsDay("Söndag")}}>
						Söndag
				</button>
				</div3>
				{sDay} {Math.floor((value-day) / 60)}:{value % 60}
				<Slider
					defaultValue={30}
					aria-labelledby="continuous-slider"
					onChange={handleChange}
					min={0}
					max={1440}
					
				/>
				<Map center={position} zoom={13} ref={mapRef} onMoveEnd={updateMap}>

					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					/>

					{AllDraw(test1)}
					{AllDraw(test2)}
					{AllDraw(test3)}
					{AllDraw(test4)}
					{AllDraw(test5)}
					{/* <CircleMarker color="red" center={[57.7191460,12.0024980]} radius={10} /> */}
					{/* {DotDraw(hassan)}
					{DotDraw(nr1)}
					{DotDraw(nr2)}
					{DotDraw(nr3)}
					{DotDraw(nr4)}
					{DotDraw(nr5)}
					{DotDraw(nr6)}
					{DotDraw(nr7)} */}

				</Map>
			</header>
		</div>

	);
}
export default Maps;



