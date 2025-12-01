import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Zap, Globe, Server, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "Modern AI Infrastructure",
    desc: "Built on the latest reliable AI models and architecture.",
  },
  {
    icon: Server,
    title: "Fully Offline Capable",
    desc: "Runs locally. No data leaves your servers. Max privacy.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    desc: "Get up and running in 24-48 hours, not months.",
  },
  {
    icon: Globe,
    title: "Global & Local Support",
    desc: "Local support in Africa plus global service availability.",
  },
  {
    icon: ShieldCheck,
    title: "Customizable",
    desc: "Tailored specifically for your industry workflows.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    desc: "A powerful alternative to expensive enterprise AI suites.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Why Choose Adamani
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-primary">
                <reason.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
