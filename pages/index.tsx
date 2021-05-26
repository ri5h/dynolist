import { GetStaticProps, GetStaticPropsContext } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'
import getSettings from '../lib/getSettings'

type IndexProps = {
  settings: SiteSettings
}

export default function index({ settings }: IndexProps) {
  return (
    <Layout title="Home" settings={settings}>
      <h1>Hello Next.js 🤪</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const settings = await getSettings();
  console.log("index:", settings)
  return {
    props: {
      settings
    }
  }
}