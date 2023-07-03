import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Year",
        selector: "Year",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Total number of loans",
        selector: "Total number of loans",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Total number of loans"].toLocaleString('en-IN')
    },
    {
        name: "Total Amount",
        selector: "Total Amount",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Total Amount"].toLocaleString('en-IN')
    },
    {
        name: "Terms and conditions awaited at the year end",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["1"].toLocaleString('en-IN')
    },
    {
      name: "Terms and conditions awaited at the year end",
      selector: "2",
      // grow:0.05,
      wrap: true,
      //format: data => data["2020 21"].toLocaleString('en-IN')
  },
  {
    name: "Terms and conditions awaited as on March 2022",
    selector: "3",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    //format: data => data["2021 22"].toLocaleString('en-IN')
},
{
    name: "Terms and conditions awaited as on March 2022",
    selector: "4",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    //format: data => data["2021 22"].toLocaleString('en-IN')
}
];


const customStyles = styles;

const Table25a = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.25: Details of Loans given by State Government from 
                    2019-20 to 2021-22"
                    columns={columns}
                    data={ctx.tables2.Table25a}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table25a;
