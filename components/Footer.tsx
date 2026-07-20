import Link from 'next/link';

// Adapted from the FFC standard footer (FFC_Single_Page_Template
// src/components/footer/index.tsx): organization blurb, quick-link and
// policy columns, contact details, and the permanent Free For Charity
// attribution — restyled for this site's dark/purple aesthetic.
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0514] border-t border-purple-500/20 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Organization */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">The Technology Monastery</h3>
            <p className="text-gray-400 mb-4">
              Empowering small nonprofits with free, customized technology solutions through our
              dedicated community of skilled professionals.
            </p>
            <p className="text-gray-400">
              <span className="font-semibold text-gray-300">E-mail: </span>
              <a
                href="mailto:info@technologymonastery.org"
                className="hover:text-purple-400 transition break-all"
              >
                info@technologymonastery.org
              </a>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <nav aria-label="Quick links">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-purple-400 transition">
                    Home
                  </Link>
                </li>
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
                  <Link
                    href="/get-started"
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Policies & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Policies &amp; Legal</h3>
            <nav aria-label="Policy links">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy/"
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service/"
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/FreeForCharity/FFC-EX-technologymonastery.org/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    License
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-900/30 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} The Technology Monastery. Licensed under GNU AGPL v3.0.
            {' | '}
            Website by{' '}
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-purple-400 hover:text-purple-300 transition"
            >
              Free For Charity
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
