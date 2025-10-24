import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";

const Home = () => {
  const scrollToVideo = () => {
    document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get Rewarded for Your Efforts!
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Earn ₹59 cash instantly in 3 minutes.
          </p>
          <Button
            onClick={scrollToVideo}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8 py-6"
          >
            <Play className="h-5 w-5" />
            Watch How It Works
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden border-2 border-accent/20 shadow-lg">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">About This Campaign</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Welcome to Perplexity NITK Rewards! This campaign is organized by students at NITK to help
            fellow students discover Perplexity Comet – an innovative AI assistant – while earning
            instant cash rewards. We're committed to making this process transparent, quick, and
            rewarding for everyone involved. Join us in exploring the future of AI-powered assistance!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Click below to begin your referral and earn ₹59 instantly!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8 py-6"
          >
            <a
              href="https://pplx.ai/akshat-gupta-e3vj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Referral Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
