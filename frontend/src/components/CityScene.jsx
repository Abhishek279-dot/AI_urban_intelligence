import React from "react";
import { BarChart3, BusFront, MapPin, ScanLine } from "lucide-react";
export default function CityScene(){return <div className="city-scene">
  <div className="scene-grid"/><div className="city-glow"/>
  <div className="scene-chip chip-a"><MapPin size={16}/><span>GPS tagged<br/><b>18.5204, 73.8567</b></span></div>
  <div className="scene-chip chip-b"><ScanLine size={16}/><span>AI event<br/><b>92% confidence</b></span></div>
  <div className="scene-chip chip-c"><BarChart3 size={16}/><span>Urban signal<br/><b>Live analysis</b></span></div>
  <div className="skyline">{Array.from({length:13}).map((_,i)=><i key={i} style={{height:`${70+(i%6)*25}px`}}/> )}</div>
  <div className="road-scene"><span/><span/><span/></div>
  <div className="hero-bus"><div className="bus-roof"/><div className="bus-window-row"><i/><i/><i/><i/></div><div className="bus-front">CITY<br/><b>INTELLIGENCE</b></div><div className="bus-door"/><div className="bus-wheel left"/><div className="bus-wheel right"/><BusFront className="bus-mark" size={22}/></div>
  <div className="road-pin"><MapPin size={17}/><b>POTHOLE</b><small>High · 94%</small></div>
</div>}
