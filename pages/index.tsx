import Layout from '../components/Layout'
import Link from 'next/link'


const index = () => {
  return (
    <Layout title="Home | Next.js is Awesome">
      <h1>Hello Next.js 🤪</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default index
