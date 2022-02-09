import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
      name: "ವರ್ಷ",
      selector: "ವರ್ಷ",
      wrap: true,
  },
  
  {
      name: "2015-16",
      selector: "2015-16",
      // grow:0.05,
      wrap: true,
      format: data => data["2015-16"].toLocaleString('en-IN')
  },
  {
      name: "2016-17",
      selector: "2016-17",
      // grow: 0.05,
      wrap: true,
      format: data => data["2016-17"].toLocaleString('en-IN')
  },
  {
      name: "2017-18",
      selector: "2017-18",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2017-18"].toLocaleString('en-IN')
  },
  {
      name: "2018-19",
      selector: "2018-19",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2018-19"].toLocaleString('en-IN')
  },
  {
      name: "2019-20",
      selector: "2019-20",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2019-20"].toLocaleString('en-IN')
  },   
];

// const conditionalRowStyles = [
//   {
//     when: row => row["India's GDP* in crore"] < 15000000,
//     style: (row) => ({
//       backgroundColor: row["India's GDP* in crore"] ? 'rgba(63, 195, 128, 0.9)' : "#fff",
//       color: 'white',
//       '&:hover': {
//         cursor: 'pointer',
//       },
//     }),
//   },
//   {
//     when: row => row["State's GSDP* in crore"] >= 1600000,
//     style: {
//       backgroundColor: '#dcad0e',
//       color: 'white',
//       '&:hover': {
//         cursor: 'not-allowed',
//       },
//     },
//   },
// ];

const customStyles = {
  header: {
    style: {
      fontSize: '22px',
      color: '#fff',
      backgroundColor: '#ff6359',
      minHeight: '56px',
      textAlign: "center",
      // paddingLeft: '170px',
      // paddingRight: '8px',
    },
  },
  rows: {
    style: {
      minHeight: '50px', // override the row height
    }
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: "black",
      },
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'uppercase',
      padding: '10px'
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: '#aaa',
      },
      fontSize: '14px',
      paddingLeft: '8px',
      // backgroundColor: 'rgba(255,255,255,0)',
    },
  },
};


const Table1kan = () => {

  const ctx = useContext(MyContext)

  // if (!tables.length) {
  //   getFirebase()
  //     .database()
  //     .ref("/Tables2/Table1")
  //     .on("value",
  //     function(snapshot) {
  //       const snapshotVal = snapshot.val();
  //       setTables(Object.values(snapshotVal));
  //     });
  // }

  // console.log(ctx.reportData.Tables2.Table1)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.1 kannada: Changes in key fiscal aggregates in 2019-20 
          compared to 2018-19"
          columns={columns}
          data={ctx.reportData.chap2tableskan.demo}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
}

export default Table1kan;
