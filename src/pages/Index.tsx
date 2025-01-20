import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronRight, Mail, Globe } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handlePreRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for pre-registering!",
      description: "We'll notify you when we launch.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed w-full z-50 bg-opacity-90 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            AccessVerse
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#contact"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-purple-600"
            >
              <Globe className="w-4 h-4" />
              Explore Metaverse
            </Button>
          </nav>
        </div>
      </header>

      {/* Video Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1600px] h-[900px] z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/CaLaFcM7Ttk?autoplay=1&loop=1&mute=1&playlist=CaLaFcM7Ttk&autohide=1&showinfo=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        />
      </div>

      {/* Hero Section */}
      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-bold text-white">
              Making Metaverse{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Accessible for Everyone
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white ">
              An innovative platform designed for everyone, including specially
              abled people. Coming soon.
            </p>

            {/* Pre-register Form */}
            <form
              onSubmit={handlePreRegister}
              className="max-w-md mx-auto space-y-4"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white"
              />
              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Pre-register Now
                <ChevronRight className="ml-2" />
              </Button>
            </form>

            {/* About Us Link */}
            <div className="pt-8">
              <Link to="/about">
                <Button
                  variant="outline"
                  className="text-lg border-white/20 text-white hover:bg-purple-600/10 transition-all duration-300"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-background/80 backdrop-blur-sm border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About AccessVerse</h3>
              <p className="text-sm text-gray-400">
                Making the metaverse accessible for everyone through innovative
                technology and inclusive design.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-sm text-gray-400">
                Email: hello@accessverse.com
                <br />
                Follow us on Twitter @AccessVerse
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 AccessVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
