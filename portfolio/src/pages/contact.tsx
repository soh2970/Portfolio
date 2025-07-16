// src/pages/contact.tsx
import Head from "next/head"
import Navigation from "@/components/Navigation"
import { Contact } from "@/components/Contact"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch with me." />
      </Head>
      <Navigation />
      <Contact />
      <Footer />
    </div>
  )
}
  