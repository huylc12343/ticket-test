import Link from "next/link";
import { fetchEvents } from "@/src/services/eventService";
import Image from "next/image";
export default async function Events() {
  const events = await fetchEvents();
  console.log(events);
  return (
    <div className="min-h-screen p-6">
      <h1>Các sự kiện</h1>
      <div className="flex flex-row">
        {events.map((event) => (
          <Link key={event.eventId} href={`/events/${event.eventId}`}>
            <div className="card-event w-fit flex flex-col flex-wrap p-4 m-4 bg-green-200 ">
              <Image
                src={event.bannerUrl}
                alt="image"
                width={300}
                height={200}
                className="rounded"
              ></Image>
              <h3 className="event-name">{event.name}</h3>
              <h4>price: 0-1000000VND</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
