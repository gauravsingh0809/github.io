import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Budget.css'
import Table1 from '../../../Tables/Chapter3/Table1'
import { Chart3, Chart4 } from '../../../Charts/Chap3Charts'
import Table2 from '../../../Tables/Chapter3/Table2'
import Table3 from '../../../Tables/Chapter3/Table3'
import Table4 from '../../../Tables/Chapter3/Table4'
import Table5 from '../../../Tables/Chapter3/Table5'
import { getFirebase } from '../../../../../firebase/firebase'
import ImageComponent from 'material-ui-image'

const GenderBudget = () => {

    const ctx = useContext(MyContext)

    const [allImages, setImages] = useState({});

    useEffect(() => {
        const getImages = getFirebase()
            .storage()
            .ref('/images/')
            .listAll().then(
                function (res) {
                    res.items.forEach((i) => {
                        i.getDownloadURL().then((res) => {
                            setImages((allImages) => ({ ...allImages, [i.name]: res }));
                        });
                    });
                })
        return getImages
    }, [])

    return (
        ctx.langPref
            ? (ctx.chapterThree && ctx.charts3
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="budget-process" forward="policy" />
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].title}</Title>
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para1}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        {ctx.chapterThree.Budget["Gender Budget"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title>{ctx.chapterThree.Budget["Gender Budget"].para3}</Title>
                        <div>
                            {['para4'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterThree.Budget["Gender Budget"][item].substring(0, 101)}
                                    <span className="tooltip">
                                        {ctx.chapterThree.Budget["Gender Budget"][item].substring(101, 106)}
                                        <span className="tooltiptext">Subsequent to the formulation of National Policy for the Empowerment of Women in 2001,
                                            Ministry of Finance constituted (2003) an Expert Group on Classification of Government
                                            Transactions which was also called Ashok Lahiri Committee. One of the terms of reference
                                            was examining the feasibility and suggest general approach to Gender Budgeting. The said
                                            committee in turn constituted (September 2003) a sub-group for preparing a frame work of
                                            Gender Budgeting.
                                        </span>
                                        <sup>26</sup>
                                    </span>
                                    {ctx.chapterThree.Budget["Gender Budget"][item].substring(106,)}
                                </Para>
                            )}
                            {['para5', 'para6', 'para7', 'para8'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </Para>
                            )}
                            {['para9'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterThree.Budget["Gender Budget"][item].substring(0, 55)}
                                    <span className="tooltip">
                                        {ctx.chapterThree.Budget["Gender Budget"][item].substring(55, 66)}
                                        <span className="tooltiptext">These are individual and household based schemes which benefit women or girls directly and
                                            are measured as coverage of percentage of women/girl beneficiaries to total beneficiaries </span>
                                        <sup>27</sup>
                                    </span>
                                    {ctx.chapterThree.Budget["Gender Budget"][item].substring(66, 85)}
                                    <span className="tooltip">
                                        {ctx.chapterThree.Budget["Gender Budget"][item].substring(85, 96)}
                                        <span className="tooltiptext">These are household and community based schemes and are measured in terms of percentage
                                            of women against total population of the targeted area. </span>
                                        <sup>28</sup>
                                    </span>
                                    {ctx.chapterThree.Budget["Gender Budget"][item].substring(96,)}
                                </Para>
                            )}
                            {['para10'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </Para>
                            )}
                        </div>

                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para11}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para12'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        {ctx.chapterThree.Budget["Gender Budget"][item]}
                                    </Para>
                                )}
                                {['para13', 'para14', 'para15'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        <li className="list">
                                            {ctx.chapterThree.Budget["Gender Budget"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para16'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        {ctx.chapterThree.Budget["Gender Budget"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para17}</Title>
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para18}</Title>
                        {['para19'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}

                        <ImageComponent src={allImages["chap3box1.png"]} alt="Chapter-3 Box-1" aspectRatio={1 / 0.75} />

                        {['para26'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}

                        <ImageComponent src={allImages["chap3chart2.png"]} alt="Chapter-3 Box-1" aspectRatio={1 / 0.75} />

                        {['para27', 'para28'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title>{ctx.chapterThree.Budget["Gender Budget"].para29}</Title>
                        {['para30'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item].substring(0, 37)}
                                <span className="tooltip">
                                    {ctx.chapterThree.Budget["Gender Budget"][item].substring(37, 41)}
                                    <span className="tooltiptext">Data collected and tabulated separately for women and men). Gender Statistics allow for the
                                        measurement of differences between women and men on various social and economic
                                        dimensions. e.g. It involves asking the “who” questions in an agricultural household survey:
                                        who provides labour, who makes the decisions, who owns and controls the land and other
                                        resources </span>
                                    <sup>29</sup>
                                </span>
                                {ctx.chapterThree.Budget["Gender Budget"][item].substring(41,)}
                            </Para>
                        )}
                        {['para31'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <span style={{ fontStyle: "italic" }}>
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </span>
                            </Para>
                        )}
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para32}</Title>
                        {['para33'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para34}</Title>
                        {['para35'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table1 />
                        <p className="footer">
                            Source: GB documents for the years 2016-17 to 2020-21
                        </p>
                        {['para36', 'para37'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        {['para38'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <Chart3 />
                        <p className="footer">
                            Source: GB Documents
                        </p>
                        {['para39'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <ol type="a">
                            {['para40'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    <li className="list">
                                        {ctx.chapterThree.Budget["Gender Budget"][item]}
                                    </li>
                                </Para>
                            )}
                            <Para>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"]['para41'].substring(0, 3)}
                                    <span className="tooltip">
                                        {ctx.chapterThree.Budget["Gender Budget"]['para41'].substring(3, 30)}
                                        <span className="tooltiptext">
                                            Men and Women in India, 2019 issued by Ministry of Statistics and Programme
                                            Implementation, GoI.
                                        </span>
                                        <sup>30</sup>
                                    </span>
                                    {ctx.chapterThree.Budget["Gender Budget"]['para41'].substring(30,)}
                                </li>
                            </Para>
                            <Para>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"]['para42']}
                                </li>
                            </Para>
                        </ol>
                        <Para>
                            {ctx.chapterThree.Budget["Gender Budget"]['para43'].substring(0, 45)}
                            <span className="tooltip">
                                {ctx.chapterThree.Budget["Gender Budget"]['para43'].substring(45, 55)}
                                <span className="tooltiptext">
                                    Men and Women in India, 2019 issued by Ministry of Statistics and Programme
                                    Implementation, GoI
                                </span>
                                <sup>31</sup>
                            </span>
                            {ctx.chapterThree.Budget["Gender Budget"]['para43'].substring(30,)}
                        </Para>
                        {['para44'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table2 />
                        <p className="footer">
                            Source: GB documents
                        </p>
                        {['para45', 'para46'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table3 />
                        <p className="footer">
                            Source: GB documents
                        </p>
                        {['para47', 'para48'].map((item, ind) =>
                            <Para>
                                {item === 'para47'
                                    ? ctx.chapterThree.Budget["Gender Budget"][item]
                                    : <li className="list">
                                        {ctx.chapterThree.Budget["Gender Budget"][item]}
                                    </li>}
                            </Para>
                        )}
                        {['para49'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table4 />
                        <p className="footer">
                            Source: GB documents
                        </p>
                        {['para50'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para51}</Title>
                        {['para52'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        {['para53', 'para54', 'para55', 'para56'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para57}</Title>
                        {['para58', 'para59'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        {['para60'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para61}</Title>
                        <Para>
                            {ctx.chapterThree.Budget["Gender Budget"]['para62'].substring(0, 488)}
                            <span className="tooltip">
                                {ctx.chapterThree.Budget["Gender Budget"]['para62'].substring(488, 497)}
                                <span className="tooltiptext">
                                    11.05.2017 and 13.06.2017
                                </span>
                                <sup>32</sup>
                            </span>
                            {ctx.chapterThree.Budget["Gender Budget"]['para62'].substring(497,)}
                        </Para>
                        {['para63', 'para64', 'para65'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}

                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para66}</Title>
                        {['para67', 'para68'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table5 />
                        <p className="footer">
                            Source: GB Documents for the years 2016-17 to 2020-21
                            <br></br>
                            [1]Schemes under third classification ‘beneficiary and non-beneficiary oriented schemes’ under both Category A and B have been included under non-beneficiary oriented.
                            <br></br>
                            [2]Finance Accounts provides broad perspective of finances of GoK during the financial year which is dealt in the Chapter 1 and 2 of this Report.
                        </p>
                        {['para69'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        {['para70', 'para71'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <Chart4 />
                        {['para72'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        {['para73', 'para74', 'para75'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapterThree.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        {['para76'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title >{ctx.chapterThree.Budget["Gender Budget"].para77}</Title>
                        {['para78', 'para79'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterThree.Budget["Gender Budget"][item]}
                            </Para>
                        )}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter3kannada && ctx.charts3
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="budget-process" forward="policy" />
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].title}</Title>
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para1}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title>{ctx.chapter3kannada.Budget["Gender Budget"].para3}</Title>
                        <div>
                            {['para4'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(0, 101)}
                                    <span className="tooltip">
                                        {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(101, 106)}
                                        <span className="tooltiptext">Subsequent to the formulation of National Policy for the Empowerment of Women in 2001,
                                            Ministry of Finance constituted (2003) an Expert Group on Classification of Government
                                            Transactions which was also called Ashok Lahiri Committee. One of the terms of reference
                                            was examining the feasibility and suggest general approach to Gender Budgeting. The said
                                            committee in turn constituted (September 2003) a sub-group for preparing a frame work of
                                            Gender Budgeting.
                                        </span>
                                        <sup>26</sup>
                                    </span>
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(106,)}
                                </Para>
                            )}
                            {['para5', 'para6', 'para7', 'para8'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </Para>
                            )}
                            {['para9'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(0, 55)}
                                    <span className="tooltip">
                                        {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(55, 66)}
                                        <span className="tooltiptext">These are individual and household based schemes which benefit women or girls directly and
                                            are measured as coverage of percentage of women/girl beneficiaries to total beneficiaries </span>
                                        <sup>27</sup>
                                    </span>
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(66, 85)}
                                    <span className="tooltip">
                                        {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(85, 96)}
                                        <span className="tooltiptext">These are household and community based schemes and are measured in terms of percentage
                                            of women against total population of the targeted area. </span>
                                        <sup>28</sup>
                                    </span>
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(96,)}
                                </Para>
                            )}
                            {['para10'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </Para>
                            )}
                        </div>

                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para11}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para12'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                    </Para>
                                )}
                                {['para13', 'para14', 'para15'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        <li className="list">
                                            {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                        </li>
                                    </Para>
                                )}
                                {['para16'].map((item, ind) =>
                                    <Para key={ind / 10}>
                                        {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                    </Para>
                                )}
                            </div>
                            : ""}

                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para17}</Title>
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para18}</Title>
                        {['para23'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <p style={{textAlign:"center"}}>
                            {ctx.chapter3kannada.Budget["Gender Budget"]['para24']}
                        </p>
                        <ImageComponent src={allImages["chap3box1.png"]} alt="Chapter-3 Box-1" aspectRatio={1 / 0.75} />
                        <p className="footer">
                            ಆಕರ: ಮಹಿಳಾ ಉದ್ದೇಶಿತ ಆಯವ್ಯಯ ಕೈಪಿಡಿ (ಅಕ್ಟೋಬರ್ ೨೦೧೫)
                        </p>
                        <Para>
                            {ctx.chapter3kannada.Budget["Gender Budget"]['para25']}
                        </Para>
                        {['para26'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <ImageComponent src={allImages["chap3chart2.png"]} alt="Chapter-3 Box-1" aspectRatio={1 / 0.75} />
                        {['para27', 'para28'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title>{ctx.chapter3kannada.Budget["Gender Budget"].para29}</Title>
                        {['para30'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(0, 37)}
                                <span className="tooltip">
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(37, 41)}
                                    <span className="tooltiptext">Data collected and tabulated separately for women and men). Gender Statistics allow for the
                                        measurement of differences between women and men on various social and economic
                                        dimensions. e.g. It involves asking the “who” questions in an agricultural household survey:
                                        who provides labour, who makes the decisions, who owns and controls the land and other
                                        resources </span>
                                    <sup>29</sup>
                                </span>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item].substring(41,)}
                            </Para>
                        )}
                        {['para31'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <span style={{ fontStyle: "italic" }}>
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </span>
                            </Para>
                        )}
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para32}</Title>
                        {['para33'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para34}</Title>
                        {['para35'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table1 />
                        <p className="footer">
                            Source: GB documents for the years 2016-17 to 2020-21
                        </p>
                        {['para36', 'para37'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        {['para38'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <Chart3 />
                        <p className="footer">
                            Source: GB Documents
                        </p>
                        {['para39'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <ol type="a">
                            {['para40'].map((item, ind) =>
                                <Para key={ind / 10}>
                                    <li className="list">
                                        {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                    </li>
                                </Para>
                            )}
                            <Para>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"]['para41'].substring(0, 3)}
                                    <span className="tooltip">
                                        {ctx.chapter3kannada.Budget["Gender Budget"]['para41'].substring(3, 30)}
                                        <span className="tooltiptext">
                                            Men and Women in India, 2019 issued by Ministry of Statistics and Programme
                                            Implementation, GoI.
                                        </span>
                                        <sup>30</sup>
                                    </span>
                                    {ctx.chapter3kannada.Budget["Gender Budget"]['para41'].substring(30,)}
                                </li>
                            </Para>
                            <Para>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"]['para42']}
                                </li>
                            </Para>
                        </ol>
                        <Para>
                            {ctx.chapter3kannada.Budget["Gender Budget"]['para43'].substring(0, 45)}
                            <span className="tooltip">
                                {ctx.chapter3kannada.Budget["Gender Budget"]['para43'].substring(45, 55)}
                                <span className="tooltiptext">
                                    Men and Women in India, 2019 issued by Ministry of Statistics and Programme
                                    Implementation, GoI
                                </span>
                                <sup>31</sup>
                            </span>
                            {ctx.chapter3kannada.Budget["Gender Budget"]['para43'].substring(30,)}
                        </Para>
                        {['para44'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table2 />
                        <p className="footer">
                            Source: GB documents
                        </p>
                        {['para45', 'para46'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table3 />
                        <p className="footer">
                            Source: GB documents
                        </p>
                        {['para47', 'para48'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {item === 'para47'
                                    ? ctx.chapter3kannada.Budget["Gender Budget"][item]
                                    : <li className="list">
                                        {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                    </li>}
                            </Para>
                        )}
                        {['para49'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table4 />
                        <p className="footer">
                            Source: GB documents
                        </p>
                        {['para50'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para51}</Title>
                        {['para52'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        {['para53', 'para54', 'para55', 'para56'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para57}</Title>
                        {['para58', 'para59'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        {['para60'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para61}</Title>
                        <Para>
                            {ctx.chapter3kannada.Budget["Gender Budget"]['para62'].substring(0, 488)}
                            <span className="tooltip">
                                {ctx.chapter3kannada.Budget["Gender Budget"]['para62'].substring(488, 497)}
                                <span className="tooltiptext">
                                    11.05.2017 and 13.06.2017
                                </span>
                                <sup>32</sup>
                            </span>
                            {ctx.chapter3kannada.Budget["Gender Budget"]['para62'].substring(497,)}
                        </Para>
                        {['para63', 'para64', 'para65'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}

                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para66}</Title>
                        {['para67', 'para68'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <p className="footer">
                            In crores
                        </p>
                        <Table5 />
                        <p className="footer">
                            Source: GB Documents for the years 2016-17 to 2020-21
                            <br></br>
                            [1]Schemes under third classification ‘beneficiary and non-beneficiary oriented schemes’ under both Category A and B have been included under non-beneficiary oriented.
                            <br></br>
                            [2]Finance Accounts provides broad perspective of finances of GoK during the financial year which is dealt in the Chapter 1 and 2 of this Report.
                        </p>
                        {['para69'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        {['para70', 'para71'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        <Chart4 />
                        {['para72'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        {['para73', 'para74', 'para75'].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li className="list">
                                    {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                                </li>
                            </Para>
                        )}
                        {['para76'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
                            </Para>
                        )}
                        <Title >{ctx.chapter3kannada.Budget["Gender Budget"].para77}</Title>
                        {['para78', 'para79'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Budget["Gender Budget"][item]}
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

export default GenderBudget