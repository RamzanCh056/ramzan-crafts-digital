import { Instagram, Facebook, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ramzan-ch-2bb2a1192/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ramzantech?igsh=NGFsNDV5ZGE0amVr&utm_source=qr",
      icon: Instagram,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1DfwiCBYcV/?mibextid=wwXIfr",
      icon: Facebook,
    },
    {
      name: "Email",
      url: "mailto:ramzanch02@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="py-12 px-6 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ramzan Chaudhary</h3>
            <p className="text-white/60">Full-Stack Flutter App Developer</p>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
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
