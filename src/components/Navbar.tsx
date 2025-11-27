import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import perplexityLogo from "@/assets/perplexity-logo-white.png";
import cometLogo from "@/assets/comet-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You've been successfully signed out",
      });
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={cometLogo} alt="Comet" className="w-12 h-12 transition-transform group-hover:scale-110" />
            <div className="flex items-center gap-2">
              <img src={perplexityLogo} alt="Perplexity" className="h-6" />
              <span className="text-sm font-medium text-muted-foreground hidden sm:inline">NITK Rewards</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "text-accent font-medium"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="ml-2"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => navigate("/auth")}
                className="ml-2"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
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
          <div className="lg:hidden py-4 border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "text-accent font-medium bg-secondary/50"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-3 px-4">
              {user ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => {
                    navigate("/auth");
                    setIsOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
