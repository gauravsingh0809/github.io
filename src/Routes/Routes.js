import React, { useContext } from 'react'
import { MyContext } from '../Context/MyProvider'
import Sidebar from '../components/Sidebar/Sidebar';
import { Route, Switch } from 'react-router-dom'; //Deleted browserRouter as Router import
import Overview from '../components/Pages/Overview/Overview';
import HomePage from '../components/Pages/HomePage/HomePage';
import Introduction from '../components/Pages/Overview/Chapters/Introduction/Introduction';
import '../App.css';
import Profile from '../components/Pages/Overview/Chapters/Profile/Profile';
import Basis from '../components/Pages/Overview/Chapters/Basis/Basis';
import Structure from '../components/Pages/Overview/Chapters/Structure/Structure';
import OverviewBP from '../components/Pages/Overview/Chapters/BudgetProcess/BudgetProcess';
import FinanceSnapshot from '../components/Pages/Overview/Chapters/FinanceSnapshot/FinanceSnapshot';
import AssetsSnapshot from '../components/Pages/Overview/Chapters/AssetsSnapshot/AssetsSnapshot';
import FiscalParams from '../components/Pages/Overview/Chapters/FiscalParams/FiscalParams';
import FiscalSituation from '../components/Pages/Overview/Chapters/FiscalSituation/FiscalSituation';
import Impact from '../components/Pages/Overview/Chapters/Impact/Impact';
import Finances from '../components/Pages/Finances/Finances';
import FinIntroduction from '../components/Pages/Finances/Chapters/Introduction/Introduction';
import MajorChanges from '../components/Pages/Finances/Chapters/MajorChanges/MajorChanges';
import SourceApplication from '../components/Pages/Finances/Chapters/SourceApplication/SourceApplication';
import Application from '../components/Pages/Finances/Chapters/Application/Application';
import Resources from '../components/Pages/Finances/Chapters/Resources/Resources';
import PublicAccount from '../components/Pages/Finances/Chapters/PublicAccount/PublicAccount';
import DebtManagement from '../components/Pages/Finances/Chapters/DebtManagement/DebtManagement';
import Dsa from '../components/Pages/Finances/Chapters/Dsa/Dsa';
import Conclusion from '../components/Pages/Finances/Chapters/Conclusion/Conclusion';
import { SideBarProvider } from '../components/Sidebar/SideBarContext/SideBarCtxProvider';
import Budget from '../components/Pages/Budget/Budget';
import BudIntroduction from '../components/Pages/Budget/Chapters/BudIntroduction/BudIntroduction';
import BudgetProcess from '../components/Pages/Budget/Chapters/BudgetProcess/BudgetProcess';
import GenderBudget from '../components/Pages/Budget/Chapters/GenderBudget/GenderBudget';
import ChildBudget from '../components/Pages/Budget/Chapters/ChildBudget/ChildBudget';
// import MajorPolicy from '../components/Pages/Budget/Chapters/MajorPolicy/MajorPolicy';
import AppropAccounts from '../components/Pages/Budget/Chapters/AppropAccounts/AppropAccounts';
import Audit from '../components/Pages/Budget/Chapters/Audit/Audit';
import Outcome from '../components/Pages/Budget/Chapters/Outcome/Outcome';
import BudConclusion from '../components/Pages/Budget/Chapters/BudConclusion/BudConclusion';
import Recommendations from '../components/Pages/Budget/Chapters/Recommendations/Recommendations';

