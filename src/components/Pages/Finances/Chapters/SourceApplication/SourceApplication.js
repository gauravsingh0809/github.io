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
    console.log(ctx.Chap2)

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
                        <Chart11a />

                        <Chart12b />
                   
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