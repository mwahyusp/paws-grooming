import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="logo flex items-center">
            <img src="/images/logo.svg" alt="GroomingPaws" className="h-10" />
          </a>

          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu">
            <i className="fas fa-bars"></i>
          </button>

          <nav
            className={`md:flex ${
              isMenuOpen ? "block" : "hidden"
            } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
              <li>
                <a
                  href="#home"
                  className="nav-link text-dark hover:text-primary font-medium py-2 md:py-0 block"
                  onClick={closeMenu}>
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="nav-link text-dark hover:text-primary font-medium py-2 md:py-0 block"
                  onClick={closeMenu}>
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="nav-link text-dark hover:text-primary font-medium py-2 md:py-0 block"
                  onClick={closeMenu}>
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="nav-link text-dark hover:text-primary font-medium py-2 md:py-0 block"
                  onClick={closeMenu}>
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="nav-link text-dark hover:text-primary font-medium py-2 md:py-0 block"
                  onClick={closeMenu}>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="btn bg-primary text-white hover:bg-secondary py-2 px-4 rounded-full transition-all duration-300 mt-2 md:mt-0 md:ml-4 block text-center"
                  onClick={closeMenu}>
                  Pesan Sekarang
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
