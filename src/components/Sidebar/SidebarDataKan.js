import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarDataKan = [
  {
    title: 'ಮುನ್ನುಡಿ',
    path: '/preface',
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    nolink: true,
  },
  {
    title: 'ಅಧ್ಯಾಯ 1 - ಅವಲೋಕನ',
    path: '/overview',
    id: 1,
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '1.1 ಪೀಠಿಕೆ',
        path: '/overview/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.2 ರಾಜ್ಯದ ಚಿತ್ರಣ',
        path: '/overview/profile',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.3 ರಾಜ್ಯದ ಹಣಕಾಸಿನ ವ್ಯವಹಾರ ಹಾಗೂ ಲೆಕ್ಕ ಪರಿಶೋಧನಾ ವರದಿಗೆ ಆಭಾರ ಮತ್ತು ಅನುಸರಿಸಿದ ಮಾರ್ಗ',
        path: '/overview/basis',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.4 ಸರ್ಕಾರಿ ಲೆಕ್ಕಗಳ ವಿನ್ಯಾಸ',
        path: '/overview/structure',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.5 ಆಯವ್ಯಯ ಪ್ರಕ್ರಿಯೆಗಳು',
        path: '/overview/budgetprocess',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.6 ಹಣಕಾಸು ವ್ಯವಹಾರಗಳ ಕ್ಷಿಪ್ರಚಿತ್ರ',
        path: '/overview/snapshot-finances',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.7 ಸರ್ಕಾರದ ಸ್ವತ್ತುಗಳು ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಗಳ ಕ್ಷಿಪ್ರಚಿತ್ರ',
        path: '/overview/snapshot-assets',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.8 ವಿತ್ತೀಯ ಪ್ರಮಿತಿಗಳು',
        path: '/overview/fiscalparams',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.9 ರಾಜ್ಯದ ಹಣಕಾಸಿನ ಪರಿಸ್ಥಿತಿ',
        path: '/overview/fisc-situation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.10 ೨೦೧೯-೨೦ರಲ್ಲಿ ರಾಜಸ್ವ ಸ್ವೀಕೃತಿಗಳು, ವಿತ್ತೀಯ ಕೊರತೆ ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಗಳ ಮೇಲೆ ಕೆಲವು ವಹಿವಾಟುಗಳ ಪರಿಣಾಮ',
        path: '/overview/impact',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ಅಧ್ಯಾಯ 2 –ರಾಜ್ಯದ ಹಣಕಾಸು ವ್ಯವಹಾರಗಳು',
    path: '/finances',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '2.1 ಪೀಠಿಕೆ',
        path: '/finances/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.2 ೨೦೧೯-೨೦ರ ಪ್ರಮುಖ ಹಣಕಾಸಿನ ಸಮಗ್ರತೆಯಲ್ಲಿನ ಬದಲಾವಣೆಗಳು',
        path: '/finances/major-sources',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.3 ಹಣದ ಆಕರಗಳು ಮತ್ತು ಅನ್ವಯ',
        path: '/finances/sources-application',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.4 ರಾಜ್ಯದ ಸಂಪನ್ಮೂಲಗಳು',
        path: '/finances/resources',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.5 ಸಂಪನ್ಮೂಲಗಳ ಬಳಕೆ',
        path: '/finances/application',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.6 ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕ',
        path: '/finances/publicaccount',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.7 ಋಣ ನಿರ್ವಹಣೆ',
        path: '/finances/debtmanagement',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.8 ಋಣ ಸಹಿಷ್ಣುತೆಯ ವಿಶ್ಲೇಷಣೆ',
        path: '/finances/dsa',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.9 ತೀರ್ಮಾನ ಮತ್ತು ಶಿಫಾರಸುಗಳು',
        path: '/finances/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ಅಧ್ಯಾಯ 3 –ಆಯವ್ಯಯ ನಿರ್ವಹಣೆ',
    path: '/budget',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '3.1 ಪೀಠಿಕೆ',
        path: '/budget/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.2 ಆಯವ್ಯಯ ಪ್ರಕ್ರಿಯೆ',
        path: '/budget/budget-process',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.3 ಕರ್ನಾಟಕದಲ್ಲಿ ಮಹಿಳಾ ಉದ್ದೇಶಿತ ಆಯವ್ಯಯದ ಸಮೀಕ್ಷೆ',
        path: '/budget/gender-budget',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.4 ಆಯವ್ಯಯ ಪ್ರಮುಖ ಕಾರ್ಯನೀತಿ ಘೋಷಣೆಗಳು ಮತ್ತು ಅವುಗಳ ಅನುಷ್ಠಾನವನ್ನು ಖಾತ್ರಿಪಡಿಸಲು ಒದಗಿಸಿದ ವಾಸ್ತವ ವೆಚ್ಚಗಳು',
        path: '/budget/policy',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.5 ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು',
        path: '/budget/appropaccounts',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.6 ಧನವಿನಿಯೋಗಗಳ ಲೆಕ್ಕಪರಿಶೋಧನೆ',
        path: '/budget/audit',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.7 ಆಯ್ದ ಅನುದಾನಗಳ ಸಮೀಕ್ಷೆಯ ಫಲಿತಾಂಶಗಳು',
        path: '/budget/outcome',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.8 ನಿರ್ಣಯಗಳು',
        path: '/budget/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.9 ಶಿಫಾರಸುಗಳು',
        path: '/budget/recommendations',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ಅಧ್ಯಾಯ 4 – ಲೆಕ್ಕಗಳ ಗುಣಮಟ್ಟ ಮತ್ತು ಆರ್ಥಿಕ ನಿರೂಪಣಾ ಪದ್ದತಿಗಳು',
    path: '/quality',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: 'ಎ.	ಲೆಕ್ಕಗಳ ಪರಿಪೂರ್ಣತೆಯ ಮೇಲಿನ ಅವಲೋಕನಗಳು',
        id: 2,
        type: true
      },
      {
        title: '4.1 ರಾಜ್ಯದ ಸಂಚಿತ ನಿಧಿ ಅಥವಾ ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕದಿಂದ ಹೊರಗೆ ಉಳಿದಿರುವ ಮೊತ್ತ',
        path: '/quality/funds',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'ಬಿ.	ಪಾರದರ್ಶಕತೆಗೆ ಸಂಬಂಧಿಸಿದ ಅವಲೋಕನಗಳು',
        id: 2,
        type: true
      },
      {
        title: '4.2 ಬಳಕೆ ಪ್ರಮಾಣ ಪತ್ರಗಳನ್ನು ಸಲ್ಲಿಸುವಲ್ಲಿ ವಿಳಂಬ',
        path: '/quality/delay',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.3 ಸಂಕ್ಷಿಪ್ತ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳು',
        path: '/quality/acbills',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.4 ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಲೆಕ್ಕಗಳು',
        path: '/quality/pdaccounts',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'ಸಿ.	ಮಾಪನಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಅವಲೋಕನಗಳು',
        id: 2,
        type: true
      },
      {
        title: '4.5 ಅಮಾನತ್ತು ಮತ್ತು ಋಣ, ಠೇವಣಿ ಮತ್ತು ಇರಸಾಲು (ಡಿಡಿಆರ್) ಲೆಕ್ಕಗಳಡಿ ಉಳಿದಿರುವ ಶಿಲ್ಕುಗಳು',
        path: '/quality/balances',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.6 ಹೊಂದಾಣಿಕೆಯಾಗದ ಇಲಾಖೆಯ ಅಂಕಿಗಳು',
        path: '/quality/non-reconciliation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.7 ನಗದು ಶಿಲ್ಕುಗಳಲ್ಲಿ ಹೊಂದಾಣಿಕೆ',
        path: '/quality/reconciliation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'ಡಿ.	ಪ್ರಕಟಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಅಭಿಪ್ರಾಯಗಳು',
        id: 2,
        type: true
      },
      {
        title: '4.8 ಲೆಕ್ಕ ಮಾನದಂಡಗಳ ಅನುಸರಣೆ',
        path: '/quality/compliance',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.9 ಸ್ವಾಯುತ್ತ ಸಂಸ್ಥೆಗಳ ಲೆಕ್ಕಪತ್ರಗಳ ಸಲ್ಲಿಕೆ ಮತ್ತು ಪ್ರತ್ಯೇಕ ಲೆಕ್ಕಪರಿಶೀಲನಾ ವರದಿಗಳ ಮಂಡನೆಯ ಸ್ಥಿತಿ',
        path: '/quality/submission',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      
      {
        title: '4.10 ಇಲಾಖಾ ವಾಣಿಜ್ಯ ಉದ್ದಿಮೆಗಳು/ನಿಗಮಗಳು/ಕಂಪನಿಗಳು',
        path: '/quality/dcu',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.11 ಸಂಸ್ಥೆಗಳಿಗೆ ಮತ್ತು ಪ್ರಾಧಿಕಾರಗಳಿಗೆ ನೀಡಿದ ಅನುದಾನ/ಸಾಲದ ವಿವರಗಳನ್ನು ಸಲ್ಲಿಸದಿರುವುದು',
        path: '/quality/non-submission',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.12 ಲೆಕ್ಕಗಳಲ್ಲಿನ ಗುಣಮಟ್ಟ ಮತ್ತು ಕಾಲ ಪರಿಮಿತಿಗಳು',
        path: '/quality/timelines',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.13 ದುರುಪಯೋಗಗಳು, ನಷ್ಟಗಳು, ಕಳವು ಮುಂತಾದವುಗಳು',
        path: '/quality/misappropriations',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.14 ರಾಜ್ಯ ಸರ್ಕಾರದ ಹಣಕಾಸು ವ್ಯವಹಾರಗಳ ವರದಿಯ ಅನುಸರಣಾ ಕ್ರಮಗಳು',
        path: '/quality/follow',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.15 ಸಮಾಪನ',
        path: '/quality/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.16 ಶಿಫಾರಸುಗಳು',
        path: '/quality/recommendations',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ಅನುಬಂಧಗಳ ಪಟ್ಟಿ',
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: 'ಅನುಬಂಧ 1',
        path: '/appendices/appendix-1',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'ಅನುಬಂಧ 2',
        path: '/appendices/appendix-2',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'ಅನುಬಂಧ 3',
        path: '/appendices/appendix-3',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'ಅನುಬಂಧ 4',
        path: '/appendices/appendix-4',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  }
];
