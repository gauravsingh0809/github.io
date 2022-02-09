import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { Tooltip } from "@material-ui/core";


const columns = [
  {
    name: "Year",
    selector: "Year",
    sortable: true,
    grow: 0.5,
    // cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight: "bold" }}>{row.Year}</div>{row.Year}</div>
  },
  {
    name: <Tooltip
      placement="top-end"
      title="Source: All India GDP figures from Economic Survey 2019-20, Government of Karnataka.">
      <span className="diff">India's GDP in crore*</span>
    </Tooltip>,
    selector: "India's GDP* in crore",
    sortable: true,
    right: true,
    format: data => data["India's GDP* in crore"].toLocaleString('en-IN', { style: 'currency', currency: 'INR' }),
  },
  {
    name: "Growth rate in per cent",
    selector: "Growth rate in per cent",
    sortable: true,
    right: true,
    format: data => data["Growth rate in per cent"].toLocaleString('en-IN'),
    conditionalCellStyles: [
      {
        when: row => row["Growth rate in per cent"] <= 11 && row["Growth rate in per cent"] > 10.5,
        style: {
          backgroundColor: 'rgba(153, 165, 128, 0.9)',
          color: 'white',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    ]
  },
  {
    name: <Tooltip
      placement="top-end"
      title="Source: GSDP figures are as available on 31.07.2020 in the website of Ministry of Statistics and Programme Implementation">
      <span className="diff">State's GSDP in crore*</span>
    </Tooltip>,
    selector: "State's GSDP* in crore",
    sortable: true,
    right: true,
    format: data => data["State's GSDP* in crore"].toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
  },
  {
    name: "Growth rate in per cent",
    selector: "Growth rate in per cent__1",
    sortable: true,
    right: true,
    format: data => data["Growth rate in per cent__1"].toLocaleString('en-IN')
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


const Table1 = () => {

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
          title="Table 1.1 Trends in GSDP compared to the National GDP"
          columns={columns}
          data={ctx.reportData.Tables.Table1}
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

export default Table1;
