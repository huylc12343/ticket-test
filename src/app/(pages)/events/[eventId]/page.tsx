import { fetchEventById } from "@/src/services/eventService";
import Link from "next/link";
import { Button } from "@mui/material";
export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  const event = await fetchEventById(eventId);

  console.log(eventId);
  console.log("events:", event);

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <div className="py-10">
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-amber-400 px-4 py-2 rounded mb-6 text-white"
      >
        Return
      </Link>
      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
      <Link href={`/events/${event.eventId}/buy-ticket`}>
        <Button variant="contained" className="mb-4">
          Mua vé
        </Button>
      </Link>
      <div className="h-96 overflow-hidden rounded-xl mb-6">
        <img
          src={event.bannerUrl || "/images/default.jpg"}
          alt={event.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