import Quality from '../components/Pages/Quality/Quality';
import Funds from '../components/Pages/Quality/Chapters/Funds/Funds';
import Delay from '../components/Pages/Quality/Chapters/Delay/Delay';
import Abstract from '../components/Pages/Quality/Chapters/Abstract/Abstract';
import PD from '../components/Pages/Quality/Chapters/PD/PD';
import OB from '../components/Pages/Quality/Chapters/OB/OB';
import NonReconciliation from '../components/Pages/Quality/Chapters/NonReconciliation/NonReconciliation';
import Reconciliation from '../components/Pages/Quality/Chapters/Reconciliation/Reconciliation';
import Compliance from '../components/Pages/Quality/Chapters/Compliance/Compliance';
import Submission from '../components/Pages/Quality/Chapters/Submission/Submission';
import DCU from '../components/Pages/Quality/Chapters/DCU/DCU';
import NonSubmission from '../components/Pages/Quality/Chapters/Nonsubmission/NonSubmission';
import Timelines from '../components/Pages/Quality/Chapters/Timelines/Timelines';
import Misapp from '../components/Pages/Quality/Chapters/Misapp/Misapp';
import Follow from '../components/Pages/Quality/Chapters/Follow/Follow';
import QualConclusion from '../components/Pages/Quality/Chapters/QualConclusion/QualConclusion';
import QualRecommendations from '../components/Pages/Quality/Chapters/QualRecommendations/QualRecommendations';


import State from '../components/Pages/State/State';
import Definition from '../components/Pages/State/Chapters/Definition/Definition';
import Mandate from '../components/Pages/State/Chapters/Mandate/Mandate';


import Spse from '../components/Pages/State/Chapters/Spse/Spse';
import Investment from '../components/Pages/State/Chapters/Investment/Investment';
import Returns from '../components/Pages/State/Chapters/Returns/Returns';import Debt from '../components/Pages/State/Chapters/Debt/Debt';
import Performance from '../components/Pages/State/Chapters/Performance/Performance';import Loss from '../components/Pages/State/Chapters/Loss/Loss';
import Auditt from '../components/Pages/State/Chapters/Auditt/Auditt';
import Appointment from '../components/Pages/State/Chapters/Appointment/Appointment';
import Submissions from '../components/Pages/State/Chapters/Submissions/Submissions';
import Cag from '../components/Pages/State/Chapters/Cag/Cag';
import Result from '../components/Pages/State/Chapters/Result/Result';
import Management from '../components/Pages/State/Chapters/Management/Management';
import Conclusions from '../components/Pages/State/Chapters/Conclusions/Conclusions';
import Recommend from '../components/Pages/State/Chapters/Recommend/Recommend';



import Preface from '../components/Pages/Preface/Preface';
import Appendix1 from '../components/Pages/Appendices/Appendix1';
import Appendix2 from '../components/Pages/Appendices/Appendix2';
import Appendix3 from '../components/Pages/Appendices/Appendix3';
import Appendix4 from '../components/Pages/Appendices/Appendix4';
import Appendix5 from '../components/Pages/Appendices/Appendix5';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Error from '../components/404/404';


