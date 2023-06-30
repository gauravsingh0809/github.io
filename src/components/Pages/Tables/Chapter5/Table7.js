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
    name: "Interest (`in crore)",
    selector: "_1",
    sortable: true,
    wrap: true,
  },
  {
    name: "Earnings before interest and tax (EBIT)(` in crore)",
    selector: "_2",
    sortable: true,
    wrap: true,
  },
  {
    name: "Number of SPSEs having liability of loans from Government, and other financial institutions",
    selector: "_3",
    sortable: true,
    wrap: true,
  },
  {
    name: <Tooltip
         placement="top-end"
         title="This doesn’t include PSUs which have loan liability but interest coverage ratio couldn’t be calculated due to nil value either in interest expenses or EBIT.">
         <span className="diff">Number of companies having
                interest coverage ratio more than 1 </span>
       </Tooltip>,
    selector: "_4",
    sortable: true,
    wrap: true,
  },
  {
    name: <Tooltip
         placement="top-end"
         title="This doesn’t include PSUs which have loan liability but interest coverage ratio couldn’t be calculated due to nil value either in interest expenses or EBIT.">
         <span className="diff">Number of companies having interest
                coverage ratio less than 1</span>
       </Tooltip>,
    selector: "_5",
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


const Table7 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T7H1}
               columns={columns}
               data={ctx.tables5.Table7}
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

export default Table7;
