import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Budget.css'
import Table14 from '../../../Tables/Chapter3/Table14'
import Table15 from '../../../Tables/Chapter3/Table15'
import Table16 from '../../../Tables/Chapter3/Table16'
import Table17 from '../../../Tables/Chapter3/Table17'
import Table13a from '../../../Tables/Chapter3/Table13a'
import Table18 from '../../../Tables/Chapter3/Table18'
import Table19a from '../../../Tables/Chapter3/Table19a'
import Table19b from '../../../Tables/Chapter3/Table19b'
import Table20 from '../../../Tables/Chapter3/Table20'
import Table21 from '../../../Tables/Chapter3/Table21'
import Table22 from '../../../Tables/Chapter3/Table22'

const Outcome = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterThree && ctx.arrayTableData
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="audit" forward="conclusion" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para2}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table13a />
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para5}</Title>
                        <div>
                            {['para6'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table14 />
                            <p className="footer">
                                Source: Appropriation Accounts
                            </p>
                            {['para7'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para8}</Title>
                        <div>
                            {['para9', 'para10'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table15 />
                            <p className="footer">
                                Source: Grant Register
                            </p>
                            {['para11'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para12}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para13', 'para14', 'para15'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para16}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para17', 'para18', 'para19'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para20}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para21', 'para22'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para23}</Title>
                        <div>
                            {['para24', 'para25'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table16 />
                            <p className="footer">
                                Source: Grant Register
                            </p>
                            {['para26'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para27}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para28}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para29'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para30}</Title>
                        <div>
                            {['para31'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <p className="footer">
                            In crores
                        </p>
                        <Table17 />
                        <p className="footer">
                            Source: Appropriation Accounts
                        </p>
                        {['para32'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapterThree.Budget.Outcome[item]}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para33}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para34', 'para35'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para36}</Title>
                        <div>
                            {['para37'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                            <Table18 />
                            {['para38'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para39}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para40'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                                <h3 style={{ textAlign: "center" }}>
                                    Table 3.19: Anticipated savings not surrendered/partially surrendered Revenue
                                </h3>
                                <h3>Revenue:</h3>
                                <p className="footer">
                                    In crores
                                </p>
                                <Table19a />
                                <p className="footer">
                                    In crores
                                </p>
                                <h3>Capital:</h3>
                                <Table19b />
                                <p className="footer">
                                    Source: Grant Register
                                </p>
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para41}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para42'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table20 />
                                <p className="footer">
                                    Source: Grant Register
                                </p>
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Outcome.para43}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para44', 'para45', 'para46'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title>{ctx.chapterThree.Budget.Outcome.para47}</Title>
                        <div>
                            {['para48'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table21 />
                            <p className="footer">
                                Source: Grant Register
                            </p>
                            {['para49'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title >{ctx.chapterThree.Budget.Outcome.para50}</Title>
                        <div>
                            {['para51'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table22 />
                            <p className="footer">
                                Source: Grant Register
                            </p>
                            {['para52', 'para53'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter3kannada && ctx.arrayTableData
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="audit" forward="conclusion" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para2}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table13a />
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para5}</Title>
                        <div>
                            {['para6'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table14 />
                            <p className="footer">
                                Source: Appropriation Accounts
                            </p>
                            {['para7'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para8}</Title>
                        <div>
                            {['para9', 'para10'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table15 />
                            <p className="footer">
                                Source: Grant Register
                            </p>
                            {['para11'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para12}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para13', 'para14', 'para15'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para16}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para17', 'para18', 'para19'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para20}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para21', 'para22'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para23}</Title>
                        <div>
                            {['para24', 'para25'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table16 />
                            <p className="footer">
                                Source: Grant Register
                            </p>
                            {['para26'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para27}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para28}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para29'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para30}</Title>
                        <div>
                            {['para31'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <p className="footer">
                            In crores
                        </p>
                        <Table17 />
                        <p className="footer">
                            Source: Appropriation Accounts
                        </p>
                        {['para32'].map((item, ind) =>
                            <Para key={ind}>
                                {ctx.chapter3kannada.Budget.Outcome[item]}
                            </Para>
                        )}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para33}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para34', 'para35'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para36}</Title>
                        <div>
                            {['para37'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                            <Table18 />
                            {['para38'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para39}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para40'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                                <h3 style={{ textAlign: "center" }}>
                                    Table 3.19: Anticipated savings not surrendered/partially surrendered Revenue
                                </h3>
                                <h3>Revenue:</h3>
                                <p className="footer">
                                    In crores
                                </p>
                                <Table19a />
                                <p className="footer">
                                    In crores
                                </p>
                                <h3>Capital:</h3>
                                <Table19b />
                                <p className="footer">
                                    Source: Grant Register
                                </p>
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para41}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para42'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table20 />
                                <p className="footer">
                                    Source: Grant Register
                                </p>
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Outcome.para43}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para44', 'para45', 'para46'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Outcome[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title>{ctx.chapter3kannada.Budget.Outcome.para47}</Title>
                        <div>
                            {['para48'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table21 />
                            <p className="footer">
                                Source: Grant Register
                            </p>
                            {['para49'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                        <Title >{ctx.chapter3kannada.Budget.Outcome.para50}</Title>
                        <div>
                            {['para51'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                            <p className="footer">
                                In crores
                            </p>
                            <Table22 />
                            <p className="footer">
                                Source: Grant Register
                            </p>
                            {['para52', 'para53'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Outcome[item]}
                                </Para>
                            )}
                        </div>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Outcome