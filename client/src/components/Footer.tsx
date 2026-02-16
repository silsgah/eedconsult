import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "wouter";
import logo from "@assets/EddLogo_1764621333195.jpeg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <img src={logo} alt="Adamani AI" className="h-10 w-auto object-contain bg-white rounded-md p-1" />
            </div>
            <p className="text-gray-400 text-sm">
              Intelligent Automation for the Modern World.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Adamani AI Systems. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy"><a className="hover:text-gray-300">Privacy Policy</a></Link>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
