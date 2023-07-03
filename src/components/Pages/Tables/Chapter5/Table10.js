import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
import { Tooltip } from "@material-ui/core";



const columns = [
  {
    name: "Year",
    selector: "Year",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "No of loss making SPSEs",
    selector: "No of loss making SPSEs",
    sortable: true,
    wrap: true,
  },
  {
    name: "Net loss for the year",
    selector: "Net loss for the year",
    sortable: true,
    wrap: true,
  },
  {
    name: "Accumulated loss",
    selector: "Accumulated loss",
    sortable: true,
    wrap: true,
  },
  {
    name: <Tooltip
         placement="top-end"
         title="Net worth means the sum total of the paid-up share capital and free reserves and surplus less accumulated loss and deferred revenue expenditure. Free reserves mean all reserves created out of profits and share premium account but do not include reserves created out of revaluation of assets and write back of depreciation provision">
         <span className="diff">Net Worth</span>
       </Tooltip>,
    selector: "Net Worth",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Activity"] === 'Total' ,
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table10 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T10H1 }
               columns={columns}
               data={ctx.tables5.Table10}
                customStyles={customStyles}
                striped
                conditionalRowStyles={conditionalRowStyles}
                highlightOnHover
                pointerOnHover
                // pagination
            />
        </Card>
    </div>
);
}

export default Table10;
