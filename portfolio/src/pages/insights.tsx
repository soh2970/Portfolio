import React from "react"
import Head from "next/head"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Users, Cloud } from "lucide-react"
import Link from "next/link"

const insights = [
  {
    title: "Why securing applications is about people as much as code",
    content: `When I started exploring cybersecurity, I thought it was purely about fortifying systems against technical attacks. But the more I learn, the clearer it becomes that securing applications is fundamentally about protecting people: their data, their privacy, their trust.

My passion for this field deepened even more when I came across the news of the SK Telecom USIM leak in South Korea. Seeing how millions of people's sensitive information could be exposed due to security oversights made it painfully clear that behind every breach headline are real individuals whose lives can be disrupted or harmed.

Whether I'm working on a parallel password cracker in C or building socket based chat applications, I always think about how misuse could impact users. Secure design is about anticipating how systems might be exploited and building defenses that protect real lives and reputations. It's also about communicating risks clearly, so that teams and users can make informed decisions.

At the end of the day, cybersecurity isn't just a technical problem. It's a human responsibility.`,
    icon: Shield,
    readTime: "5 min read",
    tags: ["Cybersecurity", "Ethics", "Application Security"]
  },
  {
    title: "Concurrency lessons from building a multithreaded ticket system",
    content: `One of my favorite projects was creating a multithreaded ticket booking system in C. Using pthreads and mutex locks, I had to ensure that multiple users could book seats without collisions or overbookings.

It taught me firsthand how complex concurrency can get. Race conditions and deadlocks aren't just academic concepts, they're real risks that can break trust and compromise data integrity in applications people rely on. This experience deepened my appreciation for designing secure, robust systems that handle concurrency gracefully, something that's just as important in web apps and cloud platforms.

It's small projects like this that give me a practical mindset toward building reliable software in high stakes environments.`,
    icon: Users,
    readTime: "4 min read",
    tags: ["Concurrency", "C Programming", "System Design"]
  },
  {
    title: "What excites me about cloud security: scalability & shared responsibility",
    content: `As I prepare for a career in cloud and application security, what excites me most is the scale and collaborative nature of the cloud. Unlike traditional environments, securing cloud infrastructure means thinking about multi tenant systems, data in transit across the globe, and managing security as a shared responsibility between provider and customer.

I love that cloud security is never static. It pushes you to stay ahead of evolving threats and to architect solutions that are both scalable and resilient. More than anything, I'm drawn to the idea that by securing cloud ecosystems, I can help protect countless businesses and individuals at once, magnifying the impact of thoughtful, secure design.`,
    icon: Cloud,
    readTime: "6 min read",
    tags: ["Cloud Security", "Scalability", "Infrastructure"]
  }
]

export default function InsightsPage() {
  return (
    <>
      <Head>
        <title>Insights - Stephanie Oh Portfolio</title>
        <meta name="description" content="Read my thoughts on cybersecurity, application security, and systems programming. Insights from a cybersecurity enthusiast passionate about protecting people through secure code." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 bg-[#e0ecf2]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Thoughts on cybersecurity, application security, and systems programming from a passionate advocate for secure, people-centered technology.
              </p>
            </div>

            <div className="space-y-12">
              {insights.map((post, index) => {
                const IconComponent = post.icon
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="text-blue-600" size={24} />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </div>
                          <CardTitle className="text-2xl mb-3">{post.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-gray max-w-none">
                        {post.content.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="text-gray-600 mb-4 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-16">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Want to discuss these topics?</h3>
                <p className="text-gray-600 mb-6">
                  I'm always excited to connect with fellow cybersecurity enthusiasts and discuss the intersection of technology, security, and human impact.
                </p>
                <Button asChild className="bg-blue-900 hover:bg-blue-800">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
