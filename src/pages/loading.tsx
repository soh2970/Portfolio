
import React from "react"
import Head from "next/head"
import LoadingPage from "@/components/LoadingPage"

export default function Loading() {
  return (
    <>
      <Head>
        <title>Loading - Stephanie Oh Portfolio</title>
        <meta name="description" content="Loading Stephanie Oh's cybersecurity portfolio..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <LoadingPage />
    </>
  )
}
