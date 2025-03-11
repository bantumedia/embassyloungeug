import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="flex flex-col items-start">
            <img
              src="/logo.png"
              alt="Embassy Lounge Logo"
              className=" w-100 mb-4"
            />
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-emerald-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-emerald-200 font-semibold mb-4">
              Our Branches
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/branch/mbale"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Embassy Lounge Mbale
                </a>
              </li>
              <li>
                <a
                  href="/branch/iganga"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Camp David Royals Lounge Iganga
                </a>
              </li>
              <li>
                <a
                  href="/branch/busia"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Embassy Lounge Busia
                </a>
              </li>
              <li>
                <a
                  href="/branch/jinja"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Embassy Lounge Jinja
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-emerald-200 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Phone: +256772945684 / +256702945684</li>
              <li className="text-gray-300">Email: info@embassyloungeug.com</li>
              <li className="text-gray-300">Location: Uganda, East-Africa</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-900">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Embassy Lounge. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="/sitemap" className="hover:text-white transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
