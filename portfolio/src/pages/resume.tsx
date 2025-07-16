import React from "react"
import Head from "next/head"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Dr. Song Square",
    company: "Web Development Project",
    location: "Remote",
    period: "2024",
    description: "Developed and maintained a comprehensive web platform using HTML and LaTeX, achieving significant growth metrics through strategic implementation and team collaboration.",
    achievements: [
      "Achieved 400% growth in platform engagement through optimized user experience",
      "Implemented responsive design using HTML and modern web technologies",
      "Participated in regular team standups and agile development processes",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ]
  },
  {
    title: "Global Youth Leaders Canada",
    company: "Leadership & Mentoring Role",
    location: "Canada",
    period: "2023 - 2024",
    description: "Led strategic initiatives and mentoring programs for a diverse group of young leaders, focusing on personal development and cross-cultural collaboration.",
    achievements: [
      "Mentored and guided 150+ students in leadership development programs",
      "Developed strategic frameworks for youth engagement and skill building",
      "Facilitated cross-cultural communication and collaboration workshops",
      "Implemented mentoring systems that improved participant retention by 60%"
    ]
  },
  {
    title: "Salamat Po Philippines",
    company: "Cross-Cultural Initiative",
    location: "Philippines",
    period: "2022 - 2023",
    description: "Engaged in cross-cultural work focusing on adaptability, communication, and translation services to bridge cultural and linguistic gaps.",
    achievements: [
      "Demonstrated exceptional adaptability in diverse cultural environments",
      "Provided translation services for English-Filipino communication",
      "Built strong relationships across different cultural backgrounds",
      "Developed cultural competency and global perspective through immersive experience"
    ]
  }
]

const education = [
  {
    degree: "M.S. Cybersecurity",
    school: "Stevens Institute of Technology",
    period: "Fall 2025 - Expected 2027",
    description: "Advanced graduate program focusing on cybersecurity principles, network security, and secure application development."
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Western University",
    period: "2021 - 2025",
    description: "Comprehensive undergraduate program with specialization in network protocols, secure application development, and concurrent systems."
  }
]

const skills = [
  { 
    category: "Languages & Tools", 
    items: [
      "Python (network automation, scripting, parsing)", 
      "C (systems programming, concurrency, IPC)",
      "Java (OOP, secure coding basics)", 
      "SQL & PHP (web programming, database security awareness)", 
      "Socket Programming (TCP/UDP)", 
      "Unix System Calls (fork, pipe)", 
      "pthreads (multithreading, synchronization)"
    ] 
  },
  { 
    category: "Concepts", 
    items: [
      "Network Security & Protocols", 
      "Secure Software Development", 
      "Concurrency & Synchronization", 
      "Cryptography Fundamentals", 
      "Web Application Security Awareness"
    ] 
  }
]

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume-md4bjab4.pdf'
    link.download = 'Stephanie_Oh_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Head>
        <title>Resume - Stephanie Oh Portfolio</title>
        <meta name="description" content="View my academic, professional, and leadership experiences. Download my resume for detailed information about my background in cybersecurity and computer science." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 bg-[#e0ecf2]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume & Experience</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Here's a snapshot of my academic, professional, and leadership experiences.
              </p>
              <Button 
                onClick={handleDownload}
                size="lg"
                className="bg-blue-700 hover:bg-blue-800"
              >
                <Download size={20} className="mr-2" />
                Download My Resume (PDF)
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="flex items-center mb-6">
                    <GraduationCap className="text-blue-600 mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                  </div>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{edu.degree}</CardTitle>
                              <p className="text-blue-600 font-medium">{edu.school}</p>
                            </div>
                            <Badge variant="secondary">{edu.period}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{edu.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <Briefcase className="text-blue-600 mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-gray-900">Experience Highlights</h2>
                  </div>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{exp.title}</CardTitle>
                              <p className="text-blue-600 font-medium">{exp.company}</p>
                            </div>
                            <Badge variant="secondary">{exp.period}</Badge>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{exp.description}</p>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
                  <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, i) => (
                              <Badge key={i} variant="outline">{skill}</Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-800">Leadership Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 italic">
                      "I thrive in roles that blend strategic thinking, technical execution, and diverse teamwork."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
