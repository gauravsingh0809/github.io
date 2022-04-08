import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table2 from '../../../Tables/Chapter2/Table2'
import {
     Chart11a,Chart12b
    
} from '../../../Charts/Chap2Charts'

const  SourcesApplication = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/major-sources" forward="/finances/resources" />
                        <Title>{ctx.chapterTwo.Profile.Para4}</Title>
                        <Para>
                            {ctx.chapterTwo.Profile.Para5}
                        </Para>
                        
                        <Table2/>
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                            * Effective Public Debt Receipts (Net) would be ₹61,105 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹12,407 crore given to the sate as back-to-back loan under Debt Receipts would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.
                            </i>
                        </h4>
                        <Chart11a />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        <Chart12b />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                   
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
                <FloatingActionButtons back="/finances/major-sources" forward="/finances/resources" />
                    <Title>{ctx.chapter2kannada.Content.para7}</Title>
                    <Para>
                        {ctx.chapter2kannada.Content.para8}
                    </Para>
                    <Table2/>
                    <Para>
                        {ctx.chapter2kannada.Content.t2f2}
                    </Para>
                    <Para>
                        {ctx.chapter2kannada.Content.t2f1}
                    </Para>
                    <Chart11a />

                    <Chart12b />
                 

                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default SourcesApplication