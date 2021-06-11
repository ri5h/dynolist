import { GetServerSideProps, GetStaticProps, GetStaticPropsContext } from 'next'
import Layout from '../components/Layout'
// import getSettings from '../lib/getSettings'
// import getListOfItems from '../lib/getListOfItems'
// import ListOfItems from '../components/ListOfItems'
import { getContent } from '../lib/airtable'

type IndexProps = {
  // settings: SiteSettings,
  // listOfItems: ListOfItemsProps,
  content: Content
}

export default function index({ /**settings, listOfItems,*/ content }: IndexProps) {

  return (
    <Layout title="Home" /** settings={settings} */ content={content}>
      {/* <ListOfItems {...listOfItems} /> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  // const settings = await getSettings()
  // const listOfItems = {
  //   items: await getListOfItems()
  // }

  const content = await getContent()
  console.log(content)

  return {
    props: {
      // settings,
      // listOfItems,
      content,
    },
    revalidate: 60 * 5 // At most once every 5 minutes
  }
}