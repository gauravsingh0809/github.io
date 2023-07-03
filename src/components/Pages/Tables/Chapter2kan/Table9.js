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
        name: "ಅನುದಾನದ ಸ್ವರೂಪ",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "_1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["_1"].toLocaleString('en-IN')
    },
    {
        name: "ಗ್ರಾಮೀಣ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು",
        selector: "2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "_2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["_2"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "_3",
        // grow:0.05,
        wrap: true,
        format: data => data["_3"].toLocaleString('en-IN')
    },
    {
        name: "ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು",
        selector: "3",
        // grow:0.05,
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "_4",
        // grow:0.05,
        wrap: true,
        format: data => data["_4"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "_5",
        // grow:0.05,
        wrap: true,
        format: data => data["_5"].toLocaleString('en-IN')
    },
    {
        name: "ರಾಜ್ಯ ವಿಪತ್ತು ಅಪಾಯ ನಿರ್ವಹಣಾ ನಿಧಿ",
        selector: "4",
        // grow:0.05,
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "_6",
        // grow:0.05,
        wrap: true,
        //format: data => data["_6"].toLocaleString('en-IN')
    }
];

const conditionalRowStyles = [
  {
      when: row => row["Head"] === 'Total',
      style: {
          backgroundColor: 'rgba(153, 165, 128, 0.9)',
      },
  }
]

const customStyles = styles;

const Table9kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.೧೦: 202೧-2೨ರಲ್ಲಿ ಶಿಫಾರಸು ಮಾಡಿದ ಅನುದಾನ ಮತ್ತು ವಾಸ್ತವ ಬಿಡುಗಡೆ   (` ಕೋಟಿಗಳಲ್ಲಿ) "
                    columns={columns}
                    data={ctx.tables2kan.Table9}
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

export default Table9kan;
