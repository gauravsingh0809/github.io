import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
// import { Tooltip } from "@material-ui/core";


const columns = [

 
    // conditionalCellStyles: [
    //   {
    //     when: row => (row["2016-17"] === 15.54),
    //     style: {
    //       backgroundColor: '#FFF89A',
    //       color: 'black',
    //       '&:hover': {
    //         cursor: 'pointer',
    //       },
    //     },
    //   },
    // ]
    {
        name: "Sl. No.",
        selector: "Sl",
        wrap:true,
        width:"100px",
        
      },
      {
        name: "Name of SPSE",
        selector: "Name of SPSE",
        sortable: true,
        wrap:true,
        
      },
      {
        name: "Latest year of finalized Accounts",
        selector: "Latest year of finalized Accounts",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "Total paid up capital",
        selector: "Total paid up capital",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "Net profit (+)/Loss  (-) after Interest, tax and dividend",
        selector: "Net profit (+)/Loss  (-) after Interest, tax and dividend",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "Accumulated losses",
        selector: "Accumulated losses",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "Net worth",
        selector: "Net worth",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "State Government Equity as on 31 March 2022",
        selector: "State Government Equity as on 31 March 2022",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "State Government Loans as on 31 March 2022",
        selector: "State Government Loans as on 31 March 2022",
        sortable: true,
        wrap:true,
        
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
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablee4 = () => {

  const ctx = useContext(MyContext)

  console.log(ctx.tables1)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Appendix 5.4
          Details of SPSEs whose Net worth has eroded as per their latest finalized accounts
           (Reference: Paragraph-5.8.2; )
          
          "
          
          columns={columns}
          data={ctx.tables1.Tablee4}
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

export default Tablee4;
