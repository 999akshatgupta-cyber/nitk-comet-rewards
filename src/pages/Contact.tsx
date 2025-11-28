import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent font-semibold">
                <Phone className="h-5 w-5" />
                Phone Numbers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Primary Contact</p>
                <a
                  href="tel:+917737572066"
                  className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                >
                  +91 7737572066
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Secondary Contact</p>
                <a
                  href="tel:+916364794843"
                  className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                >
                  +91 6364794843
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent font-semibold">
                <MapPin className="h-5 w-5" />
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you prefer to meet in person, you can find us at:
              </p>
              <p className="text-lg font-semibold text-foreground">Room No. 75</p>
              <p className="text-sm text-muted-foreground mt-2">
                NITK Campus
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-accent/5 border border-accent/20 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent font-semibold">
              <MessageCircle className="h-5 w-5" />
              Preferred Contact Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              For the fastest response, we recommend reaching out via WhatsApp. Our team is
              available to answer your questions and help resolve any issues you might face
              during the referral process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-white shadow-sm"
              >
                <a
                  href="https://wa.me/917737572066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp: 7737572066
                </a>
              </Button>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-white shadow-sm"
              >
                <a
                  href="https://wa.me/916364794843"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp: 6364794843
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-secondary/20 rounded-xl border border-border text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> This campaign is officially
            affiliated with Perplexity Comet. We ensure complete transparency and genuine
            rewards for all participants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
