import { getTicketTypeByEventId } from "@/src/services/ticketTypeService";
import { Button } from "@mui/material";
import Link from "next/link";
export default async function BuyTicket({
  params,
}:{
  params: Promise<{eventId: string}>;
}) {
  const {eventId} = await params;
  const ticketTypes = await getTicketTypeByEventId(eventId);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">Các hạng vé</h1>

      <div className="flex gap-4">
        {ticketTypes.map((ticketType) => (
          <div
            key={ticketType.ticketTypeID}
            className="card-ticket p-4 border rounded-lg shadow"
          >
            <h2>Loại vé: {ticketType.name}</h2>
            <h2>Giá: {ticketType.price}</h2>
            <Link href={`/events/${eventId}/checkout`}>
              <Button variant="outlined">Mua vé</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
