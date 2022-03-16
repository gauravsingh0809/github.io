import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table3 from '../../../Tables/Chapter2/Table3'
import Table9 from '../../../Tables/Chapter2/Table9'
import Table10 from '../../../Tables/Chapter2/Table10'
import Table11 from '../../../Tables/Chapter2/Table11'
import Table12 from '../../../Tables/Chapter2/Table12'
import {
    
    Chart2 as Chrt2, Chart3 as Chrt3, Chart4 as Chrt4,
} from '../../../Charts/Chap2Charts'
import Table5 from '../../../Tables/Chapter2/Table5'
import Table7 from '../../../Tables/Chapter2/Table7'

const  Resources= () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapter2kannada)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                        <Title>{ctx.chapterTwo.Profile.Para6}</Title>
                        <Para>
                            {ctx.chapterTwo.Profile.Para5}
                        </Para>
                        {["Para7", "Para8","Para9","Para10", "Para10a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Table3/>
                            <Chrt2 />
                            <Chrt3 />
                           {["Para11", "Para12","Para13","Para14", "Para15","Para16","Para17","Para18","Para19","Para21"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Chrt4 />
                            {["Para22", "Para23","Para24","Para25"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Table5/>

                            {["Para26", "Para27","Para28","Para29", "Para30","Para31","Para32"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}

                            {["Para32", "Para33","Para34", "Para35","Para36","Para37","Para38","Para39"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Table7/>
                            {["Para40", "Para41","Para42", "Para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Table9/>
                            {["Para44", "Para45","Para46","Para47", "Para48","Para49","Para50","Para51","Para52","Para53","Para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Table10/>

                            {["Para55","Para56","Para57","Para58","Para59","Para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Table11/>
                            {["Para61","Para62","Para63","Para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Table12/>
                            {["Para65","Para66",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
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
                <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                    <Title>{ctx.chapter2kannada.Content.para9}</Title>
                    <Para>
                        {ctx.chapter2kannada.Content.para10}
                    </Para>
                    {["para11", "para12","para13","para14", "para15"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table3/>
                        <Chrt2 />
                        <Chrt3 />
                       {["para16", "para17","para18","para19", "para20","para21","para22","para23","para24","para25"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Chrt4 />
                        {["para26", "para27","para28","para29"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table5/>

                        {["para30", "para31","para32","para33", "para34","para35","para36"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}

                        {["para37", "para38","para39", "para40","para41","para42","para43","para44"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table7/>

                        {["para45", "para46","para47", "para48"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table9/>
                        {["para49", "para50","para51","para52", "para53","para54","para55","para56","para57","para58","para59"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table10/>

                        {["para60","para61","para62","para63","para64","para65"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table11/>
                        {["para66","para67","para68","para69"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Table12/>
                        {["para70","para71",].map((item, ind) =>
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

export default Resources