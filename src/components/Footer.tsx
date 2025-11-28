import { Link } from "react-router-dom";
import perplexityLogo from "@/assets/perplexity-logo-teal.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Terms", path: "/terms" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-border py-16 mt-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={perplexityLogo} alt="Perplexity" className="h-8" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground max-w-md">
            <p className="mb-3">Organized by NITK Students | Affiliated with Perplexity</p>
            <Link to="/terms" className="text-accent hover:underline font-medium">
              View Terms & Conditions
            </Link>
            <p className="mt-4 text-xs">© 2025 Perplexity NITK Rewards</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
