import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'

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
                        {["para56","para57","para58","para59","para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            {["para61","para62","para63","para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            {["para65","para66","para67","para68","para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            {["para70","para71","para72","para73","para74"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            {["para75","para76","para77"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
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
                    {["para258","para259","para260","para261","para262"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para263","para264","para265","para266"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para267","para268","para269","para270","para271"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para272","para273","para274","para275","para276"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
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
                    

                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default DebtManagement