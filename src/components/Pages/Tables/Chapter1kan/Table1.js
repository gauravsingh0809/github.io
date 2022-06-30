import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
      name: "ವರ್ಷ",
      selector: "ವರ್ಷ",
      wrap: true,
  },
  
  {
      name: "2015-16",
      selector: "201617",
      // grow:0.05,
      wrap: true,
      format: data => data["201617"].toLocaleString('en-IN')
  },
  {
      name: "2016-17",
      selector: "201718",
      // grow: 0.05,
      wrap: true,
      format: data => data["201718"].toLocaleString('en-IN')
  },
  {
      name: "2017-18",
      selector: "201819",
      // grow: 0.05,
      wrap: true,
      format: data => data["201819"].toLocaleString('en-IN')
  },
  {
      name: "2018-19",
      selector: "201920",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["201920"].toLocaleString('en-IN')
  },
  {
      name: "2019-20",
      selector: "202021",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["202021"].toLocaleString('en-IN')
  },   
];


const customStyles = {
  header: {
    style: {
      fontSize: '22px',
      color: '#fff',
      backgroundColor: '#ff6359',
      minHeight: '56px',
      textAlign: "center",
      // paddingLeft: '170px',
      // paddingRight: '8px',
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


const Table1kan = () => {

  const ctx = useContext(MyContext)

  console.log(ctx.tables1kan)

 
  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-1.1: ರಾಷ್ಟ್ರೀಯ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನಕ್ಕೆ ಹೋಲಿಸಿದಂತೆ ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಪ್ರವೃತ್ತಿ"
          columns={columns}
          data={ctx.tables1kan.Table1}
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

export default Table1kan;
