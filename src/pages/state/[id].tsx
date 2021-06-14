// import utilStyles from '../../styles/utils.module.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { statusMap } from '../../../static/data/statusMap'
import Layout from '../../components/lgbtq-map/layout'
import PartyTabs from '../../components/lgbtq-map/PartyTabs'
import { getAllStateData, getAllStateIds } from '../../lib/state'
import { IBillDetails } from '../../models/data'

// import stateMappingData from '../../../static/data/allStates'

interface IStatePageProps {
  stateName: string,
  stateData: IBillDetails[]
}
export default function StatePage({
  stateName,
  stateData
}: IStatePageProps) {
  return (
    <Layout>
      <Head>
        <title>{stateName}</title>
      </Head>

      <article>
        <h1>{stateName}</h1>
        <div></div>

        <section>
          <PartyTabs
            stateName={stateName}
            billsData={stateData}
          />

        </section>

        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllStateIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => { // usually for outside source
  const allStateData = await getAllStateData()
  const stateName = allStateData.find(element => element['params']['id'] === params.id)['params']['name'];

  const data = require('../../../static/data/allBills.json'); // pull data field from response w/ {}
  const stateData: IBillDetails[] = data.filter(element => element.state === params.id);

  stateData.forEach(function (item) {
    item['textStatus'] = statusMap[item['status']]
    if (item['textStatus'] == null) {
      item['textStatus'] = ""
    }
  });


  return {
    props: {
      stateName,
      stateData
    }
  }
}
