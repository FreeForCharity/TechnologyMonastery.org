import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0514] border-t border-purple-500/20 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">The Technology Monastery</h3>
            <p className="text-gray-400">
              Empowering nonprofits through technology
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-purple-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="text-gray-400 hover:text-purple-400 transition">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy.html" className="text-gray-400 hover:text-purple-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms.html" className="text-gray-400 hover:text-purple-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FreeForCharity/Technologymonastery.org/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-900/30 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Technology Monastery. Licensed under GNU AGPL v3.0.</p>
        </div>
      </div>
    </footer>
  );
}
