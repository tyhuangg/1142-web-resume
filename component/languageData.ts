// // component/languageData.ts

// export const translations = {
//   zh: {
//     menu: {
//       home: "首頁 Home",
//       about: "關於我 About",
//       resume: "履歷經歷 Resume",
//       data: "數據分析 Data",
//       web: "網頁開發 Web",
//       footer: "© 2026 Claudia Huang. 版權所有。"
//     },
//     home: {
//       tag: "Data Analyst Portfolio",
//       title_part1: "數據洞察，",
//       title_part2: "引導產品決策與商業成長",
//       intro_p1: "我是 ",
//       intro_name: "Claudia 黃婷筠",
//       intro_p2: "。目前在 Perfect Corp (玩美移動) 擔任數據管理實習生。我擅長透過 SQL 與 Python 進行用戶行為路徑分析，將碎片化的數據轉化為可執行的產品優化策略。",
//       card1_val: "3+",
//       card1_title: "跨領域實習經驗",
//       card1_desc: "具備人壽、廣告媒體與美妝科技的多元商業視角，擅長跨部門溝通。",
//       card2_val: "Advanced",
//       card2_title: "SQL / Python",
//       card2_desc: "精通資料清洗、統計分析與行為路徑建模，將數據轉化為成長動能。",
//       card3_val: "Visual",
//       card3_title: "視覺化洞察",
//       card3_desc: "熟練使用 Tableau 與 BI 工具，以直觀圖表呈現數據故事，驅動精準決策。",
//       exp_title: "Current Experience",
//       exp_company: "玩美移動 Perfect Corp",
//       exp_role: "Data Management Intern",
//       exp_point1: "分析 AI 影像修復與物件移除功能之用戶轉換路徑，協助優化產品 UI/UX 決策。",
//       exp_point2: "監測全球產品使用趨勢，並撰寫數據亮點報告供 Business Development 團隊參考。",
//       btn_pdf: "檢視電子履歷 (PDF)",
//       btn_projects: "探索數據作品集",
//       btn_about: "更多關於我"
//     },
//     about: {
//       tag: "Personal Spirit",
//       title: "關於我 About",
//       intro: "我是一個熱愛旅遊與文化碰撞的觀察者。對我而言，每一座城市都是一組獨特的數據集，在異國街頭的觀察與交流，是我理解世界、訓練洞察力最直觀的方式。",
//       // 這裡放妳想展示的 9 張照片路徑
//       photos: [
//         "/a1.jpg", "/a2.jpg", "/a3.JPEG", 
//         "/a4.JPEG", "/a5.JPEG", "/a6.JPEG", 
//         "/a7.JPEG", "/a8.JPEG", "/a9.JPEG"
//       ]
//     },
//     resume: {
//       tag: "Career Journey & Skills",
//       title: "履歷經歷 Resume",
//       intro: "具備跨科技、金融與行銷產業的大規模資料處理經驗。擅長以數據驅動產品決策，致力於透過分析發掘商業成長動能。",
//       section_work: "工作經歷 Work Experience",
//       section_projects: "精選專案 Selected Projects",
//       section_edu: "教育背景 Education",
//       experiences: [
//         {
//           company: "玩美移動 Perfect Corp",
//           role: "Data Management Intern",
//           period: "2026.02 - Present",
//           bgClass: "bg-blue-50/50 dark:bg-blue-900/20",
//           points: [
//             "提取 30,000+ 筆產品數據，建立 Tableau 與 Python 自動化 Dashboard。",
//             "規劃 30+ App 埋點優化 User Flow 追蹤，提升分析精準度。",
//             "結構化整理 10+ 份競業財報，支援內部商業策略制定。"
//           ],
//           bgImg: "/perfectcorp.jpg",  
//         },
//         {
//           company: "國泰人壽資訊策略發展部",
//           role: "IT Project Management Intern",
//           period: "2025.09 - 2026.02",
//           bgClass: "bg-green-50/50 dark:bg-green-900/20",
//           points: [
//             "協助數位轉型與 ITSM 導入專案之需求拆解與流程文件撰寫。",
//             "透過專案進度追蹤與文件版本管理，降低跨部門協作誤差。"
//           ],
//           bgImg: "/cathay.jpg",  
//         },
//         {
//           company: "陽獅集團 Publicis Group",
//           role: "Marketing Data Analytics Intern",
//           period: "2024.09 - 2024.12",
//           bgClass: "bg-purple-50/50 dark:bg-purple-900/20",
//           points: [
//             "負責 60,000+ 筆 GA 資料清洗，建立 Looker Studio 行銷看板。",
//             "利用 Python 開發自動化工具，減少 40% 以上人為處理時間。"
//           ],
//           bgImg: "/publicis.jpg",  
//         }
//       ],
//       projects: [
//         {
//           title: "IBM x NCCU | AI 加密貨幣詐騙偵測",
//           role: "組長",
//           period: "2025.09 - 2026.02",
//           points: ["找出高風險交易特徵並提出數據優化策略"]
//         },
//         {
//           title: "清華大學資料科學社 | 電商爬蟲數據倉儲",
//           role: "開發者",
//           period: "2025.09 - 2026.02",
//           points: ["使用 Python 採集 60,000+ 筆數據並執行 ETL 欄位標準化"]
//         }
//       ]
//     },
//     projects: {
//       data_tag: "Data Science Portfolio",
//       data_title: "數據分析作品",
//       data_intro: "專注於商業問題的數據解法，從資料清洗、統計建模到最後的視覺化洞察呈現。",
//       impact_label: "成果：",
//       items: [
//         {
//           title: "IBM x NCCU | AI 詐騙偵測",
//           category: "Machine Learning / BI",
//           tools: ["Python", "Scikit-learn", "Tableau"],
//           description: "針對加密貨幣詐騙特徵進行建模，並將分析結果轉化為金融機構的防詐決策建議。",
//           impact: "識別 15+ 關鍵風險指標"
//         },
//         {
//           title: "清大資科社 | 電商爬蟲數據倉儲",
//           category: "Data Engineering / ETL",
//           tools: ["Python", "Pandas", "PostgreSQL"],
//           description: "建立自動化爬蟲系統採集 60,000+ 筆數據，並執行清洗與標準化儲存。",
//           impact: "提升數據處理效率 40%"
//         }
//       ]
//     },
//     web: {
//       tag: "Development Portfolio",
//       title: "網頁開發與設計",
//       intro: "結合使用者研究與前端技術，打造美觀且具備良好互動體驗的數位產品。",
//       items: [
//         {
//           title: "DCT 17th Official Website",
//           type: "Official Website / Web Architecture",
//           tech: ["Next.js", "Tailwind CSS", "Vercel"],
//           desc: "為政大數位內容第 17 屆畢業展架設官方網站，負責前端介面開發與動態特效優化，確保在不同裝置上的流暢展示。"
//         },
//         {
//           title: "公館圓環遊戲專案 | Roundabout Game",
//           type: "JS Game Development",
//           tech: ["JavaScript", "HTML5 Canvas", "Game Logic"],
//           desc: "使用原生 JavaScript 打造的網頁互動遊戲，以公館圓環為場景設計遊戲機制，實作碰撞偵測與積分系統。"
//         },
//         {
//           title: "資安系統專題 | Cowrie Log Helper",
//           type: "Cybersecurity Tool / Log Analysis",
//           tech: ["Python", "Security Analysis", "Log Management"],
//           desc: "政大資管系畢業專題。開發輔助管理 Cowrie Honeypot 日誌的工具，提升資安分析人員處理攻擊紀錄的效率。"
//         }
//       ]
//     }
//   },
//   en: {
//     menu: {
//       home: "Home",
//       about: "About",
//       resume: "Resume",
//       data: "Data Projects",
//       web: "Web Dev",
//       footer: "© 2026 Claudia Huang. All rights reserved."
//     },
//     home: {
//       tag: "Data Analyst Portfolio",
//       title_part1: "Data Insights, ",
//       title_part2: "Driving Product Decisions & Growth",
//       intro_p1: "I am ",
//       intro_name: "Claudia Huang",
//       intro_p2: ". Currently a Data Management Intern at Perfect Corp. Specialized in SQL and Python for user behavior analysis, transforming fragmented data into actionable product strategies.",
//       card1_val: "3+",
//       card1_title: "Cross-domain Internships",
//       card1_desc: "Diverse business perspectives from Insurance, Media, and Beauty Tech industries.",
//       card2_val: "Advanced",
//       card2_title: "SQL / Python",
//       card2_desc: "Proficient in data cleaning, statistical analysis, and behavior modeling.",
//       card3_val: "Visual",
//       card3_title: "Data Visualization",
//       card3_desc: "Expertise in Tableau and BI tools to drive precision decision-making via storytelling.",
//       exp_title: "Current Experience",
//       exp_company: "Perfect Corp",
//       exp_role: "Data Management Intern",
//       exp_point1: "Analyze conversion paths for AI features to optimize UI/UX decisions.",
//       exp_point2: "Monitor global product trends and deliver data highlight reports for BD teams.",
//       btn_pdf: "View Resume (PDF)",
//       btn_projects: "Explore Portfolio",
//       btn_about: "More About Me"
//     },
//     about: {
//       tag: "Personal Traits & Interests",
//       title: "About Me",
//       intro: "In the world of data, I pursue precision and truth; in the dimension of life, I embrace diversity and cross-disciplinary exploration.",
//       traits: [
//         {
//           title: "Cultural Explorer",
//           content: "My exchange experience at UofSC taught me to observe business models from a global perspective. I love traveling because every city is a unique dataset.",
//           tags: ["Travel", "Cross-cultural", "Observation"],
//           bgClass: "bg-indigo-50/50 dark:bg-indigo-900/20"
//         },
//         {
//           title: "Polyglot Learner",
//           content: "I enjoy the logic of learning new languages. This passion for 'encoding and decoding' allows me to quickly master analysis tools.",
//           tags: ["English", "Systematic", "Logic"],
//           bgClass: "bg-emerald-50/50 dark:bg-emerald-900/20"
//         },
//         {
//           title: "NASA Dreamer",
//           content: "A lifelong fascination with space shapes my personality of seeking truth in the unknown. I translate this into a pursuit of deep data insights.",
//           tags: ["NASA Enthusiast", "Curiosity", "Truth"],
//           bgClass: "bg-slate-100/80 dark:bg-slate-800/50"
//         },
//         {
//           title: "Rhythm & Expression",
//           content: "Vogue and K-pop dance balance my rationality and sensibility, teaching me precision and rhythm amid massive data.",
//           tags: ["Vogue", "Performance", "Focus"],
//           bgClass: "bg-pink-50/50 dark:bg-pink-900/20"
//         }
//       ]
//     },
//     resume: {
//       tag: "Career Journey & Skills",
//       title: "Resume",
//       intro: "Experienced in large-scale data processing across Tech, Finance, and Marketing sectors.",
//       section_work: "Work Experience",
//       section_projects: "Selected Projects",
//       section_edu: "Education",
//       experiences: [
//         {
//           company: "Perfect Corp",
//           role: "Data Management Intern",
//           period: "2026.02 - Present",
//           bgClass: "bg-blue-50/50 dark:bg-blue-900/20",
//           points: [
//             "Extracted 30,000+ records to build automated Tableau & Python Dashboards.",
//             "Planned 30+ App tracking events to optimize user flow analysis.",
//             "Structured competitor financial reports to support business strategy."
//           ],
//           bgImg: "/perfectcorp.jpg"
//         },
//         {
//           company: "Cathay Life Insurance",
//           role: "IT Project Management Intern",
//           period: "2025.09 - 2026.02",
//           bgClass: "bg-green-50/50 dark:bg-green-900/20",
//           points: [
//             "Assisted in digital transformation by detailing requirements.",
//             "Optimized cross-department collaboration through version control."
//           ],
//           bgImg: "/cathay.jpg"
//         },
//         {
//           company: "Publicis Group",
//           role: "Marketing Data Analytics Intern",
//           period: "2024.09 - 2024.12",
//           bgClass: "bg-purple-50/50 dark:bg-purple-900/20",
//           points: [
//             "Cleaned 60,000+ GA records and built Looker Studio dashboards.",
//             "Developed Python tools to reduce manual processing time by 40%."
//           ],
//           bgImg: "/publicis.jpg"
//         }
//       ],
//       projects: [
//         {
//           title: "IBM x NCCU | AI Fraud Detection",
//           role: "Team Lead",
//           period: "2025.09 - 2026.02",
//           points: ["Identified high-risk features and proposed data strategies."]
//         },
//         {
//           title: "NTHU DSC | E-commerce ETL",
//           role: "Developer",
//           period: "2025.09 - 2026.02",
//           points: ["Collected 60,000+ records using Python for ETL standardization."]
//         }
//       ]
//     },
//     projects: {
//       data_tag: "Data Science Portfolio",
//       data_title: "Data Projects",
//       data_intro: "Focused on data-driven solutions for business problems, from cleaning to visual storytelling.",
//       impact_label: "Impact:",
//       items: [
//         {
//           title: "IBM x NCCU | AI Fraud Detection",
//           category: "Machine Learning / BI",
//           tools: ["Python", "Scikit-learn", "Tableau"],
//           description: "Modeled cryptocurrency fraud features and translated results into anti-fraud recommendations.",
//           impact: "Identified 15+ KRIs"
//         },
//         {
//           title: "NTHU DSC | E-commerce ETL",
//           category: "Data Engineering / ETL",
//           tools: ["Python", "Pandas", "PostgreSQL"],
//           description: "Built automated crawlers and performed data cleaning for standardized storage.",
//           impact: "Improved efficiency by 40%"
//         }
//       ]
//     },
//     web: {
//       tag: "Development Portfolio",
//       title: "Web & Design",
//       intro: "Combining UX research with frontend technology to build aesthetic digital products with seamless interactions.",
//       items: [
//         {
//           title: "OpenNCCU | Product UX Optimization",
//           type: "Product Design / UX Research",
//           tech: ["Figma", "React", "User Testing"],
//           desc: "Redesigned the campus information system. Structured fragmented info into high-fidelity prototypes based on 400+ user surveys."
//         },
//         {
//           title: "Black Hole Technology",
//           type: "Web Development",
//           tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
//           desc: "An interactive narrative website built with Next.js and Framer Motion, exploring corporate AI conspiracy theories."
//         }
//       ]
//     }
//   }
// };

