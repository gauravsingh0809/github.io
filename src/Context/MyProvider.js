import React, { useState, useEffect } from 'react'
import { getFirebase } from "./../firebase/firebase"
// import { collection, getDocs } from "firebase/firestore";

// make a new context
export const MyContext = React.createContext();

// create the provider
export const MyProvider = (props) => {

  const [report, setReportDoc] = useState([]);
  
  useEffect(() => {
    let a = []
    const fetchData = async () => {
      const db = getFirebase().firestore()
      const data = await db.collection("/document").get()
      data.docs.map(doc => (a[doc["id"]] = doc.data() ))
      setReportDoc(a)
    }
    fetchData()
  }, [])

  // console.log("report Chap2", report.Chap2)
  // if (!reportDoc.length) {
  //   console.log(getFirebase()
  //     .firestore()
  //     .collection("Chapter1")
  //     .get())
  //       }


  const [themeChange, setThemeChange] = useState(true);
  const [switchLang, setswitchLang] = useState(true);
  const [reportch, setReportCh] = useState([]);
  // const [paraOpen, setParaOpen] = useState({
  //   status1: true,
  //   status2: true,
  //   status3: true,
  //   status4: true,
  //   status5: true,
  //   status6: true,
  //   status7: true,
  //   status8: true,

  // });

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

  // console.log(reportch)


  // const paraClickHandler = (id) => {
  //   if (id === 1) {
  //     return setParaOpen((prevState) => ({ ...prevState, status1: !paraOpen.status1 }));
  //   }
  //   else if (id === 2) {
  //     return setParaOpen((prevState) => ({ ...prevState, status2: !paraOpen.status2 }));
  //   }
  //   else if (id === 3) {
  //     return setParaOpen((prevState) => ({ ...prevState, status3: !paraOpen.status3 }));
  //   }
  //   else if (id === 4) {
  //     return setParaOpen((prevState) => ({ ...prevState, status4: !paraOpen.status4 }));
  //   }
  //   else if (id === 5) {
  //     return setParaOpen((prevState) => ({ ...prevState, status5: !paraOpen.status5 }));
  //   }
  //   else if (id === 6) {
  //     return setParaOpen((prevState) => ({ ...prevState, status6: !paraOpen.status6 }));
  //   }
  //   else if (id === 7) {
  //     return setParaOpen((prevState) => ({ ...prevState, status7: !paraOpen.status7 }));
  //   }
  //   else if (id === 8) {
  //     return setParaOpen((prevState) => ({ ...prevState, status8: !paraOpen.status8 }));
  //   }
  //   else {
  //     return ("")
  //   }
  // }

// console.log(report.Chap1.Charts)
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
      chapter1kannada: report.Chapter1Kannada,
      chapterTwo: report.Chap2,
      chapter2kannada: report.Chapter2Kannada,
      chapterThree: report.Chap3,
      chapter3kannada: report.Chapter3Kannada,
      chapterFour: report.Chap4,
      chapter4kannada: report.Chapter4Kannada,
      charts1: report.Chap1 ? report.Chap1.Charts : "",
      charts2: reportch.Chap2Charts,
      charts3: reportch.Chap3Charts,
      charts4: reportch.Chap4Charts,
      tables1: report.Chap1 ? report.Chap1.Tables : "",
      themeChanger: themeChange,
      langPref: switchLang,
      execoverview: report.ExecSummaryOverview,
      execFinances: report.ExecSummaryFinances,
      execBudget: report.ExecSummaryBudget,
      execQuality: report.ExecSummaryQuality,
      execoverviewkan: report.ExecSummaryOverviewKan,
      execFinanceskan: report.ExecSummaryFinanceKan,
      execBudgetkan: report.ExecSummaryBudgetKan,
      execQualitykan: report.ExecSummaryQualityKan,
      langChange: langClickHandler,
      changeTheme: themeClickHandler,
      // paraToggle: paraClickHandler,

    }}>
      {props.children}
    </MyContext.Provider>
  )
}