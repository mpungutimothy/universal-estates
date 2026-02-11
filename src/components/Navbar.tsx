import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { properties as staticProperties } from '../lib/properties';

type PropertyNavItem = {
  id: string;
  slug: string;
  name: string;
  location: string;
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertiesMenuOpen, setPropertiesMenuOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);
  const location = useLocation();

  const properties: PropertyNavItem[] = staticProperties.map(p => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    location: p.location
  }));

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties', hasDropdown: true },
    { name: 'Site Updates', path: '/site-updates' },
    { name: 'CSR', path: '/csr' },
    // { name: 'Our Team', path: '/team' },
    { name: 'Contacts', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md border-b border-gray-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/Uni-logo2.png"
                alt="Universal Affordable Housing"
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setPropertiesMenuOpen(true)
                  }
                  onMouseLeave={() =>
                    link.hasDropdown && setPropertiesMenuOpen(false)
                  }
                >
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#FFD700]'
                        : 'text-gray-800 hover:text-[#FFD700]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${propertiesMenuOpen ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {link.hasDropdown && propertiesMenuOpen && (
                    <div
                      className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-200 rounded-lg shadow-2xl py-2 animate-fadeIn z-[100] max-h-96 overflow-y-auto scrollbar-hide"
                      onMouseEnter={() => setPropertiesMenuOpen(true)}
                      onMouseLeave={() => setPropertiesMenuOpen(false)}
                    >
                      {properties.length > 0 ? (
                        properties.map((property) => (
                          <Link
                            key={property.id}
                            to={`/property/${property.slug}`}
                            onClick={() => setPropertiesMenuOpen(false)}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#FFD700]/20 hover:text-gray-900 transition-all border-b border-gray-100 last:border-b-0"
                          >
                            <div className="font-semibold">{property.location}</div>
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm text-gray-600">
                          Loading properties...
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
                        className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-800"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobilePropertiesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobilePropertiesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {properties.length > 0 ? (
                            properties.map((property) => (
                              <Link
                                key={property.id}
                                to={`/property/${property.slug}`}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobilePropertiesOpen(false);
                                }}
                                className="block py-2 text-sm text-gray-700 hover:text-[#FFD700] transition-colors"
                              >
                                <div className="font-medium">{property.location}</div>
                              </Link>
                            ))
                          ) : (
                            <div className="py-2 text-sm text-gray-500">
                              Loading properties...
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-[#FFD700]'
                          : 'text-gray-800'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
