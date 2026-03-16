import Sidebar from "@/src/components/sibebar/Sidebar";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex ">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
