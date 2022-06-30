import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import SortIcon from "@material-ui/icons/ArrowDownward";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಹೊಣೆಗಾರಿಕೆಗಳು",
        selector: "ಹೊಣೆಗಾರಿಕೆಗಳು",
        wrap: true,
        grow:2,
        conditionalCellStyles: [
            {
                when: row => row["ಹೊಣೆಗಾರಿಕೆಗಳು"] === 'Total Fiscal Liabilities' || 
                row["ಹೊಣೆಗಾರಿಕೆಗಳು"] === "Total Liabilities to GSDP in per cent",
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    fontWeight:500,
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
        ]
    },
     {
        name: "2016-17",
        selector: "2016-17",
        wrap: true,        
        format: data => data["2016-17"].toLocaleString('en-IN')
    },
     {
        name: "2017-18",
        selector: "2017-18",
        wrap: true,
        format: data => data["2017-18"].toLocaleString('en-IN')
    },
     {
        name: "2018-19",
        selector: "2018-19",
        wrap: true,
        format: data => data["2018-19"].toLocaleString('en-IN')
    },
    {
        name: "2019-20",
        selector: "2019-20",
        wrap: true,
        format: data => data["2019-20"].toLocaleString('en-IN')
    },
    {
        name: "2020-21",
        selector: "2020-21",
        wrap: true,
        format: data => data["2020-21"].toLocaleString('en-IN')
        
    },
];

const conditionalRowStyles = [

    // You can also pass a callback to style for additional customization
    {
      when: row => row.Liabilities === "Internal Debt",
      style: row => ({
          backgroundColor: row => row["Liabilities"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
      }),
    },
  ];
   

const customStyles = styles

const Table4kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ -1.4: ಹಣಕಾಸಿನ ಹೊಣೆಗಾರಿಕೆಗಳಲ್ಲಿನ ಪ್ರವೃತ್ತಿಗಳು ಮತ್ತು ರಾಒಆಂಉಕ್ಕೆ ಅದರ ಅನುಪಾತ"
                    columns={columns}
                    data={ctx.tables1kan.Table4}
                    customStyles={customStyles}
                    striped
                    sortIcon={<SortIcon />}
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table4kan;
