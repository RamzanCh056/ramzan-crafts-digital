const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 px-6 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ramzan Chaudhary</h3>
            <p className="text-white/60">Full-Stack Flutter App Developer</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {currentYear} Ramzan Chaudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
