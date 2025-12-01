import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroBg from "@assets/generated_images/deep_blue_abstract_data_network_hero_background.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-gray-50/50 to-gray-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Next-Gen Enterprise AI
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 leading-[1.1] mb-6">
              AI-Powered Automation for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">
                Finance, Logistics & Education
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We build intelligent systems that eliminate manual work, reduce
              errors, and accelerate decision-making for businesses globally.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-blue-700 text-white text-lg px-8 h-14 w-full sm:w-auto shadow-lg shadow-blue-200"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                See Live Demo
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
