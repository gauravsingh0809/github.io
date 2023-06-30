import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import c212 from '../../../../../Images/c212.png'
import ImageComponent from 'material-ui-image'
import Table2 from '../../../Tables/Chapter2/Table2'
import Table2kan from '../../../Tables/Chapter2kan/Table2'
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
                        <Title>{ctx.chapterTwo.Para4}</Title>
                        <Para>
                            {ctx.chapterTwo.Para5}
                        </Para>
                        
                        <Table2/>
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                * Effective Public Debt Receipts (Net) would be ₹`61,105 crore in 2020-21 and ₹`48,560 crore in 2021-22 as the Department of Expenditure, GoI had decided that GST compensation of ₹12,407 crore in 2020-21 and ₹18,109 crore in 2021-22 given to the State as back-to-back loan under Debt Receipts would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission
                            </i>
                        </h4>
                        {/* <Chart11a />
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
                        </h4> */}
                        <ImageComponent flex="4" aspectRatio = "2" resizeMode = 'contain' src={c212} color ="#ffffff00" />
                        
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
                    <Table2kan/>
                    <Para>
                        {ctx.chapter2kannada.Content.t2fa}
                    </Para>
                    <Para>
                        {ctx.chapter2kannada.Content.t2f2}
                    </Para>
                    <Para>
                        {ctx.chapter2kannada.Content.t2f1}
                    </Para>
                    
                    <Chart11a />

                    <Chart12b />
                    <Para>
                        {ctx.chapter2kannada.Content.t2fa}
                    </Para>

                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default SourcesApplication