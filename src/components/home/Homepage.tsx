import Link from "next/link";
import { fetchEvents } from "@/src/services/eventService";
import Image from "next/image";
export default async function HomePage() {
  const events = await fetchEvents(); // QUAN TRỌNG: Đảm bảo dữ liệu được lấy trước khi sử dụng
  console.log(events);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full h-screen">
        <Image
          src="/images/DSC00301.jpg"
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 pt-6">
        {events.map((event) => (
          <Link key={event.eventId} href={`/events/${event.eventId}`}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 overflow-hidden">
                <Image
                  src={event.bannerUrl || "/images/DSC00301.jpg"}
                  alt={event.name}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3>{event.name}</h3>

                <h3>View Details</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