const Routes = () => {
    const ctx = useContext(MyContext)

    return (
        <div>
            <SideBarProvider>
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div className={ctx.themeChanger ? "bg" : ""}></div>
                <div className={ctx.themeChanger ? "bg bg2" : ""}></div>
                <div className={ctx.themeChanger ? "bg bg3" : ""}></div>
                <div id="page-wrap" className="pagewrap"
                    style={{ height: "100%", overflow: "auto" }}
                >
                    <Switch>
                        <ErrorBoundary>
                            <Route exact path={['/']} component={HomePage} />
                            <Route exact path={['/preface']} component={Preface} />
                            <Route path='/overview' exact component={Overview} />
                            <Route path='/overview/introduction' exact component={Introduction} />
                            <Route path='/overview/profile' exact component={Profile} />
                            <Route path='/overview/basis' exact component={Basis} />
                            <Route path='/overview/structure' exact component={Structure} />
                            <Route path='/overview/budgetprocess' exact component={OverviewBP} />
                            <Route path='/overview/snapshot-finances' exact component={FinanceSnapshot} />
                            <Route path='/overview/snapshot-assets' exact component={AssetsSnapshot} />
                            <Route path='/overview/fiscalparams' exact component={FiscalParams} />
                            <Route path='/overview/fisc-situation' exact component={FiscalSituation} />
                            <Route path='/overview/impact' exact component={Impact} />

                            <Route path='/finances' exact component={Finances} />
                            <Route path='/finances/introduction' exact component={FinIntroduction} />
                            <Route path='/finances/major-sources' exact component={MajorChanges} />
                            <Route path='/finances/sources-application' exact component={SourceApplication} />
                            <Route path='/finances/resources' exact component={Resources} />
                            <Route path='/finances/application' exact component={Application} />
                            <Route path='/finances/publicaccount' exact component={PublicAccount} />
                            <Route path='/finances/debtmanagement' exact component={DebtManagement} />
                            <Route path='/finances/dsa' exact component={Dsa} />
                            <Route path='/finances/Conclusion' exact component={Conclusion} />

                            <Route path='/Budget' exact component={Budget} />
                            <Route path='/Budget/introduction' exact component={BudIntroduction} />
                            <Route path='/Budget/budget-process' exact component={BudgetProcess} />
                            <Route path='/Budget/gender-budget' exact component={GenderBudget} />
                            <Route path='/Budget/child-budget' exact component={ChildBudget} />
                            {/* <Route path='/Budget/policy' exact component={MajorPolicy} /> */}
                            <Route path='/Budget/appropaccounts' exact component={AppropAccounts} />
                            <Route path='/Budget/audit' exact component={Audit} />
                            <Route path='/Budget/outcome' exact component={Outcome} />
                            <Route path='/Budget/conclusion' exact component={BudConclusion} />
                            <Route path='/Budget/recommendations' exact component={Recommendations} />

                            <Route path='/Quality' exact component={Quality} />
                            <Route path='/Quality/Funds' exact component={Funds} />
                            <Route path='/Quality/Delay' exact component={Delay} />
                            <Route path='/Quality/acbills' exact component={Abstract} />
                            <Route path='/Quality/pdaccounts' exact component={PD} />
                            <Route path='/Quality/balances' exact component={OB} />
                            <Route path='/Quality/non-reconciliation' exact component={NonReconciliation} />
                            <Route path='/Quality/reconciliation' exact component={Reconciliation} />
                            <Route path='/Quality/compliance' exact component={Compliance} />
                            <Route path='/Quality/Submission' exact component={Submission} />
                            <Route path='/Quality/dcu' exact component={DCU} />
                            <Route path='/Quality/non-submission' exact component={NonSubmission} />
                            <Route path='/Quality/timelines' exact component={Timelines} />
                            <Route path='/Quality/misappropriations' exact component={Misapp} />
                            <Route path='/Quality/follow' exact component={Follow} />
                            <Route path='/Quality/conclusion' exact component={QualConclusion} />
                            <Route path='/Quality/recommendations' exact component={QualRecommendations} />

                            <Route path='/State' exact component={State} />
                            <Route path='/State/Definition' exact component={Definition} />
                           <Route path='/State/Mandate' exact component={Mandate} />
                           <Route path='/State/Spse' exact component={Spse} /> 
                           <Route path='/State/Investment' exact component={Investment} />
                           <Route path='/State/Returns' exact component={Returns} />
                           <Route path='/State/Debt' exact component={Debt} />
                           <Route path='/State/Performance' exact component={Performance} />
                           <Route path='/State/Loss' exact component={Loss} />
                           <Route path='/State/Auditt' exact component={Auditt} />
                           <Route path='/State/Appointment' exact component={Appointment} />
                           <Route path='/State/Submissions' exact component={Submissions} />
                           <Route path='/State/Cag' exact component={Cag} />
                           <Route path='/State/Result' exact component={Result} />
                           <Route path='/State/Management' exact component={Management} />
                           <Route path='/State/Conclusions' exact component={Conclusions} />
                           <Route path='/State/Recommend' exact component={Recommend} />





                            <Route path='/appendices/appendix-1' exact component={Appendix1} />
                            <Route path='/appendices/appendix-2' exact component={Appendix2} />
                            <Route path='/appendices/appendix-3' exact component={Appendix3} />
                            <Route path='/appendices/appendix-4' exact component={Appendix4} />
                            <Route path='/appendices/appendix-5' exact component={Appendix5} />
                        </ErrorBoundary>
                        <Route component={Error} />
                    </Switch>
                </div>
            </SideBarProvider>
        </div>
    )
}

export default Routes
