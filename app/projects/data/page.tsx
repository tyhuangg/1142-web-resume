// "use client"

// import Menu from "@/component/Menu";
// import Link from "next/link";

// export default function ProgrammingProject() {

//   let projectData = {
//     "1": {
//       "name":"寵物用品店",
//       "imageUrl": "/cat.png"
//     },
//     "2": {
//       "name":"樂器行官網",
//       "imageUrl": "/ins.jpg"
//     },
//   };

//   return (
//     <>
//       <div className="flex h-full">
//         <Link href="/" className="sm:hidden absolute left-2 top-2 bg-white">  
//             返回
//         </Link>
//         <div className="sm:block hidden">
//           <Menu />
//         </div>
//         <div className="bg-red-500 w-full">
//           <div className="bg-white h-full w-full p-3">
//             <div className="text-[32px] font-bold">程式專案</div>
//             <div className="text-[16px] text-gray-600 ">這裡收錄我的程式學習過程</div>
            
//             <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 m-[26px]">
              
//               <div
//                 className={`bg-amber-50 rounded-2xl h-full flex justify-center items-center 
//                 row-span-2 bg-center bg-cover relative overflow-hidden`}
//                 style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}
//               >
                
//                 <div className="text-white bg-black/15 w-full h-[80px] flex 
//                                   justify-center items-center backdrop-blur-sm
//                                   absolute bottom-0                  
//                 ">
//                   { projectData["1"]["name"] }
//                 </div>

//                 {/* <div className="text-red-500 text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">中心點</div> */}
//               </div>



//               <div className={`bg-amber-50 rounded-2xl h-full flex justify-center items-center 
//                 bg-center bg-cover relative overflow-hidden`}
                
//                 style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}
              
//               >

//                 <div className="text-white bg-black/15 w-full h-[80px] flex 
//                                   justify-center items-center backdrop-blur-sm
//                                   absolute bottom-0"
//                 >
//                   { projectData["2"]["name"] }
//                 </div>
                
//               </div>
              
//               <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案2</div>
//               <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案3</div>
//               <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2">專案4</div>
//               <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案5</div>
//               <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案6</div>
//               <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案7</div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// }


// "use client"
// import Menu from "@/component/Menu"
// import { FaDatabase, FaExternalLinkAlt } from "react-icons/fa"

// export default function DataProjects() {
//   const projects = [
//     {
//       title: "IBM x NCCU | AI 詐騙偵測",
//       category: "Machine Learning / Business Intelligence",
//       tools: ["Python", "Scikit-learn", "Tableau"],
//       description: "針對加密貨幣詐騙特徵進行建模，並將分析結果轉化為金融機構的防詐決策建議。",
//       impact: "識別 15+ 關鍵風險指標"
//     },
//     {
//       title: "清大資科社 | 電商爬蟲數據倉儲",
//       category: "Data Engineering / ETL",
//       tools: ["Python", "Pandas", "PostgreSQL"],
//       description: "建立自動化爬蟲系統採集 60,000+ 筆數據，並執行清洗與標準化儲存。",
//       impact: "提升數據處理效率 40%"
//     },
//     {
//       title: "UofSC | Netflix 市場競爭分析",
//       category: "Market Analysis",
//       tools: ["Excel", "Power BI", "Statistics"],
//       description: "分析串流平台於北美市場之訂閱成長率與內容投資報酬率。",
//       impact: "產出國際市場擴張策略建議"
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
//       <aside className="w-[280px] flex-shrink-0 h-full"><Menu /></aside>
//       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 custom-scrollbar flex flex-col">
//         <div className="max-w-4xl mx-auto px-12 py-20">
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">Data Science Portfolio</div>
//             <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">數據分析作品</h1>
//           </header>
          
//           <div className="grid grid-cols-1 gap-12">
//             {projects.map((proj, idx) => (
//               <div key={idx} className="group relative p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{proj.category}</span>
//                     <h2 className="text-2xl font-bold text-slate-800 mt-2">{proj.title}</h2>
//                   </div>
//                   <div className="text-right">
//                     <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">成果：{proj.impact}</span>
//                   </div>
//                 </div>
//                 <p className="text-slate-600 mb-8 leading-relaxed">{proj.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {proj.tools.map(tool => (
//                     <span key={tool} className="px-3 py-1 bg-white border border-slate-200 text-slate-400 text-[10px] font-bold rounded-md">{tool}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }


// "use client"
// import Menu from "@/component/Menu"
// import { FaDatabase, FaChartBar, FaBullseye } from "react-icons/fa"

