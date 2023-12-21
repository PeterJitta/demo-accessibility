import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Link href="/before" >
        Before
      </Link>

      <Link href="/after" >
        After
      </Link>
    </section>
  )
}
