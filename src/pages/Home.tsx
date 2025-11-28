import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToVideo = () => {
    document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-sm font-medium text-accent">Only for NITK Students</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight tracking-tight">
            Earn ₹59 instantly with{" "}
            <span className="text-accent">
              Perplexity Comet
            </span>{" "}
            Referral
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Invite your friends and earn ₹59 in just 3 minutes
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-medium text-base px-8 py-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <a
                href="https://pplx.ai/akshat-gupta-e3vj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Referral Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
            
            <Button
              onClick={scrollToVideo}
              size="lg"
              variant="outline"
              className="border border-border hover:bg-secondary text-foreground text-base px-8 py-6 rounded-lg transition-all"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch How It Works
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base px-8 py-6 rounded-lg transition-all"
            >
              <Link to="/sign-in">
                Sign in to access rewards
                <Sparkles className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-8">
            <a href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            See How It Works
          </h2>
          
          <Card className="overflow-hidden border border-border shadow-lg bg-card">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/vyGe1xQ62_g"
                title="Perplexity NITK Rewards Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              About This Campaign
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Welcome to Perplexity NITK Rewards! This campaign is organized by students at NITK to help
              fellow students discover Perplexity Comet – an innovative AI assistant – while earning
              instant cash rewards. We're committed to making this process transparent, quick, and
              rewarding for everyone involved. Join us in exploring the future of AI-powered assistance!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Click below to begin your referral and earn ₹59 instantly!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-medium text-base px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <a
              href="https://pplx.ai/akshat-gupta-e3vj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Referral Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
