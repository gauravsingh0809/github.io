import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ವರ್ಷ",
        selector: "ವರ್ಷ",
        // grow: ,
        wrap: true,
        // width:'35px',
      },
      {
        name: "ಮೊತ್ತ",
        selector: "ಮೊತ್ತ",
        // grow: ,
        wrap: true,
        // width:'35px',
      }
];

const conditionalRowStyles = [
    {
      when: row => row["ವರ್ಷ"] === 'ಒಟ್ಟು',
      style: {
        backgroundColor:  'rgba(153, 165, 128, 0.9)',
      }
    }
  ]

const customStyles = styles;

const Table31akan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-2.31: ವರ್ಗಾವಣೆಯಾದ ಹಣದ ವಿವರಗಳು"
          columns={columns}
          data={ctx.tables2kan.Table31a}
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

export default Table31akan;
