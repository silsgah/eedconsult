import { motion } from "framer-motion";
import { Building2, Landmark, HeartPulse, GraduationCap, UtensilsCrossed } from "lucide-react";

const clients = [
    { name: "Ministry of Health", icon: HeartPulse },
    { name: "Ministry of Finance", icon: Landmark },
    { name: "MSC-Medlog", icon: Building2 },
    { name: "Entrance University", icon: GraduationCap },
    { name: "Fizzle Foods", icon: UtensilsCrossed },
];

// Double the list for seamless infinite scroll
const duplicated = [...clients, ...clients];

export default function Clients() {
    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
                    Trusted Partners
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Our Major Clients
                </h2>
            </div>

            {/* Infinite scrolling marquee */}
            <div className="relative w-full">
                {/* Gradient fades on edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent" />

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicated.map((client, i) => {
                        const Icon = client.icon;
                        return (
                            <div
                                key={`${client.name}-${i}`}
                                className="flex-shrink-0 flex items-center gap-3 bg-white rounded-xl shadow-sm border border-gray-100 px-8 py-5 hover:shadow-md hover:border-primary/20 transition-all duration-300 min-w-[240px]"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon size={20} className="text-primary" />
                                </div>
                                <span className="text-base font-semibold text-gray-800 whitespace-nowrap">
                                    {client.name}
                                </span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
