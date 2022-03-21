import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Preface',
    path: '/preface',
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    nolink: true,
  },
  {
    title: '1.Overview',
    path: '/overview',
    id: 1,
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '1.1 Introduction',
        path: '/overview/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.2 Profile of the State',
        path: '/overview/profile',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.3 Basis and Approach to SFAR',
        path: '/overview/basis',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      
      {
        title: '1.4 Structure of Govt Accounts',
        path: '/overview/structure',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.5 Budgetory Process',
        path: '/overview/budgetprocess',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.6 Snapshots of Finances',
        path: '/overview/snapshot-finances',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.7 Snapshot of Assets and Liabilities',
        path: '/overview/snapshot-assets',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.8 Fiscal Parameters',
        path: '/overview/fiscalparams',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.9 Fiscal Situation',
        path: '/overview/fisc-situation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.10 Impact of Certain Transactions',
        path: '/overview/impact',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: '2. Finances of the state',
    path: '/finances',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '2.1 Introduction',
        path: '/finances/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.2 Major Sources',
        path: '/finances/major-sources',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.3 Sources and Application of funds',
        path: '/finances/sources-application',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.4 Resources',
        path: '/finances/resources',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.5 Application',
        path: '/finances/application',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.6 Public Account',
        path: '/finances/publicaccount',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.7 Debt management',
        path: '/finances/debtmanagement',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.8 Debt Sustainablity analysis',
        path: '/finances/dsa',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.9 Conclusion and Recommendations',
        path: '/finances/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: '3 Budget Management',
    path: '/budget',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '3.1 Introduction',
        path: '/budget/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.2 Budget Process',
        path: '/budget/budget-process',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.3 Review of Gender Budgeting in Karnataka',
        path: '/budget/gender-budget',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.4 Child Budget',
        path: '/budget/child-budget',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.5 Major policy pronouncements in the budget and their actual funding for ensuring implementation',
        path: '/budget/policy',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.6 Appropriation Accounts',
        path: '/budget/appropaccounts',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.7 Audit of Appropriation',
        path: '/budget/audit',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.8 Outcome of review of selected Grants',
        path: '/budget/outcome',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.9 Conclusion',
        path: '/budget/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.10 Recommendations',
        path: '/budget/recommendations',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: '4 Quality of Accounts and Financial Reporting',
    path: '/quality',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: 'A.Observations relating to completeness of accounts',
        id: 2,
        type: true
      },
      {
        title: '4.1 Funds outside Consolidated Fund or Public Account of the State',
        path: '/quality/funds',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'B.Observation relating to transparency',
        id: 2,
        type: true
      },
      {
        title: '4.2 Delay in submission of Utilisation Certificates',
        path: '/quality/delay',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.3 Abstract Contingent Bills',
        path: '/quality/acbills',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.4 Personal Deposit Accounts',
        path: '/quality/pdaccounts',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'C.Observation relating to measurement ',
        id: 2,
        type: true
      },
      {
        title: '4.5 Outstanding balances under suspense and DDR heads',
        path: '/quality/balances',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.6 Non-reconciliation of Departmental figures',
        path: '/quality/non-reconciliation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.7 Reconciliation of cash balance',
        path: '/quality/reconciliation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'D.Observation relating to disclosure',
        id: 2,
        type: true
      },
      {
        title: '4.8 Compliance with Accounting Standards',
        path: '/quality/compliance',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.9 Submission of Accounts and placing of Separate Audit Reports of Autonomous Bodies in the Legislature',
        path: '/quality/submission',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      
      {
        title: '4.10 Departmental Commercial Undertakings/ Corporations/ Companies',
        path: '/quality/dcu',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.11 Non-submission of details of grants/ loans given to bodies and authorities',
        path: '/quality/non-submission',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.12 Timelines and Quality of Accounts ',
        path: '/quality/timelines',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.13 Misappropriation, losses, thefts etc.',
        path: '/quality/misappropriations',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.14 Follow up action on State Finance Audit Report ',
        path: '/quality/follow',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.15 Conclusion',
        path: '/quality/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.16 Recommendations',
        path: '/quality/recommendations',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Appendices',
    path: '#',
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: 'Appendix 1',
        path: '/appendices/appendix-1',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'Appendix 2',
        path: '/appendices/appendix-2',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'Appendix 3',
        path: '/appendices/appendix-3',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'Appendix 4',
        path: '/appendices/appendix-4',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  }
];
