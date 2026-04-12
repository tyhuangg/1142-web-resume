// "use client"

// import Menu from "@/component/Menu"
// import { FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";

// export default function ExperiencePage() {
//   const experiences = [
//     {
//       company: "玩美移動 Perfect Corp",
//       role: "Data Management Intern",
//       period: "2026.03 - Present",
//       description: [
//         "利用 SQL 監測 AI 影像修復功能之使用表現，分析用戶留存關鍵指標。",
//         "撰寫週報提供產品優化建議，協助 Business Development 團隊掌握市場動向。"
//       ],
//       tools: ["SQL", "Excel", "Data Visualization"]
//     },
//     {
//       company: "國泰人壽 Cathay Life Insurance",
//       role: "IT Project Management Intern",
//       period: "2025.07 - 2025.12",
//       description: [
//         "協助跨部門溝通與系統開發流程追蹤，確保專案如期上線。",
//         "優化內部文件管理流程，提升團隊協作效率。"
//       ],
//       tools: ["Project Management", "Jira", "Communication"]
//     },
//     {
//       company: "陽獅集團 Publicis Group",
//       role: "Marketing Data Analytics Intern",
//       period: "2024.12 - 2025.06",
//       description: [
//         "分析數位廣告投放數據，優化投放策略以提升點擊率 (CTR)。",
//         "使用 Python 進行數據清洗，縮短報表產出時間 20%。"
//       ],
//       tools: ["Python", "Marketing Analytics", "Google Analytics"]
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>

//       <main className="flex-grow overflow-y-auto bg-white custom-scrollbar">
//         <div className="max-w-4xl mx-auto px-12 py-20">
          
//           <header className="mb-12">
//             <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Experiences / Resume</h1>
//             <p className="text-slate-500">從數據中提煉洞察，在實踐中累積專業。</p>
//           </header>

//           {/* 技能概覽區塊 (UX: 快速掃描) */}
//           <section className="mb-16">
//             <div className="flex items-center text-blue-600 font-bold mb-6">
//               <FaTools className="mr-2" /> 核心技能棧 Tech Stack
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["Python", "SQL", "Tableau", "Next.js", "FlutterFlow", "Google Analytics", "Data Cleaning"].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-600 font-medium">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </section>

//           {/* 工作經歷時間軸 */}
//           <section className="relative border-l-2 border-slate-100 ml-4 pl-8 space-y-12">
//             <div className="flex items-center text-slate-900 font-bold mb-8 -ml-12">
//               <div className="bg-white p-2 rounded-full border-2 border-blue-500 mr-4">
//                 <FaBriefcase className="text-blue-500" />
//               </div>
//               <h2 className="text-xl">工作經歷 Work Experience</h2>
//             </div>

//             {experiences.map((exp, index) => (
//               <div key={index} className="relative group">
//                 {/* 時間軸圓點 */}
//                 <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-white group-hover:bg-blue-500 transition-colors"></div>
                
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold text-slate-800">{exp.company}</h3>
//                   <span className="text-sm font-medium text-slate-400">{exp.period}</span>
//                 </div>
//                 <p className="text-blue-600 font-semibold mb-4 text-sm">{exp.role}</p>
                
//                 <ul className="space-y-2 mb-4">
//                   {exp.description.map((item, i) => (
//                     <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
//                       <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-300 rounded-full flex-shrink-0"></span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex flex-wrap gap-2">
//                   {exp.tools.map((tool) => (
//                     <span key={tool} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* 學歷區塊 (略，可比照辦理) */}
//           <section className="mt-20 border-l-2 border-slate-100 ml-4 pl-8">
//              {/* 這裡可以放 NCCU 與 USC 的交換紀錄 */}
//           </section>

//         </div>
//       </main>
//     </div>
//   );
// }

// "use client"

// import Menu from "@/component/Menu"
// import { FaGraduationCap, FaBriefcase, FaCode, FaChartLine, FaUserFriends } from "react-icons/fa";

