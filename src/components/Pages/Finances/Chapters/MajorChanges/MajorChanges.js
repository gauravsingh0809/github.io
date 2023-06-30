import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table1 from '../../../Tables/Chapter2/Table1'
import Table1kan from '../../../Tables/Chapter2kan/Table1kan'

const MajorChanges = () => {

    const ctx = useContext(MyContext)
    console.log(ctx)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/introduction" forward="/finances/sources-application" />
                        <Title>{ctx.chapterTwo.Para1}</Title>
                        <Para>
                            {ctx.chapterTwo.Para2}
                        </Para>
                        <Table1/>

                        {/* Demo Tables for all chapters are here*/}
          

                        <Para>
                            {ctx.chapterTwo.Para3}
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
                <FloatingActionButtons back="/finances/introduction" forward="/finances/sources-application" />
                    <Title>{ctx.chapter2kannada.Content.para3}</Title>
                    <Para>
                        {ctx.chapter2kannada.Content.para4}
                    </Para>
                    <Table1kan/>

                    {/* Demo Tables for all chapters are here*/}

                    {/* <Table2/>
                    <Table3/>
                    <Table5/>
                    <Table7/>
                    <Table9/>
                    <Table10/>
                    <Table11/>
                    <Table12/>
                    <Table13/>
                    <Table14/>
                    <Table15/>
                    <Table16/>
                    <Table17/>
                    <Table18/>
                    <Table19/>
                    <Table20/>
                    <Table21/>
                    <Table22/>
                    <Table23/>
                    <Table24/>
                    <Table24b/>
                    <Table25/>
                    <Table26/>
                    <Table27/> */}









                    <Para>
                        {ctx.chapter2kannada.Content.para6}
                    </Para>

                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default MajorChanges