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
// import { FaLaptopCode, FaObjectGroup } from "react-icons/fa"

// export default function WebProjects() {
//   const projects = [
//     {
//       title: "OpenNCCU | 產品 UX 優化",
//       type: "Product Design / UX Research",
//       tech: ["Figma", "React", "User Testing"],
//       desc: "重新設計校園全人系統，透過 400+ 份問卷與易用性測試，將雜亂的資訊結構化。"
//     },
//     {
//       title: "Black Hole Technology",
//       type: "Web Development",
//       tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
//       desc: "使用 Next.js 開發的互動式敘事網站，探索企業 AI 陰謀論的沈浸式體驗。"
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
//       <aside className="w-[280px] flex-shrink-0 h-full"><Menu /></aside>
//       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 custom-scrollbar flex flex-col">
//         <div className="max-w-4xl mx-auto px-12 py-20">
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">Development Portfolio</div>
//             <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">網頁開發與設計</h1>
//           </header>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projects.map((proj, idx) => (
//               <div key={idx} className="p-8 border border-slate-100 rounded-3xl hover:border-purple-200 hover:shadow-xl transition-all group">
//                 <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
//                   <FaLaptopCode size={20} />
//                 </div>
//                 <h2 className="text-xl font-bold text-slate-800 mb-2">{proj.title}</h2>
//                 <p className="text-xs text-purple-600 font-bold mb-4 uppercase tracking-tighter">{proj.type}</p>
//                 <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-3">{proj.desc}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {proj.tech.map(t => (
//                     <span key={t} className="text-[9px] bg-slate-100 text-slate-400 px-2 py-1 rounded font-bold">{t}</span>
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

// import Link from "next/link";
// import Menu from "@/component/Menu";
// import { FaFilePdf, FaArrowRight, FaUser } from "react-icons/fa";

// export default function Home() {
//   // 保持妳的 Google Cloud PDF 連結
//   const resumePdfUrl = "https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view?usp=sharing"; 

//   return (
//     // 加上 transition-colors 讓切換更絲滑
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
      
//       {/* 左側固定 Menu 區塊 */}
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>

//       {/* 右側主要內容區 - 加入 dark 模式對應色 */}
//       <main className="flex-grow h-screen overflow-y-auto custom-scrollbar flex flex-col bg-white dark:bg-slate-900">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full flex-grow">
          
//           {/* Hero Section */}
//           <header className="mb-20">
//             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               Data Analyst Portfolio
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
//               數據洞察，<br />
//               引導產品決策與商業成長
//             </h1>
//             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//               我是 <span className="text-slate-900 dark:text-white font-semibold">Claudia 黃婷筠</span>。目前在 Perfect Corp (玩美移動) 擔任數據管理實習生。
//               我擅長透過 SQL 與 Python 進行用戶行為路徑分析，將碎片化的數據轉化為可執行的產品優化策略。
//             </p>
//           </header>

//           {/* 數據實力展示卡片 */}
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-sm transition-shadow">
//               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">3+</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-200">跨領域實習經驗</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
//                 具備人壽、廣告媒體與美妝科技的多元商業視角，擅長跨部門溝通。
//               </p>
//             </div>
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-sm transition-shadow">
//               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">Advanced</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-200">SQL / Python</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
//                 精通資料清洗、統計分析與行為路徑建模，將數據轉化為成長動能。
//               </p>
//             </div>
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-sm transition-shadow">
//               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">Visual</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-200">視覺化洞察</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
//                 熟練使用 Tableau 與 BI 工具，以直觀圖表呈現數據故事，驅動精準決策。
//               </p>
//             </div>
//           </section>

//           {/* 工作動態摘要 */}
//           <section className="mb-24">
//             <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-8 flex items-center uppercase tracking-widest">
//               <span className="w-12 h-px bg-slate-200 dark:bg-slate-700 mr-4"></span>
//               Current Experience
//             </h2>
//             <div className="bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 shadow-sm">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h3 className="text-2xl font-bold text-slate-800 dark:text-white">玩美移動 Perfect Corp</h3>
//                   <p className="text-blue-600 dark:text-blue-400 font-semibold">Data Management Intern</p>
//                 </div>
//                 <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">2026.03 - Present</span>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start text-slate-600 dark:text-slate-400">
//                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
//                   <p className="text-sm">分析 AI 影像修復與物件移除功能之用戶轉換路徑，協助優化產品 UI/UX 決策。</p>
//                 </li>
//                 <li className="flex items-start text-slate-600 dark:text-slate-400">
//                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
//                   <p className="text-sm">監測全球產品使用趨勢，並撰寫數據亮點報告供 Business Development 團隊參考。</p>
//                 </li>
//               </ul>
//             </div>
//           </section>