// export default function ResumePage() {
//   // 經歷數據 - 已補全
//   const experiences = [
//     {
//       company: "玩美移動 Perfect Corp",
//       role: "Data Management Intern",
//       period: "2026.02 - Present",
//       bgClass: "bg-blue-50/50", // 懸停時的背景色，之後可換成 bg-[url('/banner1.jpg')]
//       points: [
//         "提取 30,000+ 筆產品數據，建立 Tableau 與 Python 自動化 Dashboard",
//         "規劃 30+ App 埋點優化 User Flow 追蹤，提升分析精準度",
//         "結構化整理 10+ 份競業財報，支援內部商業策略制定"
//       ]
//     },
//     {
//       company: "國泰人壽資訊策略發展部",
//       role: "IT Project Management Intern",
//       period: "2025.09 - 2026.02",
//       bgClass: "bg-green-50/50",
//       points: [
//         "協助數位轉型與 ITSM 導入專案之需求拆解與流程文件撰寫",
//         "透過專案進度追蹤與文件版本管理，降低跨部門協作誤差"
//       ]
//     },
//     {
//       company: "陽獅集團 Publicis Group",
//       role: "Marketing Data Analytics Intern",
//       period: "2024.09 - 2024.12",
//       bgClass: "bg-purple-50/50",
//       points: [
//         "負責 60,000+ 筆 GA 資料清洗，建立 Looker Studio 行銷看板",
//         "利用 Python 開發自動化工具，減少 40% 以上人為處理時間"
//       ]
//     },
//     {
//       company: "時書數位內容",
//       role: "Content Data Analyst Intern",
//       period: "2023.11 - 2024.07",
//       bgClass: "bg-orange-50/50",
//       points: [
//         "結構化 40,000+ 筆產品資料，轉化為可追蹤數據單位",
//         "分析 300+ 位使用者回饋與後台數據，提出產品優化建議"
//       ]
//     }
//   ];

//   // 專案數據
//   const projects = [
//     {
//       title: "IBM x NCCU | AI 加密貨幣詐騙偵測",
//       role: "組長",
//       period: "2025.09 - 2026.02",
//       points: ["找出高風險交易特徵並提出數據優化策略"]
//     },
//     {
//       title: "清華大學資料科學社 | 電商爬蟲數據倉儲",
//       role: "開發者",
//       period: "2025.09 - 2026.02",
//       points: ["使用 Python 採集 60,000+ 筆數據並執行 ETL 欄位標準化"]
//     },
//     {
//       title: "OpenNCCU | 全人系統 UX 優化專案",
//       role: "數據/UX 研究",
//       period: "2024.02 - 2025.02",
//       points: ["分析 400+ 份用戶問卷，轉化為 Prototype 驗證方案"]
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>

//       <main className="flex-grow overflow-y-auto bg-white custom-scrollbar">
//         <div className="max-w-5xl mx-auto px-12 py-20">
          
//           {/* 1. Header - 模仿 Homepage 格式 */}
//           <header className="mb-20">
//             <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               Career Journey & Skills
//             </div>
//             <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
//               履歷經歷 Resume
//             </h1>
//             <p className="text-slate-500 max-w-2xl leading-relaxed">
//               具備跨科技、金融與行銷產業的大規模資料處理經驗，致力於將複雜數據轉化為商業建議。
//             </p>
//           </header>

//           {/* 2. 工作經歷 - 區塊化設計與 Hover 背景 */}
//           <section className="mb-24">
//             <h2 className="text-sm font-bold text-slate-400 mb-10 flex items-center uppercase tracking-widest">
//               <FaBriefcase className="mr-3 text-blue-500" /> Professional Experience
//             </h2>
            
