import React from "react";
export default function SectionHeader({eyebrow,title,text,align="center"}) { return <div className={`section-header ${align}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>; }