// component/languageData.ts

export const translations = {
  zh: {
    menu: {
      home: "首頁 Home",
      about: "關於我 About",
      resume: "履歷經歷 Resume",
      data: "數據分析 Data",
      web: "網頁開發 Web",
      footer: "© 2026 Claudia Huang. 版權所有。"
    },
    home: {
      tag: "Data Analyst Portfolio",
      title_part1: "數據洞察，",
      title_part2: "引導產品決策與商業成長",
      intro_p1: "我是 ",
      intro_name: "Claudia 黃婷筠",
      intro_p2: "。目前在 Perfect Corp (玩美移動) 擔任數據管理實習生。我擅長透過 SQL 與 Python 進行用戶行為路徑分析，將碎片化的數據轉化為可執行的產品優化策略。",
      card1_val: "3+",
      card1_title: "跨領域實習經驗",
      card1_desc: "具備人壽、廣告媒體與美妝科技的多元商業視角，擅長跨部門溝通。",
      card2_val: "Advanced",
      card2_title: "SQL / Python",
      card2_desc: "精通資料清洗、統計分析與行為路徑建模，將數據轉化為成長動能。",
      card3_val: "Visual",
      card3_title: "視覺化洞察",
      card3_desc: "熟練使用 Tableau 與 BI 工具，以直觀圖表呈現數據故事，驅動精準決策。",
      exp_title: "Current Experience",
      exp_company: "玩美移動 Perfect Corp",
      exp_role: "Data Management Intern",
      exp_point1: "分析 AI 影像修復與物件移除功能之用戶轉換路徑，協助優化產品 UI/UX 決策。",
      exp_point2: "監測全球產品使用趨勢，並撰寫數據亮點報告供 Business Development 團隊參考。",
      btn_pdf: "檢視電子履歷 (PDF)",
      btn_projects: "探索數據作品集",
      btn_about: "更多關於我"
    },
    about: {
      tag: "Personal Spirit",
      title: "關於我 About",
      intro: "我是一個熱愛旅遊與文化碰撞的觀察者。對我而言，每一座城市都是一組獨特的數據集，在異國街頭的觀察與交流，是我理解世界、訓練洞察力最直觀的方式。",
      reflection: "「走過的國家越多，越發現數據背後的溫度。在雪梨觀察生活的餘裕、在紐約感受競爭的脈搏，這些文化衝擊最終都轉化成我分析問題時，更溫柔且多元的視角。」",
      photos: [
        { src: "/a1.JPEG", tag: "Sydney, Australia" },
        { src: "/a2.JPEG", tag: "Sydney, Australia" },
        { src: "/a3.JPEG", tag: "Tokyo, Japan" },
        { src: "/a4.JPEG", tag: "LA, US" },
        { src: "/a5.JPEG", tag: "NY, US" },
        { src: "/a6.JPEG", tag: "Seoul, South Korea" },
        { src: "/a7.JPEG", tag: "Seoul, South Korea" },
        { src: "/a8.JPEG", tag: "AT, US" },
        { src: "/a9.JPEG", tag: "WA, US" }
      ]
    },
    resume: {
      tag: "Career Journey & Skills",
      title: "履歷經歷 Resume",
      intro: "具備跨科技、金融與行銷產業的大規模資料處理經驗。擅長以數據驅動產品決策，致力於透過分析發掘商業成長動能。",
      section_work: "工作經歷 Work Experience",
      section_projects: "精選專案 Selected Projects",
      section_edu: "教育背景 Education",
      experiences: [
        {
          company: "玩美移動 Perfect Corp",
          role: "Data Management Intern",
          period: "2026.02 - Present",
          bgClass: "bg-blue-50/50 dark:bg-blue-900/20",
          bgImg: "/perfectcorp.jpg",
          points: [
            "提取 30,000+ 筆產品數據，建立 Tableau 與 Python 自動化 Dashboard。",
            "規劃 30+ App 埋點優化 User Flow 追蹤，提升分析精準度。",
            "結構化整理 10+ 份競業財報，支援內部商業策略制定。"
          ]
        },
        {
          company: "國泰人壽資訊策略發展部",
          role: "IT Project Management Intern",
          period: "2025.09 - 2026.02",
          bgClass: "bg-green-50/50 dark:bg-green-900/20",
          bgImg: "/cathay.jpg",
          points: [
            "協助數位轉型與 ITSM 導入專案之需求拆解與流程文件撰寫。",
            "透過專案進度追蹤與文件版本管理，降低跨部門協作誤差。"
          ]
        },
        {
          company: "陽獅集團 Publicis Group",
          role: "Marketing Data Analytics Intern",
          period: "2024.09 - 2024.12",
          bgClass: "bg-purple-50/50 dark:bg-purple-900/20",
          bgImg: "/publicis.jpg",
          points: [
            "負責 60,000+ 筆 GA 資料清洗，建立 Looker Studio 行銷看板。",
            "利用 Python 開發自動化工具，減少 40% 以上人為處理時間。"
          ]
        }
      ],
      projects: [
        {
          title: "IBM x NCCU | AI 加密貨幣詐騙偵測",
          role: "組長",
          period: "2025.09 - 2026.02",
          points: ["找出高風險交易特徵並提出數據優化策略"]
        },
        {
          title: "清華大學資料科學社 | 電商爬蟲數據倉儲",
          role: "開發者",
          period: "2025.09 - 2026.02",
          points: ["使用 Python 採集 60,000+ 筆數據並執行 ETL 欄位標準化"]
        }
      ]
    },
    projects: {
      data_tag: "Data Science Portfolio",
      data_title: "數據分析作品",
      data_intro: "專注於商業問題的數據解法，從資料清洗、統計建模到最後的視覺化洞察呈現。",
      impact_label: "成果：",
      items: [
        {
          title: "IBM x NCCU | AI 詐騙偵測",
          category: "Machine Learning / BI",
          tools: ["Python", "Scikit-learn", "Tableau"],
          description: "針對加密貨幣詐騙特徵進行建模，並將分析結果轉化為金融機構的防詐決策建議。",
          impact: "識別 15+ 關鍵風險指標"
        },
        {
          title: "清大資科社 | 電商爬蟲數據倉儲",
          category: "Data Engineering / ETL",
          tools: ["Python", "Pandas", "PostgreSQL"],
          description: "建立自動化爬蟲系統採集 60,000+ 筆數據，並執行清洗與標準化儲存。",
          impact: "提升數據處理效率 40%"
        }
      ]
    },
    web: {
      tag: "Development Portfolio",
      title: "網頁開發與設計",
      intro: "結合使用者研究與前端技術，打造美觀且具備良好互動體驗的數位產品。",
      items: [
        {
          title: "DCT 17th Official Website",
          type: "Official Website / Web Architecture",
          tech: ["Next.js", "Tailwind CSS", "Vercel"],
          desc: "為政大數位內容第 17 屆畢業展架設官方網站，負責前端介面開發與動態特效優化，確保在不同裝置上的流暢展示。"
        },
        {
          title: "公館圓環遊戲專案 | Roundabout Game",
          type: "JS Game Development",
          tech: ["JavaScript", "HTML5 Canvas", "Game Logic"],
          desc: "使用原生 JavaScript 打造的網頁互動遊戲，以公館圓環為場景設計遊戲機制，實作碰撞偵測與積分系統。"
        },
        {
          title: "資安系統專題 | Cowrie Log Helper",
          type: "Cybersecurity Tool / Log Analysis",
          tech: ["Python", "Security Analysis", "Log Management"],
          desc: "政大資管系畢業專題。開發輔助管理 Cowrie Honeypot 日誌的工具，提升資安分析人員處理攻擊紀錄的效率。"
        }
      ]
    }
  },
  en: {
    menu: {
      home: "Home",
      about: "About",
      resume: "Resume",
      data: "Data Projects",
      web: "Web Dev",
      footer: "© 2026 Claudia Huang. All rights reserved."
    },
    home: {
      tag: "Data Analyst Portfolio",
      title_part1: "Data Insights, ",
      title_part2: "Driving Product Decisions & Growth",
      intro_p1: "I am ",
      intro_name: "Claudia Huang",
      intro_p2: ". Currently a Data Management Intern at Perfect Corp. Specialized in SQL and Python for user behavior analysis, transforming fragmented data into actionable product strategies.",
      card1_val: "3+",
      card1_title: "Cross-domain Internships",
      card1_desc: "Diverse business perspectives from Insurance, Media, and Beauty Tech industries.",
      card2_val: "Advanced",
      card2_title: "SQL / Python",
      card2_desc: "Proficient in data cleaning, statistical analysis, and behavior modeling.",
      card3_val: "Visual",
      card3_title: "Data Visualization",
      card3_desc: "Expertise in Tableau and BI tools to drive precision decision-making via storytelling.",
      exp_title: "Current Experience",
      exp_company: "Perfect Corp",
      exp_role: "Data Management Intern",
      exp_point1: "Analyze conversion paths for AI features to optimize UI/UX decisions.",
      exp_point2: "Monitor global product trends and deliver data highlight reports for BD teams.",
      btn_pdf: "View Resume (PDF)",
      btn_projects: "Explore Portfolio",
      btn_about: "More About Me"
    },
    about: {
      tag: "Personal Spirit",
      title: "About Me",
      intro: "I am an observer who loves travel and cultural collisions. To me, every city is a unique dataset; observing and interacting on foreign streets is my most intuitive way of understanding the world and training my insights.",
      reflection: "“The more countries I visit, the more I discover the warmth behind the data. Observing the leisure of life in Sydney and feeling the pulse of competition in New York—these cultural impacts have eventually transformed into a gentler and more diverse perspective in my analysis.”",
      photos: [
        { src: "/a1.JPEG", tag: "Sydney, Australia" },
        { src: "/a2.JPEG", tag: "Sydney, Australia" },
        { src: "/a3.JPEG", tag: "Tokyo, Japan" },
        { src: "/a4.JPEG", tag: "LA, US" },
        { src: "/a5.JPEG", tag: "NY, US" },
        { src: "/a6.JPEG", tag: "Seoul, South Korea" },
        { src: "/a7.JPEG", tag: "Seoul, South Korea" },
        { src: "/a8.JPEG", tag: "AT, US" },
        { src: "/a9.JPEG", tag: "WA, US" }
      ]
    },
    resume: {
      tag: "Career Journey & Skills",
      title: "Resume",
      intro: "Experienced in large-scale data processing across Tech, Finance, and Marketing sectors.",
      section_work: "Work Experience",
      section_projects: "Selected Projects",
      section_edu: "Education",
      experiences: [
        {
          company: "Perfect Corp",
          role: "Data Management Intern",
          period: "2026.02 - Present",
          bgClass: "bg-blue-50/50 dark:bg-blue-900/20",
          bgImg: "/perfectcorp.jpg",
          points: [
            "Extracted 30,000+ records to build automated Tableau & Python Dashboards.",
            "Planned 30+ App tracking events to optimize user flow analysis.",
            "Structured competitor financial reports to support business strategy."
          ]
        },
        {
          company: "Cathay Life Insurance",
          role: "IT Project Management Intern",
          period: "2025.09 - 2026.02",
          bgClass: "bg-green-50/50 dark:bg-green-900/20",
          bgImg: "/cathay.jpg",
          points: [
            "Assisted in digital transformation by detailing requirements.",
            "Optimized cross-department collaboration through version control."
          ]
        },
        {
          company: "Publicis Group",
          role: "Marketing Data Analytics Intern",
          period: "2024.09 - 2024.12",
          bgClass: "bg-purple-50/50 dark:bg-purple-900/20",
          bgImg: "/publicis.jpg",
          points: [
            "Cleaned 60,000+ GA records and built Looker Studio dashboards.",
            "Developed Python tools to reduce manual processing time by 40%."
          ]
        }
      ],
      projects: [
        {
          title: "IBM x NCCU | AI Fraud Detection",
          role: "Team Lead",
          period: "2025.09 - 2026.02",
          points: ["Identified high-risk features and proposed data strategies."]
        },
        {
          title: "NTHU DSC | E-commerce ETL",
          role: "Developer",
          period: "2025.09 - 2026.02",
          points: ["Collected 60,000+ records using Python for ETL standardization."]
        }
      ]
    },
    projects: {
      data_tag: "Data Science Portfolio",
      data_title: "Data Projects",
      data_intro: "Focused on data-driven solutions for business problems, from cleaning to visual storytelling.",
      impact_label: "Impact:",
      items: [
        {
          title: "IBM x NCCU | AI Fraud Detection",
          category: "Machine Learning / BI",
          tools: ["Python", "Scikit-learn", "Tableau"],
          description: "Modeled cryptocurrency fraud features and translated results into anti-fraud recommendations.",
          impact: "Identified 15+ KRIs"
        },
        {
          title: "NTHU DSC | E-commerce ETL",
          category: "Data Engineering / ETL",
          tools: ["Python", "Pandas", "PostgreSQL"],
          description: "Built automated crawlers and performed data cleaning for standardized storage.",
          impact: "Improved efficiency by 40%"
        }
      ]
    },
    web: {
      tag: "Development Portfolio",
      title: "Web Dev & Design",
      intro: "Combining UX research with frontend technology to build aesthetic digital products with seamless interactions.",
      items: [
        {
          title: "DCT 17th Official Website",
          type: "Official Website / Web Architecture",
          tech: ["Next.js", "Tailwind CSS", "Vercel"],
          desc: "Developed the official website for NCCU Digital Content 17th Graduation Exhibition, optimizing frontend UI and motion effects."
        },
        {
          title: "Gongguan Roundabout Game",
          type: "JS Game Development",
          tech: ["JavaScript", "HTML5 Canvas", "Game Logic"],
          desc: "An interactive web game built with vanilla JS, featuring collision detection and scoring systems based on the Gongguan Roundabout."
        },
        {
          title: "Cowrie Log Helper",
          type: "Cybersecurity Tool / Log Analysis",
          tech: ["Python", "Security Analysis", "Log Management"],
          desc: "NCCU MIS Graduation Project. A tool developed to help security analysts manage and interpret Cowrie Honeypot logs efficiently."
        }
      ]
    }
  }
};