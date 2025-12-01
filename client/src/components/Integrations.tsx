import { 
  Database, 
  Cloud, 
  Box, 
  Server, 
  FileJson, 
  Globe,
  Truck,
  GraduationCap
} from "lucide-react";

const integrations = [
  { name: "IBM Watson", icon: Server },
  { name: "Microsoft Azure AI", icon: Cloud },
  { name: "AWS Textract", icon: Box },
  { name: "FastAPI / REST", icon: Globe },
  { name: "Ollama", icon: Database },
  { name: "PostgreSQL", icon: FileJson },
  { name: "Logistics Software", icon: Truck },
  { name: "University Portals", icon: GraduationCap },
];

export default function Integrations() {
  return (
    <section className="py-16 bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-10">
          Seamlessly Integrates With
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
          {integrations.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-xl bg-gray-800 group-hover:bg-gray-700 transition-colors border border-gray-700">
                <item.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <span className="text-sm font-medium text-gray-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
