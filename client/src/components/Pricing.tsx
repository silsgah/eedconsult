import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricing = [
  {
    name: "Starter",
    target: "For SMEs",
    price: "Contact Us",
    features: [
      "Single-server deployment",
      "Up to 10,000 documents/mo",
      "Local LLM included",
      "API access",
      "Basic dashboard",
    ],
    highlight: false,
  },
  {
    name: "Business",
    target: "For Growth",
    price: "Custom",
    features: [
      "Multi-service deployment",
      "OCR + LLM + API + Database",
      "100,000 documents/mo",
      "Custom workflows",
      "User management",
      "Support & maintenance",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    target: "For Scale",
    price: "Custom",
    features: [
      "Unlimited document volume",
      "On-premise deployment",
      "Bank-grade security",
      "Integration with IBM/Azure",
      "Custom AI models",
      "Dedicated support & SLA",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            SaaS Hosting & Deployment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible deployment options designed for your security and scalability needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col border ${
                  plan.highlight
                    ? "border-primary shadow-xl scale-105 z-10 relative"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                <CardHeader className="text-center pb-8">
                  <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                    {plan.target}
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button
                    className={`w-full h-12 text-base font-semibold ${
                      plan.highlight
                        ? "bg-primary hover:bg-blue-700 text-white"
                        : "bg-white border border-primary text-primary hover:bg-blue-50"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
