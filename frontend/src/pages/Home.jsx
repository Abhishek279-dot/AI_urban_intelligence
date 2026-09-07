import React from "react";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import CityScene from "../components/CityScene";
import StatStrip from "../components/StatStrip";
import FeatureStrip from "../components/FeatureStrip";
import DashboardPreview from "../components/DashboardPreview";
export default function Home(){return <main>
  <section className="hero"><div className="hero-copy"><span className="hero-badge"><Sparkles size={15}/> AI-POWERED MOBILITY</span><h1>AI-Powered Mobile Urban<br/><span>Intelligence Platform</span></h1><h2>Using Public Transport Fleet</h2><p>Turn everyday bus journeys into a mobile sensing network for safer roads, smarter mobility and faster urban response.</p><div className="hero-buttons"><a href="/platform" className="primary-btn">Explore Platform <ArrowRight size={18}/></a><a href="/dashboard" className="secondary-btn"><PlayCircle size={18}/> Watch Demo</a></div><div className="hero-trust"><span><i/> Edge AI</span><span><i/> GPS tagged</span><span><i/> GIS ready</span></div></div><CityScene/></section>
  <StatStrip/><FeatureStrip/><DashboardPreview/>
  <section className="workflow-band"><div><span className="eyebrow">HOW IT WORKS</span><h2>From moving cameras to actionable city intelligence.</h2></div><div className="workflow-steps">{[["01","Capture","Bus camera + GPS"],["02","Understand","AI detection + tracking"],["03","Locate","Time + confidence + GPS"],["04","Act","Dashboard + workflow"]].map(([n,t,d])=><div key={n}><b>{n}</b><strong>{t}</strong><small>{d}</small></div>)}</div></section>
  <section className="cta"><span className="eyebrow">SMARTER CITIES START WITH BETTER DATA</span><h2>Make every route a source of<br/><span>urban intelligence.</span></h2><p>Monitor incidents, understand patterns and help teams act faster.</p><a href="/dashboard" className="primary-btn">Open Command Center <ArrowRight size={18}/></a></section>
</main>}
