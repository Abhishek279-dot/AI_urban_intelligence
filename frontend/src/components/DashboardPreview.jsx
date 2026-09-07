import React from "react";
import { AlertTriangle, BarChart3, BusFront, CheckCircle2, MapPinned, ShieldAlert, Activity } from "lucide-react";
import { MapContainer, TileLayer, CircleMarker, Polyline } from "react-leaflet";
const incidents=[{p:[18.531,73.847],c:"#e54b4b"},{p:[18.512,73.865],c:"#f59e35"},{p:[18.523,73.878],c:"#e54b4b"},{p:[18.505,73.81],c:"#f59e35"}];
export default function DashboardPreview(){return <section className="dashboard-preview">
  <div className="preview-top"><div><span className="eyebrow">PRODUCT PREVIEW</span><h2>One command center for every urban signal.</h2><p>See the fleet, incidents and AI-generated priorities in one operational view.</p></div><span className="live-pill"><i/> Live prototype</span></div>
  <div className="preview-shell">
    <aside className="preview-side"><div className="preview-logo">TE</div>{[[Activity,"Overview"],[MapPinned,"Live Map"],[AlertTriangle,"Incidents"],[BusFront,"Fleet"],[BarChart3,"Analytics"],[ShieldAlert,"Alerts"]].map(([Icon,label],i)=><div key={label} className={`preview-nav ${i===0?"selected":""}`}><Icon size={16}/>{label}</div>)}</aside>
    <div className="preview-main">
      <div className="preview-kpis">{[["Total incidents","128","+14 today"],["High severity","12","Needs review"],["Connected buses","1,284","92% online"],["Avg. confidence","91.4%","AI detections"]].map(([a,b,c],i)=><div key={a}><small>{a}</small><strong className={i===1?"danger-text":""}>{b}</strong><em>{c}</em></div>)}</div>
      <div className="preview-content"><div className="preview-map"><div className="preview-card-title"><b>Live GIS map</b><span>Markers · Heatmap</span></div><div className="map-mini"><MapContainer center={[18.5204,73.8567]} zoom={11} scrollWheelZoom={false} zoomControl={false} dragging={false}><TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/><Polyline positions={[[18.52,73.85],[18.53,73.84],[18.54,73.87]]} pathOptions={{color:"#1769e8",weight:4}}/>{incidents.map((x,i)=><CircleMarker key={i} center={x.p} radius={7} pathOptions={{color:x.c,fillColor:x.c,fillOpacity:.9}}/>)}</MapContainer></div></div>
        <div className="preview-insights"><div className="preview-card-title"><b>AI priorities</b><span>View all</span></div>{[[AlertTriangle,"Pothole cluster","3 high-priority detections","danger"],[BarChart3,"Congestion risk","Route 27 · rising","warning"],[CheckCircle2,"Fleet health","92% buses online","success"]].map(([Icon,t,d,cl])=><div className="preview-insight" key={t}><span className={`pi-icon ${cl}`}><Icon size={16}/></span><div><b>{t}</b><small>{d}</small></div><span className="arrow">›</span></div>)}</div></div>
    </div>
  </div>
</section>}
