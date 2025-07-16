import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#e0ecf2]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-[-12px] rounded-full animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#7a9ec7] via-[#e0ecf2] to-[#7a9ec7] opacity-90 blur-xl"></div>
              </div>
              <div className="absolute inset-[-8px] rounded-full animate-pulse">
                <div className="w-full h-full rounded-full bg-[#7a9ec7] opacity-70 blur-lg"></div>
              </div>
              <div className="absolute inset-[-4px] rounded-full">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#7a9ec7] via-transparent to-[#7a9ec7] opacity-50 blur-md animate-pulse"></div>
              </div>
              <Image
                src="/screenshot-2025-05-15-at-10-39-11-am-md468eil.png"
                alt="Stephanie Oh"
                width={200}
                height={200}
                className="relative rounded-full object-cover border-4 border-white shadow-2xl w-48 h-48 md:w-56 md:h-56 z-10"
              />
            </div>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Cybersecurity enthusiast securing applications and infrastructures with creativity, discipline, and global insight.
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Hi, I'm Stephanie Oh. I'm currently pursuing my M.S. in Cybersecurity at Stevens Institute of Technology, with a B.Sc. in Computer Science from Western University. I specialize in network protocols, secure application development, and concurrency. Also passionate about advancing cloud and application security.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond code, you'll find me on the violin stage, golf course, or exploring creativity through painting.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
