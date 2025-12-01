import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import docIcon from "@assets/generated_images/abstract_3d_document_intelligence_icon.png";
import complianceIcon from "@assets/generated_images/abstract_3d_compliance_security_icon.png";
import assistantIcon from "@assets/generated_images/abstract_3d_ai_assistant_icon.png";
import devIcon from "@assets/generated_images/abstract_3d_software_development_icon.png";

const services = [
  {
    title: "AI Document Intelligence",
    desc: "Automated document processing using OCR + LLMs to extract, validate, and structure data from PDF, images, and scanned documents.",
    icon: docIcon,
  },
  {
    title: "Compliance & Governance",
    desc: "AI compliance workflows, policy generation, risk detection, governance dashboards, and automated audit logs.",
    icon: complianceIcon,
  },
  {
    title: "AI Assistant Integrations",
    desc: "Smart chatbots and copilots for Customer service, HR onboarding, Finance approvals, and internal knowledge bases.",
    icon: assistantIcon,
  },
  {
    title: "Custom AI & Software",
    desc: "Full-stack AI engineering for Freight management, University administration, Finance systems, and custom workflows.",
    icon: devIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI automation solutions tailored for high-stakes industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardHeader className="relative pb-0">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
