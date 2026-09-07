import React from "react";
import { Bell, BusFront, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [["/","Home"],["/platform","Platform"],["/solutions","Solutions"],["/dashboard","Dashboard"],["/insights","Insights"],["/about","About Us"],["/contact","Contact"]];

export default function Navbar({ notificationsOpen, setNotificationsOpen }) {
  return <>
    <header className="navbar">
      <NavLink to="/" className="brand"><span className="brand-icon"><BusFront size={22}/></span><span>Transit<span className="brand-accent">Eye</span></span></NavLink>
      <nav className="nav-links">{links.map(([to,label]) => <NavLink key={to} to={to} className={({isActive})=>`nav-link ${isActive?"active":""}`}>{label}</NavLink>)}</nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={()=>setNotificationsOpen(v=>!v)} aria-label="Notifications"><Bell size={19}/><span className="notification-dot"/></button>
        <button className="login-btn">Login <span>/</span> Sign Up</button>
      </div>
    </header>
    {notificationsOpen && <div className="notification-popover"><b>Notifications</b><div><span className="status-dot red-dot"/>3 high-priority road incidents need review.</div><div><span className="status-dot blue-dot"/>PMPML-142 is back online.</div><div><span className="status-dot amber-dot"/>Route 27 congestion risk increased.</div></div>}
  </>;
}
