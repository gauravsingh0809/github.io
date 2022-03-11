import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Subtitle from "./../../../../Subtitle/Subtitle"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'

const  Application = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapterTwo)

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
                            {ctx.chapterTwo.Profile.para1h1}
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
                        {["para5","para6","para7","para8","para9","para10","para11","para12","para13","para14","para15","para16","para17","para18",,"para19","","Para20","para21","para22","para23","para24","para25","para26","para27","para28","para29","para30","para31","para32","para33"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.first[item]}
                            </Para> )}
                            </Para>
                            <Para>
                            {ctx.chapterTwo.Second.para1h1}
                            </Para>
                            <Para>
                            {ctx.chapterTwo.Second.para1}
                            </Para>
                            <Para>
                            {["para2","para3","para4","para5","para6","para7"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para> )}
                            </Para>
                            <Para>
                        {["para8","para9","para10","para11","para12","para13"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
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
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/finances" forward="/finances/major-sources" />
                    <Title>{ctx.chapter2kannada.Content.para72}</Title>
                    {["para73"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Subtitle>
                        {ctx.chapter2kannada.Content["para74"]}
                        </Subtitle>
                    {["para75","para76"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Para>
                        {ctx.chapter2kannada.Content.para77}
                    </Para>
                    <Para>
                        {ctx.chapter2kannada.Content.para78}
                    </Para>
                    {["para79","para80","para81","para82","para83"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Para>
                        {ctx.chapter2kannada.Content.para84}
                    </Para>
                    {["para85","para86","para87",].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para88","para89","para90",].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para91","para92","para93","para94"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para95","para96","para97","para98","para99","para100","para101","para102","para103","para104","para105","para106","para107","para108","para109","para110","para111","para112","para113","para114"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Para>
                        {ctx.chapter2kannada.Content.para115}
                    </Para>
                    {["para116","para117","para118","para119","para120","para121"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}

                        {["para122","para123","para124"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para125","para126","para127","para128","para129"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Para>
                        {ctx.chapter2kannada.Content.para130}
                    </Para>
                    {["para131","para132","para133","para134","para135","para136","para137","para138","para139","para140","para141","para142",].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para143","para144","para145","para146"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        <Para>
                    {["para147","para148","para149","para150","para151","para152","para153"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        </Para>
                        {["para154","para155","para156","para157","para158","para159","para160","para161","para162"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                   
                    <Para>
                        {ctx.chapter2kannada.Content.para163}
                    </Para>
                    <Para>
                    {["para164","para165"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        </Para>
                        <Para>
                    {["para166","para167","para168","para169","para170","para171","para172","para173","para174","para175","para176","para177","para178","para179",,"para180","","para181","para182","para183","para184","para185","para186","para187","para188","para189","para190","para191","para192","para193","para194"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        </Para>
                        
                        <Para>
                        {ctx.chapter2kannada.Content.para195}
                        </Para>
                        <Para>
                        {["para196","para197","para198","para199","para200","para201"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        </Para>
                        
                    {["para202","para203","para204","para205","para206","para207"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter2kannada.Content[item]}
                        </Para> )}
                        {["para208","para209","para210","para211","para212","para213"].map((item, ind) =>
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

export default Application