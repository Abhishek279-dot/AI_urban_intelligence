import React from "react";
import { Activity, Bell, Cpu, FileBarChart2, Route } from "lucide-react";
const features=[[Activity,"Real-time Tracking","Live bus and route visibility"],[Cpu,"AI Analytics","Detect incidents at the edge"],[Route,"Smart Operations","Turn mobility data into action"],[Bell,"Alerts & Workflow","Prioritize issues by severity"],[FileBarChart2,"Urban Insights","GIS-ready intelligence for teams"]];
export default function FeatureStrip(){return <section className="feature-strip">{features.map(([Icon,title,desc],i)=><div className="feature-item" key={title}><span className={`feature-icon tone-${i}`}><Icon size={20}/></span><div><strong>{title}</strong><p>{desc}</p></div></div>)}</section>}
