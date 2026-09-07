import React from "react";
import { BusFront, Database, MapPinned, ShieldCheck } from "lucide-react";
const stats=[[BusFront,"1,500+","Vehicles Connected"],[Database,"25M+","Data Points / Day"],[MapPinned,"50+","Cities / Pilots"],[ShieldCheck,"99.8%","System Availability"]];
export default function StatStrip(){return <section className="stat-strip">{stats.map(([Icon,value,label])=><div className="stat-item" key={label}><span className="stat-icon"><Icon size={20}/></span><div><strong>{value}</strong><small>{label}</small></div></div>)}</section>}
