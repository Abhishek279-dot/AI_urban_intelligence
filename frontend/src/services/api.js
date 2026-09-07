const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
export async function getIncidents(params = {}) {
  const query = new URLSearchParams(Object.entries(params).filter(([,v]) => v !== "" && v != null)).toString();
  const response = await fetch(`${API_BASE}/incidents${query ? `?${query}` : ""}`);
  if (!response.ok) throw new Error("Unable to load incidents");
  return response.json();
}
export async function updateIncidentStatus(id, status) {
  const response = await fetch(`${API_BASE}/incidents/${id}/status`, { method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({status}) });
  if (!response.ok) throw new Error("Unable to update incident status");
  return response.json();
}
