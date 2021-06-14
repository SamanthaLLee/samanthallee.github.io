// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import OpenInNewIcon from '@material-ui/icons/OpenInNew';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table';
import React from 'react';
import { IBillDetails } from '../../models/data';

const tableIcons = {
  // Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  // Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  // Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  // Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  // Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  // FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  // LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  // NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  // PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  // ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  // SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  // ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


interface IBillsTableProps {
  billsData: IBillDetails[]
  tableTitle: string
  stateName: string
}

const columns = [
  {
    title: 'Title', field: 'title', headerStyle: {
      width: '300px',
      maxWidth: '300px'
    }
  },
  { title: 'Last Action Date', field: 'date', width: '50%' },
  { title: 'Status', field: 'textStatus', width: '50%' },
]

// const columns = [
//     { title: 'Title', field: 'title', width: '50%'},
//     { title: 'Last Action Date', field: 'date',width: '50%'},
//     { title: 'Status', field: 'status',width: '50%'},
// ]

// const columns = [
//     { title: 'Title', field: 'title', headerStyle: {width: "25%"}},
//     { title: 'Last Action Date', field: 'date',headerStyle: {width: "10%"}},
//     { title: 'Status', field: 'status',headerStyle: {width: "10%"}},
// ]


// const columns = [
//     { title: 'Title', field: 'title', cellStyle: {
//         width: 90,
//         maxWidth: 90
//       },
//       headerStyle: {
//         width:90,
//         maxWidth: 90
//       }},
//     { title: 'Description', field: 'description', cellStyle: {
//         width: 10,
//         maxWidth: 10
//       },
//       headerStyle: {
//         width:10,
//         maxWidth: 10
//       }},
// ]

const BillsTable = ({ billsData, tableTitle, stateName }: IBillsTableProps) => {
  var newTitle = tableTitle + " in " + stateName
  // console.log(billsData)
  const tableRef = React.createRef();
  return (
    <MaterialTable
      icons={tableIcons}
      tableRef={tableRef}
      columns={columns}
      data={billsData}
      title={newTitle}
      options={{
        tableLayout: "fixed",
        rowStyle: {
          fontSize: 15,
        }
      }}

    // detailPanel={[
    //   {
    //     icon: ExpandMoreIcon,

    //     tooltip: 'Expand',
    //     render: rowData => {
    //       return (
    //         <div style={{
    //           padding: 50
    //         }}>
    //           {rowData.description}
    //         </div>
    //       )
    //     },
    //   },


    // ]}
    // actions={[
    //   {
    //     icon: OpenInNewIcon,
    //     tooltip: 'Open Link',
    //     onClick: (event, rowData) => {
    //       window.open(rowData['url'])
    //     }
    //   }
    // ]}



    />
  )


}

export default BillsTable