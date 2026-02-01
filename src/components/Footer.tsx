import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#FFD700]/20 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4 bg-[#f5f5f0] p-2 rounded-lg">
              <img
                src="/Uni-logo2.png"
                alt="Universal Affordable Housing"
                className="h-16 w-auto"
              />
            </Link>
            <h3 className="text-[#FFD700] font-serif text-lg mb-2">
              Universal Affordable Housing
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Building Dreams, Defining Futures
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-[#FFD700] flex-shrink-0" />
                <span className="text-sm">
                  Plot 32B Katalima Crescent, Ntinda 2 Road, Naguru Kampala Uganda
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#50C878] flex-shrink-0" />
                <div className="text-sm">
                  <div>+256 783277052</div>
                  <div>+256 707085253</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#0F52BA] flex-shrink-0" />
                <a
                  href="mailto:universal.m.sales@gmail.com"
                  className="text-sm hover:text-[#FFD700] transition-colors"
                >
                  universal.m.sales@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <div className="text-sm">
                  <div>Monday - Sunday</div>
                  <div>9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/affordablehousinguganda?igsh=MWF1NXRzNWFhM2t4Yw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center hover:bg-pink-500/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/share/17WAcFqRD6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0F52BA]/10 rounded-lg flex items-center justify-center hover:bg-[#0F52BA]/20 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-[#0F52BA] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://x.com/universalentp53"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#50C878]/10 rounded-lg flex items-center justify-center hover:bg-[#50C878]/20 transition-colors group"
              >
                <Twitter className="w-5 h-5 text-[#50C878] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.tiktok.com/@universalaffordablehousi?_r=1&_t=ZS-93Q1VQ64ks8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center hover:bg-[#FFD700]/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-[#FFD700] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              <div className="space-y-1">
                <Link
                  to="/"
                  className="block text-sm hover:text-[#FFD700] transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/properties"
                  className="block text-sm hover:text-[#FFD700] transition-colors"
                >
                  Our Properties
                </Link>
                <Link
                  to="/site-updates"
                  className="block text-sm hover:text-[#FFD700] transition-colors"
                >
                  Site Updates
                </Link>
                <Link
                  to="/csr"
                  className="block text-sm hover:text-[#FFD700] transition-colors"
                >
                  CSR
                </Link>
                {/* <Link
                  to="/team"
                  className="block text-sm hover:text-[#FFD700] transition-colors"
                >
                  Our Team
                </Link> */}
                <Link
                  to="/contact"
                  className="block text-sm hover:text-[#FFD700] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#FFD700]/10 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Universal Affordable Housing Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
