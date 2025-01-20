import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Making technology accessible for everyone
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that technology should be accessible to everyone,
              regardless of their abilities. Our platform is designed to break down
              barriers and create an inclusive digital experience that empowers all
              users.
            </p>
          </div>

          {/* Founders Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Sarah Johnson
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Co-founder & CEO
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With over 15 years of experience in accessibility technology, Sarah
                leads our mission to create inclusive digital solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Michael Chen
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Co-founder & CTO
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                A pioneer in adaptive technology, Michael brings technical expertise
                and innovation to our platform development.
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;