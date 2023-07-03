import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name:"ಶೀರ್ಷಿಕೆ",
        selector:"ಶೀರ್ಷಿಕೆ",
        // grow: ,
        wrap: true
    },
    {
        name:"2017-18",
        selector:"2017 18",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2017 18"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name: "2018-19",
        selector:"2018 19",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2018 19"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name:"2019-20",
        selector:"2019 20",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2019 20"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name:"2020-21",
        selector:"2020 21",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2020 21"].toLocaleString('en-IN')
    },
    {
        name:"2021-22",
        selector:"2021 22",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2021 22"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    }
];

const conditionalRowStyles = [
  {
      when: row => row["ಶೀರ್ಷಿಕೆ"] === 'ಒಟ್ಟು',
      style: {
          backgroundColor: 'rgba(153, 165, 128, 0.9)',
      },
  }
]

const customStyles = styles;

const Table7kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.೮: ಕೇಂದ್ರ ತೆರಿಗೆ ವರ್ಗಾವಣೆಯ ಪ್ರವೃತ್ತಿಗಳು  (` ಕೋಟಿಗಳಲ್ಲಿ)"
                    columns={columns}
                    data={ctx.tables2kan.Table7}
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

export default Table7kan;
