import Head from 'next/head'
import React, { useState } from 'react'
// import { statusMap } from '../../static/data/statusMap'
import Layout, { siteTitle } from '../components/lgbtq-map/layout'
import { getAllStateData } from '../lib/state'
import { IBillDetails } from '../models/data'


export default function Home({ allStateIds, natData, numBills }) {
    const [content, setContent] = useState("");
    const mapChartProps = {
        numBills: { numBills },
        allStateIds: { allStateIds },
        setTooltipContent: { setContent }
    }
    console.log("allStateIds")
    // console.log(statusMap)

    return (
        <Layout home>
            <Head>
                <title>{siteTitle} </title>
            </Head>
            < section className="headingLg" >
                <p>Welcome to the <b> LGBTQ + Policy Map! </b></p >
            </section>

            <section>
                <p>LGBTQ + rights remain heavily contested across America,
                and the purpose of this app is to provide a visual breakdown of legislative activity by state.
    For more details, click a state or check out the < a href="/about" > about page</a>.</p>
            </section>

            <section>
                {/* <MapChart {...mapChartProps}> </MapChart> */}
            </section>

            < section className="headingMd" >
                {/* <p>National Bills </p>
                < PartyTabs
                    billsData={natData}
                    stateName='the US'
                /> */}
            </section>

        </Layout>
    )
}

export async function getStaticProps() {
    const allStateIds = getAllStateData()
    const data = require('../../static/data/allBills.json'); // pull data field from response w/ { }
    const natData: IBillDetails[] = data.filter(element => element.state === 'US');
    const numBills = {}

    allStateIds.forEach(function (item) {
        numBills[item['params']['id']] = data.filter(element => element.state === item['params']['id']).length
    });

    natData.forEach(function (item) {
        // item['textStatus'] = statusMap[item['status']]
    });

    return {
        props: {
            allStateIds,
            natData,
            numBills
        },
    }
}

// export const query = graphql`
//   query q {
//     allStateIds {
//         edges {
//             node {
//                 id
//                 val
//                 stateName
//             }
//         }
//     }
//   }
// `