// export default function DataProjects() {
//   const projects = [
//     {
//       title: "IBM x NCCU | AI 詐騙偵測",
//       category: "Machine Learning / Business Intelligence",
//       tools: ["Python", "Scikit-learn", "Tableau"],
//       description: "針對加密貨幣詐騙特徵進行建模，並將分析結果轉化為金融機構的防詐決策建議。",
//       impact: "識別 15+ 關鍵風險指標"
//     },
//     {
//       title: "清大資科社 | 電商爬蟲數據倉儲",
//       category: "Data Engineering / ETL",
//       tools: ["Python", "Pandas", "PostgreSQL"],
//       description: "建立自動化爬蟲系統採集 60,000+ 筆數據，並執行清洗與標準化儲存。",
//       impact: "提升數據處理效率 40%"
//     },
//     {
//       title: "UofSC | Netflix 市場競爭分析",
//       category: "Market Analysis",
//       tools: ["Excel", "Power BI", "Statistics"],
//       description: "分析串流平台於北美市場之訂閱成長率與內容投資報酬率。",
//       impact: "產出國際市場擴張策略建議"
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>
      
//       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 custom-scrollbar flex flex-col">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               Data Science Portfolio
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
//               數據分析作品
//             </h1>
//             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//               專注於商業問題的數據解法，從資料清洗、統計建模到最後的視覺化洞察呈現。
//             </p>
//           </header>
          
//           <div className="grid grid-cols-1 gap-10">
//             {projects.map((proj, idx) => (
//               <div 
//                 key={idx} 
//                 className="group relative p-10 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-blue-200 dark:hover:border-blue-800"
//               >
//                 <div className="flex justify-between items-start mb-8">
//                   <div className="space-y-2">
//                     <span className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
//                       <FaChartBar className="mr-2" /> {proj.category}
//                     </span>
//                     <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {proj.title}
//                     </h2>
//                   </div>
//                   <div className="text-right">
//                     <span className="flex items-center text-xs font-black text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-xl">
//                       <FaBullseye className="mr-2" /> {proj.impact}
//                     </span>
//                   </div>
//                 </div>

//                 <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-base">
//                   {proj.description}
//                 </p>

//                 <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
//                   {proj.tools.map(tool => (
//                     <span 
//                       key={tool} 
//                       className="px-4 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300 text-[11px] font-bold rounded-lg tracking-wide uppercase"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }




// "use client"

// import Menu from "@/component/Menu"
// import { useLang } from "@/component/LanguageProvider"
// import { translations } from "@/component/languageData"
// import { FaChartBar, FaBullseye } from "react-icons/fa"

// export default function DataProjects() {
//   const { lang } = useLang();
//   const t = translations[lang as keyof typeof translations].projects;

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>
      
//       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 custom-scrollbar flex flex-col">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               {t.data_tag}
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
//               {t.data_title}
//             </h1>
//             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//               {t.data_intro}
//             </p>
//           </header>
          
//           <div className="grid grid-cols-1 gap-10">
//             {t.items.map((proj: any, idx: number) => (
//               <div 
//                 key={idx} 
//                 className="group relative p-10 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-blue-200 dark:hover:border-blue-800"
//               >
//                 <div className="flex justify-between items-start mb-8">
//                   <div className="space-y-2">
//                     <span className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
//                       <FaChartBar className="mr-2" /> {proj.category}
//                     </span>
//                     <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {proj.title}
//                     </h2>
//                   </div>
//                   <div className="text-right">
//                     <span className="flex items-center text-xs font-black text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-xl">
//                       <FaBullseye className="mr-2" /> {t.impact_label} {proj.impact}
//                     </span>
//                   </div>
//                 </div>

//                 <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-base">
//                   {proj.description}
//                 </p>

//                 <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
//                   {proj.tools.map((tool: string) => (
//                     <span 
//                       key={tool} 
//                       className="px-4 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300 text-[11px] font-bold rounded-lg tracking-wide uppercase"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// "use client"
// import Menu from "@/component/Menu"
// import { useLang } from "@/component/LanguageProvider"
// import { translations } from "@/component/languageData"
// import { FaChartBar, FaBullseye, FaExternalLinkAlt } from "react-icons/fa"
// import ImageCarousel from "@/component/ImageCarousel"

// export default function DataProjects() {
//   const { lang } = useLang();
//   const t = translations[lang as keyof typeof translations].projects;

//   // 1. 定義每個專案的照片與連結 (這段必須放在 return 之前)
//   const getProjectConfig = (title: string) => {
//     const upperTitle = title.toUpperCase();
//     if (upperTitle.includes("IBM")) {
//       return {
//         link: "https://github.com/tyhuangg/Fintech_Crypto-Fraud-Detection-Project",
//         images: ["/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg"] 
//       };
//     }
//     if (upperTitle.includes("清大") || upperTitle.includes("NTHU")) {
//       return {
//         link: "", // 拿掉 Canva 連結
//         images: ["/8.jpg", "/9.jpg", "/10.jpg", "/11.jpg", "/12.jpg", "/13.jpg"]
//       };
//     }
//     return { link: "", images: [] };
//   };

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500 font-sans">
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>
      
//       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500 custom-scrollbar flex flex-col">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               {t.data_tag}
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
//               {t.data_title}
//             </h1>
//           </header>
          
