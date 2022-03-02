import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
// import { Tooltip } from "@material-ui/core";


const columns = [
  {
    name: "Year",
    selector: "Year",
    grow: 1.2,
    cell: column =>
    (<div data-tag="allowColumnEvents">
      <div style={{ fontWeight: "bold", color:"#467880" }}>
        {column.Year}
      </div>
    </div>)
  },
  {
    name: "2016-17",
    selector: "2016-17",
    sortable: true,
    format: data => data["2016-17"].toLocaleString('en-IN'),
    conditionalCellStyles: [
          {
            when: row => (row["2016-17"] === 15.54),
            style: {
              backgroundColor: '#FFF89A',
              color: 'black',
              '&:hover': {
                cursor: 'pointer',
              },
            },
          },
        ]
  },
  {
    name: "2017-18",
    selector: "2017-18",
    sortable: true,
    format: data => data["2017-18"].toLocaleString('en-IN')
  },
  {
    name: "2018-19",
    selector: "2018-19",
    sortable: true,
    format: data => data["2018-19"].toLocaleString('en-IN')
  },
  {
    name: "2019-20",
    selector: "2019-20",
    sortable: true,
    format: data => data["2019-20"].toLocaleString('en-IN')
  },
  {
    name: "2020-21",
    selector: "2020-21",
    sortable: true,
    format: data => data["2020-21"].toLocaleString('en-IN'),
    conditionalCellStyles: [
      {
        when: row => (row["2020-21"] === "-4.27"),
        style: {
          backgroundColor: '#FFF89A',
          color: 'black',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    ]
  },



  // {
  //   name: <Tooltip
  //     placement="top-end"
  //     title="Source: All India GDP figures from Economic Survey 2019-20, Government of Karnataka.">
  //     <span className="diff">India's GDP in crore*</span>
  //   </Tooltip>,
  //   selector: "India's GDP* in crore",
  //   sortable: true,
  //   right: true,
  //   format: data => data["India's GDP* in crore"].toLocaleString('en-IN', { style: 'currency', currency: 'INR' }),
  // },
  // {
  //   name: "Growth rate in per cent",
  //   selector: "Growth rate in per cent",
  //   sortable: true,
  //   right: true,
  //   format: data => data["Growth rate in per cent"].toLocaleString('en-IN'),
  //   conditionalCellStyles: [
  //     {
  //       when: row => row["Growth rate in per cent"] <= 11 && row["Growth rate in per cent"] > 10.5,
  //       style: {
  //         backgroundColor: 'rgba(153, 165, 128, 0.9)',
  //         color: 'white',
  //         '&:hover': {
  //           cursor: 'pointer',
  //         },
  //       },
  //     },
  //   ]
  // },
  // {
  //   name: <Tooltip
  //     placement="top-end"
  //     title="Source: GSDP figures are as available on 31.07.2020 in the website of Ministry of Statistics and Programme Implementation">
  //     <span className="diff">State's GSDP in crore*</span>
  //   </Tooltip>,
  //   selector: "State's GSDP* in crore",
  //   sortable: true,
  //   right: true,
  //   format: data => data["State's GSDP* in crore"].toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
  // },
  // {
  //   name: "Growth rate in per cent",
  //   selector: "Growth rate in per cent__1",
  //   sortable: true,
  //   right: true,
  //   format: data => data["Growth rate in per cent__1"].toLocaleString('en-IN')
  // },
];

// const conditionalRowStyles = [
//   {
//     when: row => row["2020-21"] < 0,
//     style: (row) => ({
//       backgroundColor: row["2020-21"] ? 'rgba(63, 195, 128, 0.9)' : "#ac8",
//       color: 'yellow',
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
      textAlign: "center"
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
        borderRightColor: "black"
      },
      fontSize: '14px',
      fontWeight: '500',
      textTransform: 'uppercase',
      backgroundColor:"#f0dca5"
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
    },
  },
};


const Table1 = () => {

  const ctx = useContext(MyContext)

  console.log(ctx.tables1)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title={"1.1 " + ctx.tables1.T1H1}
          columns={columns}
          data={ctx.tables1.Table1}
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