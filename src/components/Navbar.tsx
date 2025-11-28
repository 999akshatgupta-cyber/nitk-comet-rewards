import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import perplexityLogo from "@/assets/perplexity-logo-teal.png";
import cometLogo from "@/assets/comet-logo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={cometLogo} alt="Comet" className="w-14 h-14 transition-transform group-hover:scale-105" />
            <div className="flex items-center gap-2">
              <img src={perplexityLogo} alt="Perplexity" className="h-7" />
              <span className="text-sm font-medium text-foreground hidden sm:inline">NITK Rewards</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? "text-accent bg-accent/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm" className="font-medium">
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-2">
                <Link
                  to="/dashboard"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive("/dashboard")
                      ? "text-accent bg-accent/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "text-accent bg-accent/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 px-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    Sign in
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center justify-between gap-3">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className={`flex-1 px-4 py-3 rounded-md text-sm font-medium text-center transition-all ${
                      isActive("/dashboard")
                        ? "text-accent bg-accent/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    Dashboard
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
