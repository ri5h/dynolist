import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function index() {
  return (
    <Layout title="Home">
      <h1>Hello Next.js 🤪</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}
