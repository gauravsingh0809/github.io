import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import { FaSpinner } from 'react-icons/fa'

const Conclusion = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref 
        ? (ctx.chapterTwo 
            ? <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/finances/dsa" forward="/budget" />
                    <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterTwo.Finances["Conclusion and recommendations"].title}</Title>
                    <Title >{ctx.chapterTwo.Finances["Conclusion and recommendations"].para1}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            {['para2'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterTwo.Finances["Conclusion and recommendations"][item]}
                                </Para>
                            )}
                            {['para3'].map((item, ind) =>
                                <Para key={ind}>
                                    <span style={{fontStyle:"italic", fontWeight:"650"}} >
                                    {ctx.chapterTwo.Finances["Conclusion and recommendations"][item]}
                                    </span >
                                </Para>
                            )}
                        </div>
                        : ""}

                    <Title >{ctx.chapterTwo.Finances["Conclusion and recommendations"].para4}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            {['para5', 'para6', 'para7'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterTwo.Finances["Conclusion and recommendations"][item]}
                                </Para>
                            )}
                        </div>
                        : ""}
                    <Title >{ctx.chapterTwo.Finances["Conclusion and recommendations"].para8}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            {['para9', 'para10', 'para11', 'para12'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterTwo.Finances["Conclusion and recommendations"][item]}
                                </Para>
                            )}
                        </div>
                        : ""}
                    <Title >{ctx.chapterTwo.Finances["Conclusion and recommendations"].para13}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            {['para14', 'para15'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterTwo.Finances["Conclusion and recommendations"][item]}
                                </Para>
                            )}
                        </div>
                        : ""}
                    <Title >{ctx.chapterTwo.Finances["Conclusion and recommendations"].para16}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            {['para17', 'para18'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterTwo.Finances["Conclusion and recommendations"][item]}
                                </Para>
                            )}
                        </div>
                        : ""}
                    <Title >{ctx.chapterTwo.Finances["Conclusion and recommendations"].para19}</Title>
                    {ctx.isStatus.status1
                        ? <div>
                            {['para20', 'para21'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterTwo.Finances["Conclusion and recommendations"][item]}
                                </Para>
                            )}
                        </div>
                        : ""}
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
                        <FloatingActionButtons back="/finances/dsa" forward="/budget" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter2kannada.Finances["Conclusion and recommendations"].title}</Title>
                        <Title >{ctx.chapter2kannada.Finances["Conclusion and recommendations"].para1}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Conclusion and recommendations"][item]}
                                    </Para>
                                )}
                                {['para3'].map((item, ind) =>
                                    <Para key={ind}>
                                        <span style={{fontStyle:"italic", fontWeight:"650"}} >
                                        {ctx.chapter2kannada.Finances["Conclusion and recommendations"][item]}
                                        </span >
                                    </Para>
                                )}
                            </div>
                            : ""}
    
                        <Title >{ctx.chapter2kannada.Finances["Conclusion and recommendations"].para4}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para5', 'para6', 'para7'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Conclusion and recommendations"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title >{ctx.chapter2kannada.Finances["Conclusion and recommendations"].para8}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para9', 'para10', 'para11', 'para12'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Conclusion and recommendations"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title >{ctx.chapter2kannada.Finances["Conclusion and recommendations"].para13}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para14', 'para15'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Conclusion and recommendations"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title >{ctx.chapter2kannada.Finances["Conclusion and recommendations"].para16}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para17', 'para18'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Conclusion and recommendations"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title >{ctx.chapter2kannada.Finances["Conclusion and recommendations"].para19}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para20', 'para21'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter2kannada.Finances["Conclusion and recommendations"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Conclusion