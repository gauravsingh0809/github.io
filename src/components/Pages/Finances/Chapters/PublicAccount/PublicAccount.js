import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table28 from '../../../Tables/Chapter2/Table28'
import Table29 from '../../../Tables/Chapter2/Table29'
import {
    
    Chart13
    } from '../../../Charts/Chap2Charts

const  PublicAccount = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter2kannada)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                        <Title>{ctx.chapterTwo.Second.para14}</Title>
                        
                        {["para15","para16","para17"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            <Table28/>
                            <h6>  Source: Finance Accounts
                            <br>
 Note: +ve denotes debit balance and –ve denotes credit balances</br>
</h6>
                            
                            <Chart13 />
                        {["para18",,"para19","","Para20","para21","para22","para23","para24","para25","para26","para27","para28","para29","para30","para31","para32","para33","para34","para35","para36","para37","para38","para39","para32","para40","para41","para42","para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            <Table29/>
                        
                        {["para44",,"para45","","para46","para47","para48","para49","para50","para51","para52","para53","para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            
                            
                            

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
                        <Title>{ctx.chapter2kannada.Content.para214}</Title>
                        
                        {["para215","para216","para217"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para> )}
                            <Table28/>
                            <h6>  Source: Finance Accounts
                            <br>
 Note: +ve denotes debit balance and –ve denotes credit balances</br>
</h6>
                            <Chart13 />
                            
                            
                        {["para218","para219","para220","para221","para222","para223","para224","para225","para226","para227","para228","para229","para230","para231","para232","para233","para234","para235","para236","para237","para238","para239","para240","para241","para242","para243","para244"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para> )}
                            <Table29/>
                            
                    
                        {["para245",,"para246","para247","para248","para249","para250","para251","para252","para253","para254","para255"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para> )}
                            
                            
                            

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default PublicAccount