//           <div className="grid grid-cols-1 gap-12">
//             {t.items.map((proj: any, idx: number) => {
//               const config = getProjectConfig(proj.title);
              
//               return (
//                 <div 
//                   key={idx} 
//                   className="group relative p-10 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-blue-400 dark:hover:border-blue-800"
//                 >
//                   {/* 2. 插入輪播圖組件 */}
//                   {config.images.length > 0 && (
//                     <div className="mb-8">
//                       <ImageCarousel images={config.images} />
//                     </div>
//                   )}

//                   <div className="flex justify-between items-start mb-6">
//                     <div className="space-y-1">
//                       <span className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
//                         <FaChartBar className="mr-2" /> {proj.category}
//                       </span>
                      
//                       {/* 如果有連結才顯示 a 標籤，否則只顯示標題 */}
//                       {config.link ? (
//                         <a href={config.link} target="_blank" rel="noopener noreferrer" className="flex items-center group/link">
//                           <h2 className="text-3xl font-bold text-slate-800 dark:text-white group-hover/link:text-blue-600 transition-colors">
//                             {proj.title}
//                           </h2>
//                           <FaExternalLinkAlt className="ml-3 text-sm opacity-50 group-hover/link:opacity-100 transition-opacity" />
//                         </a>
//                       ) : (
//                         <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
//                           {proj.title}
//                         </h2>
//                       )}
//                     </div>

//                     <div className="text-right">
//                       <span className="flex items-center text-xs font-black text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-xl">
//                         <FaBullseye className="mr-2" /> {t.impact_label} {proj.impact}
//                       </span>
//                     </div>
//                   </div>

//                   <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base mb-8">
//                     {proj.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
//                     {proj.tools.map((tool: string) => (
//                       <span 
//                         key={tool} 
//                         className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-600 uppercase tracking-wider"
//                       >
//                         {tool}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }


"use client"

import Menu from "@/component/Menu"
import Link from "next/link"
import { useLang } from "@/component/LanguageProvider"
import { translations } from "@/component/languageData"
import { FaChartBar, FaBullseye, FaExternalLinkAlt, FaChevronLeft } from "react-icons/fa"
import ImageCarousel from "@/component/ImageCarousel"

export default function DataProjects() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations].projects;

  // 定義每個專案的照片與連結
  const getProjectConfig = (title: string) => {
    const upperTitle = title.toUpperCase();
    if (upperTitle.includes("IBM")) {
      return {
        link: "https://github.com/tyhuangg/Fintech_Crypto-Fraud-Detection-Project",
        images: ["/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg"] 
      };
    }
    if (upperTitle.includes("清大") || upperTitle.includes("NTHU")) {
      return {
        link: "", 
        images: ["/8.jpg", "/9.jpg", "/10.jpg", "/11.jpg", "/12.jpg", "/13.jpg"]
      };
    }
    return { link: "", images: [] };
  };

  return (
    <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500 font-sans">
      
      {/* 左側 Menu：手機版隱藏 (hidden)，電腦版顯示 (sm:block) */}
      <aside className="hidden sm:block w-[280px] flex-shrink-0 h-full border-r border-slate-200 dark:border-slate-800">
        <Menu />
      </aside>
      
      <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500 custom-scrollbar relative flex flex-col">
        
        {/* 手機版專用返回按鈕 */}
        <Link 
          href="/" 
          className="sm:hidden fixed top-4 left-4 z-50 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 active:scale-95 transition-transform"
        >
          <FaChevronLeft size={20} />
        </Link>

        {/* 內距調整：手機版 px-6，電腦版維持 px-12 */}
        <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-20 w-full">
          
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
              {t.data_tag}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
              {t.data_title}
            </h1>
          </header>
          
          <div className="flex flex-col gap-10 sm:gap-12">
            {t.items.map((proj: any, idx: number) => {
              const config = getProjectConfig(proj.title);
              
              return (
                <div 
                  key={idx} 
                  className="group relative p-6 sm:p-10 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-blue-400 dark:hover:border-blue-800"
                >
                  {/* 輪播圖組件 - 手機版適度縮小間距 */}
                  {config.images.length > 0 && (
                    <div className="mb-6 sm:mb-8 max-w-2xl mx-auto">
                      <ImageCarousel images={config.images} />
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                    <div className="space-y-1">
                      <span className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
                        <FaChartBar className="mr-2" /> {proj.category}
                      </span>
                      
                      {config.link ? (
                        <a href={config.link} target="_blank" rel="noopener noreferrer" className="flex items-center group/link">
                          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white group-hover/link:text-blue-600 transition-colors">
                            {proj.title}
                          </h2>
                          <FaExternalLinkAlt className="ml-3 text-sm opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                          {proj.title}
                        </h2>
                      )}
                    </div>

                    <div className="text-right">
                      <span className="flex items-center text-xs font-black text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-xl">
                        <FaBullseye className="mr-2" /> {t.impact_label} {proj.impact}
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                    {proj.tools.map((tool: string) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-600 uppercase tracking-wider"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  )
}