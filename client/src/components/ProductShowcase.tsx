import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import productVideo from "@assets/product-demo.mp4";

export default function ProductShowcase() {
  const features = [
    "OCR with bounding box visualization",
    "LLM field extraction & parsing",
    "Rule-based validation engines",
    "Document staging workflows",
    "API & comprehensive dashboard",
    "Local LLM support (Llama 3.1 / Mistral)",
  ];

  return (
    <section id="product" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                Production-Ready System
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
                Credit Document OCR System
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                A powerful, production-ready AI system specifically designed for processing loan documents with high accuracy and security. Works offline and integrates directly into your existing infrastructure.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-cyan-400 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold px-8 h-12 text-lg">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Image Visual */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-gray-700 aspect-video group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
                <video 
                  src={productVideo}
                  className="w-full h-full object-cover" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
