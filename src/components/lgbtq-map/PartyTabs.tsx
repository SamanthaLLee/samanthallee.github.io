import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IBillDetails } from '../../models/data';
import BillsTable from './BillsTable';

interface IPartyTabsProps {
  billsData: IBillDetails[]
  stateName: string
}

const PartyTabs = ({ billsData, stateName }: IPartyTabsProps) => {

  const democratBills = billsData.filter(bill => bill.party === 'D')
  const republicanBills = billsData.filter(bill => bill.party === 'R')
  const thirdPartyBills = billsData.filter(bill => bill.party != '' && bill.party != null && bill.party != 'D' && bill.party != 'R')
  const unknownBills = billsData.filter(bill => bill.party === '' || bill.party == null)

  return (
    <Tabs>
      <TabList>
        <Tab>Democrat</Tab>
        <Tab>Republican</Tab>
        <Tab>Third Party</Tab>
        <Tab>Unknown</Tab>
      </TabList>

      <TabPanel>
        <BillsTable
          billsData={democratBills}
          tableTitle="Democrat-Supported Bills"
          stateName={stateName}
        />
      </TabPanel>
      <TabPanel>
        <BillsTable
          billsData={republicanBills}
          tableTitle="Republican-Supported Bills"
          stateName={stateName}
        />
      </TabPanel>
      <TabPanel>
        <BillsTable
          billsData={thirdPartyBills}
          tableTitle="Third Party-Supported Bills"
          stateName={stateName}
        />
      </TabPanel>
      <TabPanel>
        <BillsTable
          billsData={unknownBills}
          tableTitle="Bills with Unknown Support"
          stateName={stateName}
        />
      </TabPanel>
    </Tabs>
  )
};

export default PartyTabs //only one component here