import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import ContactUs from '../components/ContactUs'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

export default function Home() {
  
  return (
    <>
      <Layout>
        <Hero />
        <Feature />
        <ContactUs />
      </Layout>
    </>
  )
}
