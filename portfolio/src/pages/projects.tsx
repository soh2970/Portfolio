import React from "react"
import Head from "next/head"
import Navigation from "@/components/Navigation"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Stephanie Oh Portfolio</title>
        <meta name="description" content="View my latest projects and work samples. Full stack development projects using React, Next.js, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <main className="pt-16">
        <Projects />
      </main>
      
      <Footer />
    </>
  )
}
