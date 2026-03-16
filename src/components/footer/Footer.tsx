export default function Footer() {
  return (
    <footer className="bg-green-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">🎟 TicketStore</h2>
          <p className="text-sm text-white-400">
            Your trusted platform for buying tickets and merch.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">My Orders</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-white-400 text-sm">
            Email: support@ticketstore.com
          </p>
        </div>
      </div>

      <div className="text-center text-white-500 text-sm py-4 border-t border-white-700">
        © {new Date().getFullYear()} TicketStore. All rights reserved.
      </div>
    </footer>
  );
}