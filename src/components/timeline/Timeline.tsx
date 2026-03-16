import "./timeline.css";
export default async function Timeline({
  param,
}: {
  param: Promise<{ slug: string[] }>;
}) {
  const { slug } = await param;
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Timeline</h1>
        <div className="flex items-center justify-center ">
          {/* Cột 1 */}
          <div className=" py-4 timeline-item w-[100px] bg-amber-400 left">
            left
          </div>

          {/* Divider dọc */}
          <div className="w-[10px] h-full bg-blue-400"></div>

          {/* Cột 2 */}
          <div className=" py-4 timeline-item w-[100px] bg-amber-400 right">
            right
          </div>
        </div>
      </div>
    </>
  );
}
