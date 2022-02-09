import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Budget.css'
import Table9 from '../../../Tables/Chapter3/Table9'
import Table10 from '../../../Tables/Chapter3/Table10'
import Table11 from '../../../Tables/Chapter3/Table11'
import Table12 from '../../../Tables/Chapter3/Table12'
import Table13 from '../../../Tables/Chapter3/Table13'
import { Chart6 } from '../../../Charts/Chap3Charts'
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'

const Audit = () => {

    const ctx = useContext(MyContext)

    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/images/chap3chart5.png')
        .getDownloadURL()
        .then((url) => {
            setURL(url);
        });

    return (
        ctx.langPref
            ? (ctx.chapterThree && ctx.arrayTableData
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="appropaccounts" forward="outcome" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Audit.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Audit.para2}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Audit.para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget.Audit.para5}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table9 />
                                <p className="footer">
                                    Source: Appropriation Accounts
                                </p>
                                {['para7', 'para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para9}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para10', 'para11'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para12}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para13'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table10 />
                                {['para14', 'para15', 'para16'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para17}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para18}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para19', 'para20', 'para21'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table11 />
                        <p className="footer">
                            Source: Appropriation Accounts
                        </p>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para22}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para23', 'para24'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para25}</Title>
                        <div>
                            {['para26'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Audit[item]}
                                </Para>
                            )}
                            <ImageComponent src={url} alt="chapter3 chart5" aspectRatio={1/1.5} />
                            {['para27'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Audit[item]}
                                </Para>
                            )}
                        </div>

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para28}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para29', 'para30'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para31}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para32'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                                {['para33', 'para34', 'para35', 'para36'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapterThree.Budget.Audit[item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para37}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para38'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para39}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para40}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para41', 'para42'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para43}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para44', 'para45'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para46}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para47', 'para48', 'para49'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para50}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para51}</Title>
                        <div>
                            {['para52', 'para53', 'para54'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Audit[item]}
                                </Para>
                            )}
                            <Table12 />
                            <p className="footer">
                                Source: Appropriation Accounts
                            </p>
                            {['para55'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapterThree.Budget.Audit[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapterThree.Budget["Audit"].para56}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para57'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                                <Chart6 />
                                <p className="footer">
                                    Source: Monthly Civil Accounts-2019-20
                                </p>
                                {['para58', 'para59'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table13 />
                                <p className="footer">
                                    Source: Monthly Civil Accounts-2019-20
                                </p>
                                {['para60'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapterThree.Budget.Audit[item]}
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
            : (ctx.chapter3kannada && ctx.arrayTableData
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="appropaccounts" forward="outcome" />
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Audit.title}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para1'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Audit.para2}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Audit.para3}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget.Audit.para5}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table9 />
                                <p className="footer">
                                    Source: Appropriation Accounts
                                </p>
                                {['para7', 'para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para9}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para10', 'para11'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para12}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para13'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table10 />
                                {['para14', 'para15', 'para16'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para17}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para18}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para19', 'para20', 'para21'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <p className="footer">
                            In crores
                        </p>
                        <Table11 />
                        <p className="footer">
                            Source: Appropriation Accounts
                        </p>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para22}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para23', 'para24'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para25}</Title>
                        <div>
                            {['para26'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Audit[item]}
                                </Para>
                            )}
                            <ImageComponent src={url} alt="chapter3 chart5" aspectRatio={1/1.5} />
                            {['para27'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Audit[item]}
                                </Para>
                            )}
                        </div>

                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para28}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para29', 'para30'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para31}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para32'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                                {['para33', 'para34', 'para35', 'para36'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter3kannada.Budget.Audit[item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para37}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para38'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para39}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para40}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para41', 'para42'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para43}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para44', 'para45'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para46}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para47', 'para48', 'para49'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para50}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para51}</Title>
                        <div>
                            {['para52', 'para53', 'para54'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Audit[item]}
                                </Para>
                            )}
                            <Table12 />
                            <p className="footer">
                                Source: Appropriation Accounts
                            </p>
                            {['para55'].map((item, ind) =>
                                <Para key={ind}>
                                    {ctx.chapter3kannada.Budget.Audit[item]}
                                </Para>
                            )}
                        </div>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter3kannada.Budget["Audit"].para56}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para57'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                                <Chart6 />
                                <p className="footer">
                                    Source: Monthly Civil Accounts-2019-20
                                </p>
                                {['para58', 'para59'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
                                    </Para>
                                )}
                                <p className="footer">
                                    In crores
                                </p>
                                <Table13 />
                                <p className="footer">
                                    Source: Monthly Civil Accounts-2019-20
                                </p>
                                {['para60'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter3kannada.Budget.Audit[item]}
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

export default Audit