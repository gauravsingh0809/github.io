import React, { useState } from 'react'
import { getFirebase } from "./../firebase/firebase"
// import { collection, getDocs } from "firebase/firestore";
import jsonData from '../reportJson.json';

// make a new context
export const MyContext = React.createContext();

// create the provider
export const MyProvider = (props) => {


  // Commenting out old method of uploading file to the Firebase Firestore Database
  // Instead I opted to upload the file in src folder itself.

  // const [report, setReportDoc] = useState([]);
  
  // useEffect(() => {
  //   let a = []
  //   const fetchData = async () => {
  //     const db = getFirebase().firestore()
  //     const data = await db.collection("/document").get()
  //     data.docs.map(doc => (a[doc["id"]] = doc.data() ))
  //     setReportDoc(a)
  //   }
  //   fetchData()
  // }, [])
  // setReportDoc(loadData()['document'])

  //Setting the Report Data
  const report = JSON.parse(JSON.stringify(jsonData))

  const [themeChange, setThemeChange] = useState(true);
  const [switchLang, setswitchLang] = useState(false);   // Change the boolean value to change the language
  const [reportch, setReportCh] = useState([]);
  

  let a = [];
  if (!reportch.length) {
    getFirebase()
      .database()
      .ref()
      .on("value",
        function (snapshot) {
          for (let i in snapshot.val()) {
            a[i] = snapshot.val()[i];
            a.push(snapshot.val()[i]);
          }
          setReportCh(a);
        }
      );
  }

  const themeClickHandler = () => setThemeChange(!themeChange)
  const langClickHandler = () => setswitchLang(!switchLang)

  return (
    <MyContext.Provider value={{
      // isStatus: paraOpen,
      reportData: report,
      arrayTableData: reportch.Chap3Tables,
      preface: report.Preface,
      prefacekan: report.PrefaceKan,
      chapterOne: report.Chap1,
      chapter1kannada: report.Chap1kan,
      chapterTwo: report.Chap2,
      chapter2kannada: report.Chap2kan,
      chapterThree: report.Chap3,
      chapter3kannada: report.Chap3kan,
      chapterFour: report.Chap4,
      chapter4kannada: report.Chap4kan,
      charts: reportch.Chartsnew,
      chartskan:report.Chap1kan.Charts,
      charts2: reportch.Chap2Charts,
      charts3: reportch.Chap3Charts,
      charts4: reportch.Chap4Charts,
      tables1: report.Chap1 ? report.Chap1.Tables : "",
      tables2: report.Chap2 ? report.Chap2.Tables : "",
      tables3: report.Chap3 ? report.Chap3.Tables : "",
      tables4: report.Chap4 ? report.Chap4.Tables : "",
      tables1kan: report.Chap1kan ? report.Chap1kan.Tables : "",
      tables2kan: report.Chap2kan ? report.Chap2kan.Tables : "",
      tables3kan: report.Chap3kan ? report.Chap3kan.Tables : "",
      tables4kan: report.Chap4kan ? report.Chap4kan.Tables : "",
      themeChanger: themeChange,
      langPref: switchLang,
      execsummary: report.ExecSummary,
      execsummarykan: report.ExecSummaryKan,  
      langChange: langClickHandler,
      changeTheme: themeClickHandler,
      // paraToggle: paraClickHandler,

    }}>
      {props.children}
    </MyContext.Provider>
  )
}