//             <div className="grid grid-cols-1 gap-8">
//               {experiences.map((exp, idx) => (
//                 <div 
//                   key={idx} 
//                   className={`relative group p-8 rounded-3xl border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
//                 >
//                   {/* 動態背景層 */}
//                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${exp.bgClass} bg-cover bg-center`}></div>
                  
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{exp.company}</h3>
//                       <p className="text-blue-600 font-medium text-sm mt-1">{exp.role}</p>
//                     </div>
//                     <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{exp.period}</span>
//                   </div>
                  
//                   <ul className="space-y-3">
//                     {exp.points.map((p, i) => (
//                       <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start">
//                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* 3. 專案與社群經歷 - 緊湊 Block */}
//           <section className="mb-24">
//             <h2 className="text-sm font-bold text-slate-400 mb-10 flex items-center uppercase tracking-widest">
//               <FaCode className="mr-3 text-blue-500" /> Projects & Leadership
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {projects.map((proj, idx) => (
//                 <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 transition-all">
//                   <h3 className="font-bold text-slate-800 mb-1">{proj.title} </h3>
//                   <div className="flex justify-between text-[10px] font-bold text-blue-500 mb-4 uppercase tracking-tighter">
//                     <span>{proj.role}</span>
//                     <span className="text-slate-400">{proj.period}</span>
//                   </div>
//                   {proj.points.map((p, i) => (
//                     <p key={i} className="text-xs text-slate-500 leading-relaxed">{p}</p>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* 4. 教育背景 - 乾淨區塊 */}
//           <section className="mb-10">
//             <h2 className="text-sm font-bold text-slate-400 mb-10 flex items-center uppercase tracking-widest">
//               <FaGraduationCap className="mr-3 text-blue-500" /> Education
//             </h2>
//             <div className="space-y-6">
//               <div className="flex justify-between items-center p-6 bg-white border border-slate-100 rounded-2xl">
//                 <div>
//                   <h3 className="font-bold text-slate-800">國立政治大學 NCCU</h3>
//                   <p className="text-sm text-slate-500">資管系 & 數位內容雙主修</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs font-bold text-slate-400">2021 - 2026 Expected</span>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center p-6 bg-white border border-slate-100 rounded-2xl">
//                 <div>
//                   <h3 className="font-bold text-slate-800">University of South Carolina</h3>
//                   <p className="text-sm text-slate-500">Darla Moore Business School 交換學生</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs font-bold text-slate-400">2025.01 - 2025.06</span>
//                 </div>
//               </div>
//             </div>
//           </section>

//         </div>
//       </main>
//     </div>
//   );
// // }
// "use client"

// import Menu from "@/component/Menu"
// import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

// export default function ResumePage() {
//   // 經歷數據
//   const experiences = [
//     {
//       company: "玩美移動 Perfect Corp",
//       role: "Data Management Intern",
//       period: "2026.02 - Present",
//       bgClass: "bg-blue-50/50",
//       points: [
//         "提取 30,000+ 筆產品數據，建立 Tableau 與 Python 自動化 Dashboard。",
//         "規劃 30+ App 埋點優化 User Flow 追蹤，提升分析精準度。",
//         "結構化整理 10+ 份競業財報，支援內部商業策略制定。"
//       ]
//     },
//     {
//       company: "國泰人壽資訊策略發展部",
//       role: "IT Project Management Intern",
//       period: "2025.09 - 2026.02",
//       bgClass: "bg-green-50/50",
//       points: [
//         "協助數位轉型與 ITSM 導入專案之需求拆解與流程文件撰寫。",
//         "透過專案進度追蹤與文件版本管理，降低跨部門協作誤差。"
//       ]
//     },
//     {
//       company: "陽獅集團 Publicis Group",
//       role: "Marketing Data Analytics Intern",
//       period: "2024.09 - 2024.12",
//       bgClass: "bg-purple-50/50",
//       points: [
//         "負責 60,000+ 筆 GA 資料清洗，建立 Looker Studio 行銷看板。",
//         "利用 Python 開發自動化工具，減少 40% 以上人為處理時間。"
//       ]
//     },
//     {
//       company: "時書數位內容",
//       role: "Content Data Analyst Intern",
//       period: "2023.11 - 2024.07",
//       bgClass: "bg-orange-50/50",
//       points: [
//         "結構化 40,000+ 筆產品資料，轉化為可追蹤數據單位。",
//         "分析 300+ 位使用者回饋與後台數據，提出產品優化建議。"
//       ]
//     }
//   ];

//   // 專案數據
//   const projects = [
//     {
//       title: "IBM x NCCU | AI 加密貨幣詐騙偵測",
//       role: "組長",
//       period: "2025.09 - 2026.02",
//       points: ["找出高風險交易特徵並提出數據優化策略"]
//     },
//     {
//       title: "清華大學資料科學社 | 電商爬蟲數據倉儲",
//       role: "開發者",
//       period: "2025.09 - 2026.02",
//       points: ["使用 Python 採集 60,000+ 筆數據並執行 ETL 欄位標準化"]
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
      
//       {/* 左側固定 Menu */}
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>

//       {/* 右側內容區 - 確保寬度與 Home 完全一致 */}
//       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 custom-scrollbar flex flex-col">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
//           {/* 1. Header - 結構完全複刻 Homepage */}
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               Career Journey & Skills
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
//               履歷經歷 Resume
//             </h1>
//             <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
//               具備跨科技、金融與行銷產業的大規模資料處理經驗。擅長以數據驅動產品決策，致力於透過分析發掘商業成長動能。
//             </p>
//           </header>

//           {/* 2. 工作經歷 - 區塊化設計 */}
//           <section className="mb-24">
//             <h2 className="text-sm font-bold text-slate-400 mb-10 flex items-center uppercase tracking-widest">
//               <span className="w-12 h-px bg-slate-200 mr-4"></span>
//               Work Experience
//             </h2>
            
//             <div className="space-y-8">
//               {experiences.map((exp, idx) => (
//                 <div 
//                   key={idx} 
//                   className="group relative p-8 rounded-3xl border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
//                 >
//                   {/* Hover 背景效果 */}
//                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${exp.bgClass}`}></div>
                  
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{exp.company}</h3>
//                       <p className="text-blue-600 font-semibold text-sm mt-1">{exp.role}</p>
//                     </div>
//                     <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{exp.period}</span>
//                   </div>
                  
//                   <ul className="space-y-3">
//                     {exp.points.map((p, i) => (
//                       <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start">
//                         <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* 3. 專案經歷 - 區塊化設計 */}
//           <section className="mb-24">
//             <h2 className="text-sm font-bold text-slate-400 mb-10 flex items-center uppercase tracking-widest">
//               <span className="w-12 h-px bg-slate-200 mr-4"></span>
//               Selected Projects
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {projects.map((proj, idx) => (
//                 <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-200 transition-all group">
//                   <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700">{proj.title}</h3>
//                   <div className="flex justify-between text-[10px] font-bold text-blue-500 mb-4 uppercase tracking-wider">
//                     <span>{proj.role}</span>
//                     <span className="text-slate-400">{proj.period}</span>
//                   </div>
//                   {proj.points.map((p, i) => (
//                     <p key={i} className="text-xs text-slate-500 leading-relaxed">{p}</p>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* 4. 教育背景 */}
//           <section className="mb-10">
//             <h2 className="text-sm font-bold text-slate-400 mb-10 flex items-center uppercase tracking-widest">
//               <span className="w-12 h-px bg-slate-200 mr-4"></span>
//               Education
//             </h2>
//             <div className="space-y-6">
//               <div className="flex justify-between items-center p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-md transition-shadow">
//                 <div>
//                   <h3 className="text-lg font-bold text-slate-800">國立政治大學 NCCU</h3>
//                   <p className="text-sm text-slate-500 font-medium">資管系 & 數位內容雙主修</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs font-bold text-slate-400">2021 - 2026 Expected</span>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-md transition-shadow">
//                 <div>
//                   <h3 className="text-lg font-bold text-slate-800">University of South Carolina</h3>
//                   <p className="text-sm text-slate-500 font-medium">Darla Moore Business School 交換學生</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs font-bold text-slate-400">2025.01 - 2025.06</span>
//                 </div>
//               </div>
//             </div>
//           </section>

//         </div>
//       </main>
//     </div>
//   );
// }

"use client"

import Menu from "@/component/Menu"
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

export default function ResumePage() {
  // 經歷數據
  const experiences = [
    {
      company: "玩美移動 Perfect Corp",
      role: "Data Management Intern",
      period: "2026.02 - Present",
      // 修正：深色模式下使用低飽和度的藍色背景
      bgClass: "bg-blue-50/50 dark:bg-blue-900/20",
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
      points: [
        "負責 60,000+ 筆 GA 資料清洗，建立 Looker Studio 行銷看板。",
        "利用 Python 開發自動化工具，減少 40% 以上人為處理時間。"
      ]
    },
    {
      company: "時書數位內容",
      role: "Content Data Analyst Intern",
      period: "2023.11 - 2024.07",
      bgClass: "bg-orange-50/50 dark:bg-orange-900/20",
      points: [
        "結構化 40,000+ 筆產品資料，轉化為可追蹤數據單位。",
        "分析 300+ 位使用者回饋與後台數據，提出產品優化建議。"
      ]
    }
  ];

  // 專案數據
  const projects = [
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
  ];

  return (
    <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
      
      {/* 左側固定 Menu */}
      <aside className="w-[280px] flex-shrink-0 h-full">
        <Menu />
      </aside>

      {/* 右側內容區 */}
      <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500 custom-scrollbar flex flex-col">
        <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
          {/* 1. Header - 結構與 Homepage 一致 */}
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
              Career Journey & Skills
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              履歷經歷 Resume
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              具備跨科技、金融與行銷產業的大規模資料處理經驗。擅長以數據驅動產品決策，致力於透過分析發掘商業成長動能。
            </p>
          </header>

          {/* 2. 工作經歷 */}
          <section className="mb-24">
            <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-10 flex items-center uppercase tracking-widest">
              <span className="w-12 h-px bg-slate-200 dark:bg-slate-800 mr-4"></span>
              Work Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-8 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all duration-500 bg-white dark:bg-slate-800/30 overflow-hidden"
                >
                  {/* Hover 背景效果 */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${exp.bgClass}`}></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1">{exp.role}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/50 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 專案經歷 */}
          <section className="mb-24">
            <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-10 flex items-center uppercase tracking-widest">
              <span className="w-12 h-px bg-slate-200 dark:bg-slate-800 mr-4"></span>
              Selected Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, idx) => (
                <div key={idx} className="p-8 bg-slate-50 dark:bg-slate-800/20 rounded-3xl border border-transparent dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all group">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                    {proj.title}
                  </h3>
                  <div className="flex justify-between text-[10px] font-bold text-blue-500 dark:text-blue-400 mb-4 uppercase tracking-wider">
                    <span>{proj.role}</span>
                    <span className="text-slate-400 dark:text-slate-500">{proj.period}</span>
                  </div>
                  {proj.points.map((p, i) => (
                    <p key={i} className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* 4. 教育背景 */}
          <section className="mb-10">
            <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-10 flex items-center uppercase tracking-widest">
              <span className="w-12 h-px bg-slate-200 dark:bg-slate-800 mr-4"></span>
              Education
            </h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-8 bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-3xl transition-all">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">國立政治大學 NCCU</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">資管系 & 數位內容雙主修</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">2021 - 2026 Expected</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-8 bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-3xl transition-all">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">University of South Carolina</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Darla Moore Business School 交換學生</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">2025.01 - 2025.06</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}