
import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephanie Oh - Cybersecurity Enthusiast</title>
        <meta name="description" content="Cybersecurity enthusiast securing applications and infrastructures with creativity, discipline, and global insight." />
        <meta name="keywords" content="cybersecurity, application security, cloud security, portfolio, stephanie oh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <main>
        <Hero />
      </main>
      
      <Footer />
    </>
  );
}
