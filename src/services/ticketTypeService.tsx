import { TicketType } from "../data/tickettype";

export async function getTicketTypeByEventId(id: string): Promise<TicketType[]> {
  const res = await fetch(`http://localhost:5070/api/TicketType/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch ticket types: ${res.status} ${res.statusText}`);
  }

  return res.json();
}