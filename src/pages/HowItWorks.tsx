import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Download, LogIn, IndianRupee, Smartphone } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: QrCode,
      title: "Scan the QR Code",
      description: "Use your phone camera to scan the QR code and get your unique referral link.",
    },
    {
      icon: Smartphone,
      title: "Visit Comet Website",
      description: "You'll be redirected to the official Comet website where you can learn more.",
    },
    {
      icon: Download,
      title: "Download Comet App",
      description: "Download the Comet app from the website to your device.",
    },
    {
      icon: LogIn,
      title: "Sign In with Google",
      description: "Sign in using the same Google account you used to download the app.",
    },
    {
      icon: IndianRupee,
      title: "Receive ₹59 Instantly",
      description: "Get your ₹59 reward instantly via UPI after successful verification!",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            How to Earn ₹59 Instantly
          </h1>
          <p className="text-xl text-muted-foreground">
            Follow these simple steps and get your reward in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full" />
              <div className="absolute top-2 right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-secondary/50 border-accent/20">
          <CardContent className="pt-6">
            <h3 className="font-bold text-xl mb-4 text-primary">Important Notes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Make sure to use the same Google account for downloading and signing in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>The reward is processed instantly upon successful verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Only one referral per device/laptop is allowed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Contact us immediately if you face any issues during the process</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
