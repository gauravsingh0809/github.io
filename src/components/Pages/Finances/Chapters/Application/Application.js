import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'

const  Application = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.Chap2)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                        <Title>{ctx.chapterTwo.Profile.Para67}</Title>
                        {["Para68","Para69","Para70","Para71"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Para>
                            {ctx.chapterTwo.Profile.Para72}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.Profile.Para73}
                        </Para>
                        {["Para74","Para75","Para76","Para77","Para78"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Para>
                            {ctx.chapterTwo.Profile.Para79}
                        </Para>
                        {["Para80","Para81","Para82",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para83","Para84","Para85",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para86","Para87","Para88","Para89"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para90","Para91","Para92","Para93","Para94","Para95","Para96","Para97","Para98","Para99","Para100","Para101","Para102","Para103","Para104","Para105","Para106","Para107","Para108","Para109"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Para>
                            {ctx.chapterTwo.Profile.Para110}
                        </Para>
                        {["Para111","Para112","Para113","Para114","Para115","Para116"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}

                            {["Para117","Para118","Para119"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para120","Para121","Para122","Para123","Para124"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Para>
                            {ctx.chapterTwo.Profile.Para125}
                        </Para>
                        {["Para126","Para127","Para128","Para129","Para130","Para131","Para132","Para133","Para134","Para135","Para136","Para137",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            {["Para138","Para139","Para140","Para141"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Para>
                        {["Para142","Para143","Para144","Para145","Para146","Para147","Para148"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            </Para>
                            {["Para149","Para150","Para151","Para152","Para153","Para154","Para155","Para156","Para157"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para> )}
                            <Para>
                            {ctx.chapterTwo.first.para1h1}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.first.para1}
                        </Para>
                        <Para>
                        {["para2","para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.first[item]}
                            </Para> )}
                            </Para>
                            <Para>
                        {["para5","para6","para7","para8","para9","para10","para11","para12","para13","para14","para15","para16","para17","para18","para18","para19","","Para20","para21","para22","para23","para24","para25","para26","para27","para28","para29","para30","para31","para32","para33"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.first[item]}
                            </Para> )}
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
                    {/* <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances.Introduction.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                <Para>
                                    {ctx.chapter2kannada.Finances.Introduction.para1}
                                </Para>
                            </div>
                            : ""}
                    </div> */}
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Application