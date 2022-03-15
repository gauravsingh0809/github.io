import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table30 from '../../../Tables/Chapter2/Table30'
import Table31 from '../../../Tables/Chapter2/Table31'
import Table32 from '../../../Tables/Chapter2/Table32'
import Table33 from '../../../Tables/Chapter2/Table33'
import Table34 from '../../../Tables/Chapter2/Table34'
import {
    Chart10, Chart11, Chart11a, Chart12, Chart12b,
    Chart13, Chart14, Chart15, Chart16, Chart17,
    Chart18, Chart21,
    Chart19,
    Chart2 as Chrt2, Chart20, Chart3 as Chrt3, Chart4 as Chrt4, Chart7, Chart8, Chart9
} from '../../../Charts/Chap2Charts'

const DebtManagement = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter2kannada)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                        <Title>{ctx.chapterTwo.Second.para55}</Title>
                        <Para>
                        {ctx.chapterTwo.Second.para56}
                        </Para>
                        <Chart14 />
                        {["para56","para57","para58","para59","para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            <Table30/>
                            <h6>*The back-to-back Loan (` 12,407 crore) received from GoI in lieu of GST compensation has not been considered as Debt for working out the indicator.</h6>
                            {["para61","para62","para63","para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            <Chart15 />
                            <h6>Note: Effective GOI loans would be `14,210 crore as the Department of Expenditure, GOI had decided that GST compensation of `12,407 crore given to the State as back-to-back loan under debt receipts (6004-101. Loans and Advances from GOI) would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission, thus, impacting the total debt to `4,03,519 crore.</h6>
                            <Chart16 />
                            {["para65","para66","para67","para68","para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            <Table31/>
                            <h6>Source: Finance Accounts</h6>
                            {["para70","para71","para72","para73","para74"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            <Table32/>
                            <Table33/>
                            {["para75","para76","para77"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            <Table34/>
                            <Para>
                        {ctx.chapterTwo.Second.para78}
                        </Para>
                            
                        

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter2kannada
                ? <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                    <Title>{ctx.chapter2kannada.Content.para256}</Title>
                    <Para>
                    {ctx.chapter2kannada.Content.para257}
                    </Para>
                    <Chart14 />
                    {["para258","para259","para260","para261","para262"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table30/>
                        <h6>*The back-to-back Loan (` 12,407 crore) received from GoI in lieu of GST compensation has not been considered as Debt for working out the indicator.</h6>
                        <Chart16 />
                        {["para263","para264","para265","para266"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Chart15 />
                        <h6>Note: Effective GOI loans would be `14,210 crore as the Department of Expenditure, GOI had decided that GST compensation of `12,407 crore given to the State as back-to-back loan under debt receipts (6004-101. Loans and Advances from GOI) would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission, thus, impacting the total debt to `4,03,519 crore.</h6>
                        {["para267","para268","para269","para270","para271"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table31/>
                        <h6>Source: Finance Accounts</h6>
                        {["para272","para273","para274","para275","para276"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table32/>
                        <Table33/>
                        <Para>
                    {ctx.chapter2kannada.Content.para277}
                    </Para>
                        <Para>
                    {ctx.chapter2kannada.Content.para278}
                    </Para>
                    {["para279","para280","para281"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table34/>
                    

                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default DebtManagement