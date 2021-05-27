import { GetStaticProps, GetStaticPropsContext } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'
import getSettings from '../lib/getSettings'
import getListOfItems from '../lib/getListOfItems'
import ListOfItems from '../components/ListOfItems'

type IndexProps = {
  settings: SiteSettings,
  listOfItems: ListOfItemsProps

}

export default function index({ settings, listOfItems }: IndexProps) {

  return (
    <Layout title="Home" settings={settings}>
      <ListOfItems {...listOfItems} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const settings = await getSettings()
  const listOfItems = {
    items: await getListOfItems()
  }

  return {
    props: {
      settings,
      listOfItems
    }
  }
}