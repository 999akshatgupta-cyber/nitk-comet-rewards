import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Cosmic glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4 text-accent">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider font-medium">Only for NITK Students</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
            Earn ₹59 instantly with{" "}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Perplexity Comet
            </span>{" "}
            Referral
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Invite your friends and earn ₹59 in just 3 minutes
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-background font-semibold text-lg px-10 py-7 rounded-full border-2 border-accent/30 shadow-lg shadow-accent/20 transition-all hover:scale-105"
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
            
            <p className="text-muted-foreground text-sm">
              Video tutorial coming soon!
            </p>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
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
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Click below to begin your referral and earn ₹59 instantly!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-background font-semibold text-lg px-12 py-7 rounded-full border-2 border-accent/30 shadow-xl shadow-accent/20 transition-all hover:scale-105"
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
