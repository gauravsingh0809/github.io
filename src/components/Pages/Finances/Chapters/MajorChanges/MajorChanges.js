import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table1 from '../../../Tables/Chapter2/Table1'
import Table2 from '../../../Tables/Chapter2/Table2'
import Table3 from '../../../Tables/Chapter2/Table3'
import Table5 from '../../../Tables/Chapter2/Table5'
import Table7 from '../../../Tables/Chapter2/Table7'
import Table9 from '../../../Tables/Chapter2/Table9'
import Table10 from '../../../Tables/Chapter2/Table10'
import Table11 from '../../../Tables/Chapter2/Table11'
import Table12 from '../../../Tables/Chapter2/Table12'
import Table13 from '../../../Tables/Chapter2/Table13'
import Table14 from '../../../Tables/Chapter2/Table14'
import Table15 from '../../../Tables/Chapter2/Table15'
import Table16 from '../../../Tables/Chapter2/Table16'
import Table17 from '../../../Tables/Chapter2/Table17'
import Table18 from '../../../Tables/Chapter2/Table18'
import Table19 from '../../../Tables/Chapter2/Table19'
import Table20 from '../../../Tables/Chapter2/Table20'
import Table21 from '../../../Tables/Chapter2/Table21'
import Table22 from '../../../Tables/Chapter2/Table22'
import Table23 from '../../../Tables/Chapter2/Table23'
import Table24 from '../../../Tables/Chapter2/Table24'
import Table24b from '../../../Tables/Chapter2/Table24b'
import Table25 from '../../../Tables/Chapter2/Table25'
import Table26 from '../../../Tables/Chapter2/Table26'
import Table27 from '../../../Tables/Chapter2/Table27'
import Table28 from '../../../Tables/Chapter2/Table28'
import Table29 from '../../../Tables/Chapter2/Table29'
import Table30 from '../../../Tables/Chapter2/Table30'
import Table31 from '../../../Tables/Chapter2/Table31'
import Table32 from '../../../Tables/Chapter2/Table32'
import Table33 from '../../../Tables/Chapter2/Table33'
import Table34 from '../../../Tables/Chapter2/Table34'
import Table35 from '../../../Tables/Chapter2/Table35'
import Table37 from '../../../Tables/Chapter2/Table37'
import Table38 from '../../../Tables/Chapter2/Table38'
import Table39 from '../../../Tables/Chapter2/Table39'
import Table40 from '../../../Tables/Chapter2/Table40'

const MajorChanges = () => {

    const ctx = useContext(MyContext)
    console.log(ctx)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                        <Title>{ctx.chapterTwo.Profile.Para1}</Title>
                        <Para>
                            {ctx.chapterTwo.Profile.Para2}
                        </Para>
                        <Table1/>

                        {/* Demo Tables for all chapters are here*/}

                        <Table2/>
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
                        <Table27/>
                        <Table28/>
                        <Table29/>
                        <Table30/>
                        <Table31/>
                        <Table32/>
                        <Table33/>
                        <Table34/>
                        <Table35/>
                        <Table37/>
                        <Table38/>
                        <Table39/>
                        <Table40/>
                        






                        <Para>
                            {ctx.chapterTwo.Profile.Para3}
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
                    <Title>{ctx.chapter2kannada.Content.para4}</Title>
                    <Para>
                        {ctx.chapter2kannada.Content.para5}
                    </Para>
                    <Table1/>

                    {/* Demo Tables for all chapters are here*/}

                    <Table2/>
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
                    <Table27/>









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