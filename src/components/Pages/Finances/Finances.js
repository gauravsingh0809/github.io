import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Finances.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"


const Finances = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.execFinances
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/impact" forward="/finances/introduction" />
                        <Title>{ctx.execFinances.title}</Title>
                        {['para1', 'para2'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinances[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinances.para3}</Title>
                        <Title >{ctx.execFinances.para4}</Title>
                        {['para5', 'para6'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinances[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinances.para7}</Title>
                        {['para8'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinances[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinances.para9}</Title>
                        {['para10'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinances[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinances.para11}</Title>
                        {['para12', 'para12a'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinances[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinances.para13}</Title>
                        {['para14'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinances[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinances.para15}</Title>
                        {['para16'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinances[item]}
                            </Para>
                        )}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.execFinanceskan
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/impact" forward="/finances/introduction" />
                        <Title>{ctx.execFinanceskan.title}</Title>
                        {['para1', 'para2'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinanceskan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinanceskan.para3}</Title>
                        <Title >{ctx.execFinanceskan.para4}</Title>
                        {['para5', 'para6'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinanceskan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinanceskan.para7}</Title>
                        {['para8'].map((item, ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinanceskan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinanceskan.para9}</Title>
                        {['para10'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinanceskan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinanceskan.para11}</Title>
                        {['para12','para12a'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinanceskan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinanceskan.para13}</Title>
                        {['para14'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinanceskan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execFinanceskan.para15}</Title>
                        {['para16'].map((item,ind) =>
                            <Para key={ind/10}>
                                {ctx.execFinanceskan[item]}
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

export default Finances