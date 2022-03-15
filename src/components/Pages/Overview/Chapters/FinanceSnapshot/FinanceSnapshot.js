import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table2 from '../../../Tables/Chapter1/Table2'



const FinanceSnapshot = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/budgetprocess" forward="/overview/snapshot-assets" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para39}
                        </Title>
                        <Para >
                            {ctx.chapterOne.Profile["Para40"]}
                        </Para>
                        <Table2 />
                        <h6>
                            {ctx.tables1.T2F1}
                            <br></br>
                            {ctx.tables1.T2F2}
                            <br></br>
                            {ctx.tables1.T2F4.substring(0,97)}
                        </h6>

                        {[ "Para41", "Para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter1kannada
                ? <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/overview/budgetprocess" forward="/overview/snapshot-assets" />
                    <Title id="anchor">
                        {ctx.chapter1kannada.Content.para41}
                    </Title>
                    <Para >
                        {ctx.chapter1kannada.Content["para42"]}
                    </Para>
                    <Table2 />
                    <h6>
                        {ctx.tables1.T2F1}
                        <br></br>
                        {ctx.tables1.T2F2}
                        <br></br>
                        {ctx.tables1.T2F4.substring(0,97)}
                    </h6>

                    {[ "para43", "para44","para45"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter1kannada.Content[item]}
                        </Para>
                    )}
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
                
    )
}

export default FinanceSnapshot
