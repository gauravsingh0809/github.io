import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'


const Conclusion = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapterFour)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/dsa" forward="/budget" />
                        <Title>{ctx.chapterTwo.Second.para124}</Title>
                      
                            {["para125","para126","para127","para128","para129","para130","para131","para132","para133","para134","para135","para136","para137","para138","para139","para140","para141","para142","para143","para144","para145",].map((item, ind) =>
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
                <FloatingActionButtons back="/finances/dsa" forward="/budget" />
                    <Title>{ctx.chapter2kannada.Content.para327}</Title>
                  
                        {["para328","para329","para330","para331","para332","para333","para334","para335","para336","para337","para338","para339","para340","para341","para342","para343","para344","para345","para346","para347","para348",].map((item, ind) =>
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

export default Conclusion