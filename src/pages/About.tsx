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
              regardless of their abilities. Our platform is designed to break
              down barriers and create an inclusive digital experience that
              empowers all users.
            </p>
          </div>

          {/* Founders Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Pratik Rai
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Co-founder & CEO
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With his expertise in Blockchain & Distributed Systems Pratik
                pushes our goal to achieve the accessverse for.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Himanshu Chavan
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Co-founder & CTO
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                A pioneer in adaptive technology, Himanshu brings technical
                expertise and innovation to our platform development.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Archit Gulhane
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Co-founder & Chief Architect
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                A visionary in system design and software architecture, Archit
                is responsible for shaping the technical blueprint of our
                platform. With a keen eye for scalability and performance, he
                leads the team in creating robust, adaptable, and innovative
                technical solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Adi Bais
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Co-founder & VP of Engineering
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With years of experience in managing engineering teams and
                delivering high-quality products, Adi leads the engineering
                department with passion and precision. His focus on fostering
                collaboration, driving technical excellence, and ensuring timely
                delivery is key to the success of our platform.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg animate-fade-in ">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Saransh Vaidya
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Co-founder & Chief Product Officer
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Saransh blends technical proficiency with user-centered design
                to bring out the best in product development. As the driving
                force behind product strategy, she ensures the vision aligns
                with market needs, delivering seamless and engaging experiences
                to our users.
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
