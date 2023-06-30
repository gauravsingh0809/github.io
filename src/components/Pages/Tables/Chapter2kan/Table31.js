import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
      name: "",
      selector: "1",
      // grow: ,
      wrap: true,
      // width:'35px',
  },
  {
      name: "2017-18",
      selector: "2017 18",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2017 18"].toLocaleString('en-IN')
  },
  {
      name: "2018-19",
      selector: "2018 19",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2018 19"].toLocaleString('en-IN')
  },
  {
      name: "2019-20",
      selector: "2019 20",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2019 20"].toLocaleString('en-IN')
  },
  {
    name: "2020-21",
    selector: "2020 21",
    // grow:0.05,
    wrap: true,
    format: data => data["2020 21"].toLocaleString('en-IN')
},
{
    name: "2021-22",
    selector: "2021 22",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2021 22"].toLocaleString('en-IN')
}
];


const customStyles = {
    header: {
      style: {
        fontSize: '22px',
        color: '#fff',
        backgroundColor: '#ff6359',
        minHeight: '56px',
        textAlign: "center",
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



const Table31kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.3೨: ಘಟಕವಾರು ಸಾಲದ ಪ್ರವೃತ್ತಿಗಳು"
                    columns={columns}
                    data={ctx.tables2kan.Table31}
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

export default Table31kan;
