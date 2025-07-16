import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Stephanie Oh</h3>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Stephanie Oh. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/soh2970" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/seeyeon-stephanie-oh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/_steph.oh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}