//           {/* 底部導引按鈕區 (CTA Section) */}
//           <section className="pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 items-center mb-10">
//             {/* 1. 電子履歷 */}
//             <a 
//               href={resumePdfUrl} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 dark:shadow-none flex items-center group"
//             >
//               <FaFilePdf className="mr-3 text-lg" />
//               檢視電子履歷 (PDF)
//             </a>

//             {/* 2. 數據作品集 - 深色模式下變為淺色按鈕 */}
//             <Link 
//               href="/projects/data" 
//               className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl shadow-slate-200 dark:shadow-none flex items-center group"
//             >
//               探索數據作品集
//               <FaArrowRight className="ml-3 text-xs opacity-70 group-hover:translate-x-1 transition-transform" />
//             </Link>

//             {/* 3. 關於我 */}
//             <Link 
//               href="/about" 
//               className="px-8 py-4 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center"
//             >
//               <FaUser className="mr-3 text-xs opacity-70" />
//               更多關於我
//             </Link>
//           </section>

//         </div>
//       </main>
//     </div>
//   );
// }

// "use client"

// import Menu from "@/component/Menu"
// import { FaLaptopCode, FaCodeBranch } from "react-icons/fa"

// export default function WebProjects() {
//   const projects = [
//     {
//       title: "OpenNCCU | 產品 UX 優化",
//       type: "Product Design / UX Research",
//       tech: ["Figma", "React", "User Testing"],
//       desc: "重新設計校園全人系統，透過 400+ 份問卷與易用性測試，將雜亂的資訊結構化並轉化為高保真原型。"
//     },
//     {
//       title: "Black Hole Technology",
//       type: "Web Development",
//       tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
//       desc: "使用 Next.js 開發的互動式敘事網站，結合 Framer Motion 打造探索企業 AI 陰謀論的沈浸式體驗。"
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
//       {/* 左側固定 Menu */}
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>

//       {/* 右側主要內容區 */}
//       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500 custom-scrollbar flex flex-col">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               Development Portfolio
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
//               網頁開發與設計
//             </h1>
//             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//               結合使用者研究與前端技術，打造美觀且具備良好互動體驗的數位產品。
//             </p>
//           </header>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projects.map((proj, idx) => (
//               <div 
//                 key={idx} 
//                 className="p-8 border border-slate-100 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-800/30 hover:border-purple-200 dark:hover:border-purple-600 transition-all group"
//               >
//                 {/* Icon 容器在深色模式下的切換 */}
//                 <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/40 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-all">
//                   <FaLaptopCode size={20} />
//                 </div>

//                 <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
//                   {proj.title}
//                 </h2>
                
//                 <p className="text-xs text-purple-600 dark:text-purple-400 font-bold mb-4 uppercase tracking-tighter flex items-center">
//                   <FaCodeBranch className="mr-2" /> {proj.type}
//                 </p>
                
//                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">
//                   {proj.desc}
//                 </p>

//                 <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-slate-700/50">
//                   {proj.tech.map(t => (
//                     <span 
//                       key={t} 
//                       className="text-[9px] bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-300 px-2.5 py-1 rounded font-bold uppercase tracking-wider"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* 底部裝飾性文字 */}
//           <div className="mt-20 border-t border-slate-50 dark:border-slate-800 pt-8">
//             <p className="text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em] text-center font-bold">
//               Design with purpose • Code with passion
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

"use client"

import Menu from "@/component/Menu"
import { useLang } from "@/component/LanguageProvider"
import { translations } from "@/component/languageData"
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa"

export default function WebProjects() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations].web;

  return (
    <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500 font-sans">
      {/* 左側固定 Menu */}
      <aside className="w-[280px] flex-shrink-0 h-full">
        <Menu />
      </aside>

      {/* 右側主要內容區 */}
      <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500 custom-scrollbar flex flex-col">
        <div className="max-w-4xl mx-auto px-12 py-20 w-full flex-grow">
          
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
              {t.tag}
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {t.intro}
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.items.map((proj: any, idx: number) => (
              <div 
                key={idx} 
                className="p-8 border border-slate-100 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-800/30 hover:border-purple-200 dark:hover:border-purple-600 transition-all group"
              >
                {/* Icon 容器 */}
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/40 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-all">
                  <FaLaptopCode size={20} />
                </div>

                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {proj.title}
                </h2>
                
                <p className="text-xs text-purple-600 dark:text-purple-400 font-bold mb-4 uppercase tracking-tighter flex items-center">
                  <FaCodeBranch className="mr-2" /> {proj.type}
                </p>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-slate-700/50">
                  {proj.tech.map((t_tech: string) => (
                    <span 
                      key={t_tech} 
                      className="text-[9px] bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-300 px-2.5 py-1 rounded font-bold uppercase tracking-wider"
                    >
                      {t_tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* 底部裝飾性文字 */}
          <div className="mt-20 border-t border-slate-50 dark:border-slate-800 pt-8">
            <p className="text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em] text-center font-bold">
              Design with purpose • Code with passion
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}