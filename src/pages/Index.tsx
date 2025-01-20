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

  const scrollToTop = () => {
    const scrollDuration = 1000;
    const startingPosition = window.pageYOffset;
    const distance = -startingPosition;
    let startTime: number;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollStep = easeInOut(
        timeElapsed,
        startingPosition,
        distance,
        scrollDuration
      );

      window.scrollTo(0, scrollStep);

      if (timeElapsed < scrollDuration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOut = (t: number, b: number, c: number, d: number) => {
    let ts = (t /= d) * t;
    let tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
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
            <p className="text-xl md:text-2xl text-white">
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

      {/* New Hero Section (Second Section) */}
      <section className="relative pt-24 pb-20 flex flex-col items-center text-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto z-10 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Experience the Future of Communication
          </h1>
          <p className="mt-6 text-xl sm:text-2xl">
            Revolutionizing how we connect with technology for everyone.
          </p>
          <div className="flex justify-center w-full">
            <Button
              onClick={scrollToTop}
              className="mt-8 px-8 py-4 text-lg flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-l"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Innovative Design</h3>
              <p className="mt-4 text-gray-400">
                We provide cutting-edge designs that enhance user experience.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold">User-Centric</h3>
              <p className="mt-4 text-gray-400">
                Designed with the user in mind for seamless interactions.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Scalable Solutions</h3>
              <p className="mt-4 text-gray-400">
                Our platform grows with your needs, providing scalable
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Join Us Today and Change the Way You Connect
          </h2>
          <Button
            onClick={scrollToTop}
            className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-l"
          >
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Zep. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
