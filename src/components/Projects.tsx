import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Python Distance Vector Routing",
    description: "Simulates the Distance Vector routing algorithm using Bellman Ford to compute shortest paths across a network. Demonstrates foundational understanding of dynamic routing protocols critical for secure, resilient networks.",
    highlights: [
      "Implemented Bellman Ford to update routing tables dynamically",
      "Modeled multi node network graph structures in Python",
      "Explored protocol design considerations for scalability and fault tolerance"
    ],
    tags: ["Python", "Networking", "Algorithms"],
    categories: ["Networking"],
    github: "https://github.com/soh2970/Python-distance-vector-routing",
    live: null,
  },
  {
    id: 2,
    title: "Python Chatroom",
    description: "Built a multi client chatroom application supporting TCP and UDP protocols with message broadcasting. Highlights secure, concurrent communication in networked systems.",
    highlights: [
      "Developed socket based server client architecture with Python sockets",
      "Supported both TCP (reliable) and UDP (fast) message delivery",
      "Managed multiple simultaneous clients, demonstrating concurrency and message handling"
    ],
    tags: ["Python", "Sockets", "TCP/UDP"],
    categories: ["Networking", "Concurrency"],
    github: "https://github.com/soh2970/Python-chatroom",
    live: null,
  },
  {
    id: 3,
    title: "C Password Cracking Fork",
    description: "Designed a fork based parallel brute force password cracker in C, dividing workload among child processes for efficient password discovery, underscoring the importance of secure password practices.",
    highlights: [
      "Leveraged Unix fork() system calls for parallelism across multiple processes",
      "Managed process synchronization and termination to maximize throughput",
      "Illustrated the real world risks of weak passwords and necessity for secure hashing"
    ],
    tags: ["C", "Unix", "Parallel Processing"],
    categories: ["Security", "Concurrency"],
    github: "https://github.com/soh2970/C-password-cracking-fork",
    live: null,
  },
  {
    id: 4,
    title: "C Multithreaded Ticket Booking",
    description: "Implemented a concurrent ticket booking system in C using mutex locks, ensuring consistent seat reservations under high load, a core concept in building secure, thread safe applications.",
    highlights: [
      "Used pthread library for multithreaded execution",
      "Applied mutex locks to prevent race conditions and ensure data integrity",
      "Simulated real world booking scenarios with concurrent customer requests"
    ],
    tags: ["C", "Pthreads", "Mutex"],
    categories: ["Concurrency"],
    github: "https://github.com/soh2970/C-multithreaded-ticket-booking",
    live: null,
  },
  {
    id: 5,
    title: "Python HTTP Server",
    description: "Created a basic HTTP server in Python supporting GET and POST requests, serving static files and dynamic HTML responses, a foundational step towards understanding secure web application delivery.",
    highlights: [
      "Handled HTTP methods and response headers manually using Python sockets",
      "Parsed HTTP requests to serve files and process client input",
      "Reinforced core concepts in web protocols and secure request handling"
    ],
    tags: ["Python", "HTTP", "Web Server"],
    categories: ["Networking", "Security"],
    github: "https://github.com/soh2970/Python-http-server",
    live: null,
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Security", value: "Security" },
  { label: "Concurrency", value: "Concurrency" },
  { label: "Networking", value: "Networking" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  const getFilterButtonStyle = (filterValue: string, isActive: boolean) => {
    if (isActive) {
      switch (filterValue) {
        case "all": return "bg-blue-900 hover:bg-blue-800";
        case "Security": return "bg-blue-700 hover:bg-blue-800";
        case "Concurrency": return "bg-blue-600 hover:bg-blue-700";
        case "Networking": return "bg-blue-500 hover:bg-blue-600";
        default: return "bg-blue-900 hover:bg-blue-800";
      }
    } else {
      switch (filterValue) {
        case "all": return "border-blue-900 text-blue-900 hover:bg-blue-50";
        case "Security": return "border-blue-700 text-blue-700 hover:bg-blue-50";
        case "Concurrency": return "border-blue-600 text-blue-600 hover:bg-blue-50";
        case "Networking": return "border-blue-500 text-blue-500 hover:bg-blue-50";
        default: return "border-blue-900 text-blue-900 hover:bg-blue-50";
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#e0ecf2]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Cybersecurity and systems programming projects demonstrating expertise in network protocols, 
            secure application development, and concurrent systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterOptions.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className={getFilterButtonStyle(filter.value, activeFilter === filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <h4 className="font-semibold text-gray-900 mb-3">Technical Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="bg-gray-50 flex justify-between">
                <Button asChild variant="default" className="bg-blue-800 hover:bg-blue-900">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
                {project.live && (
                  <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
