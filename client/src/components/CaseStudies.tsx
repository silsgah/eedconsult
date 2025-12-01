import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GraduationCap, Container } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600">Real impact driven by our automation engines.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
            <div className="h-2 bg-blue-600 w-full"></div>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-700">
                <GraduationCap size={28} />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                University Management Automation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600 leading-relaxed">
                We implemented automated transcript processing, student admissions workflow, payment verification systems, and streamlined academic record keeping for a major university, reducing administrative processing time by 70%.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
            <div className="h-2 bg-cyan-600 w-full"></div>
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 text-cyan-700">
                <Container size={28} />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Freight & Logistics AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600 leading-relaxed">
                Developed an automated cargo document processing system that extracts data from waybills, invoices, and container clearance forms. This solution accelerated customs clearance and reduced manual data entry errors by 95%.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
