import https from "https";
import { Event } from "../data/event";
const agent = new https.Agent({
  rejectUnauthorized: false,
});


export async function fetchEvents(): Promise<Event[]> {
  const res = await fetch("http://localhost:5070/api/Event", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  return res.json();
}
export async function fetchEventById(id: string): Promise<Event | null> {
  
  const res = await fetch(`http://localhost:5070/api/Event/${id}`, {
    cache: "no-store",
  });
  console.log("ID: ",id);
  console.log("status:", res.status);

  if (!res.ok) {
    return null;
  }

  return res.json();
}