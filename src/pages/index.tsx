import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import ContactUs from '../components/ContactUs'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Feature from '../components/Feature'

export default function Home() {
  
  return (
    <>
      <Layout>
        <Hero />
        <Feature />
        <Blog />
        <ContactUs />
      </Layout>
    </>
  )
}
