// // // "use client"

// // // import Image from "next/image"
// // // import Link from "next/link";
// // // import Menu from "../component/Menu"

// // // export default function Home() {
  
// // //   return (
// // //     <>
// // //       <div className="flex h-full justify-center">
// // //         <div className="sm:block hidden ">
// // //           {/* 電腦版 */}
// // //           電腦版本 Menu
// // //         </div>
// // //         <div className="sm:hidden">
// // //           {/* 手機版 */}
// // //           <Menu />
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // "use client"

// // import Image from "next/image"
// // import Link from "next/link";
// // import Menu from "../component/Menu"

// // export default function Home() {
  
// //   return (
// //     <div className="flex h-screen overflow-hidden">
// //       {/* 側邊欄：在電腦版固定顯示，在手機版也可以顯示（或透過隱藏邏輯控制） */}
// //       <aside className="flex-shrink-0">
// //         <Menu />
// //       </aside>

// //       {/* 主要內容區 */}
// //       <main className="flex-grow overflow-y-auto bg-slate-50 p-8">
// //         <div className="max-w-4xl mx-auto">
// //           {/* 這裡放妳的首頁內容 */}
// //           <h1 className="text-3xl font-bold text-slate-800 mb-4">歡迎來到我的個人履歷</h1>
// //           <p className="text-slate-600">
// //             我是黃婷筠，目前就讀於政大資管系五年級...
// //           </p>
          
// //           {/* 測試內容：增加高度看 Menu 是否會固定不動 */}
// //           <div className="h-[2000px] mt-10 bg-white shadow-sm rounded-xl p-6 border border-slate-200">
// //             這裡可以放妳的專案介紹或經歷詳情。
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // "use client"

// // import Image from "next/image"
// // import Link from "next/link";
// // import Menu from "../component/Menu"

// // export default function Home() {
// //   return (
// //     <div className="flex h-screen overflow-hidden bg-white">
// //       {/* 側邊欄固定在左側 */}
// //       <aside className="w-[280px] flex-shrink-0">
// //         <Menu />
// //       </aside>

// //       {/* 右側主要內容區 */}
// //       <main className="flex-grow min-h-screen bg-white px-12 py-16 ml-0">
// //         <div className="max-w-4xl mx-auto">
          
// //           {/* Hero Section: 核心價值主張 */}
// //           <header className="mb-16">
// //             <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
// //               Data Analyst Portfolio
// //             </div>
// //             <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
// //               數據洞察，<br />
// //               引導產品決策與商業成長
// //             </h1>
// //             <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
// //               我是 <span className="text-slate-900 font-semibold">Claudia 黃婷筠</span>。目前在 Perfect Corp (玩美移動) 擔任數據管理實習生。
// //               我擅長從混亂的數據中提煉價值，透過 SQL 與 Python 進行用戶行為分析，將複雜的數據轉化為可執行的產品優化建議。
// //             </p>
// //           </header>

// //           {/* 數據卡片區: 展現量化能力 (UX: 讓面試官一眼看到重點) */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
// //             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-hover hover:shadow-md">
// //               <div className="text-3xl font-black text-blue-600 mb-1">3+</div>
// //               <div className="text-sm font-bold text-slate-800">跨領域實習經驗</div>
// //               <div className="text-xs text-slate-500 mt-2">從人壽、廣告到美妝科技，具備多元商業視角。</div>
// //             </div>
// //             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-hover hover:shadow-md">
// //               <div className="text-3xl font-black text-blue-600 mb-1">SQL / Python</div>
// //               <div className="text-sm font-bold text-slate-800">核心分析工具</div>
// //               <div className="text-xs text-slate-500 mt-2">熟練處理大數據清洗、用戶分群與行為路徑分析。</div>
// //             </div>
// //             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-hover hover:shadow-md">
// //               <div className="text-3xl font-black text-blue-600 mb-1">Data Viz</div>
// //               <div className="text-sm font-bold text-slate-800">視覺化洞察</div>
// //               <div className="text-xs text-slate-500 mt-2">將數據轉化為 Tableau/BI 圖表，驅動跨部門決策。</div>
// //             </div>
// //           </div>

// //           {/* 實習重點摘要 (UX: 建立信任感) */}
// //           <section className="mb-16">
// //             <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
// //               <span className="w-8 h-px bg-slate-300 mr-3"></span>
// //               目前專注於
// //             </h2>
// //             <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
// //               <h3 className="text-lg font-bold text-slate-800 mb-4">玩美移動 Perfect Corp | Data Management Intern</h3>
// //               <ul className="space-y-4">
// //                 <li className="flex items-start">
// //                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
// //                   <p className="text-slate-600 text-sm">監測 AI 驅動功能（如照片修復、移除工具）之使用表現與轉換率。</p>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
// //                   <p className="text-slate-600 text-sm">協同 Business Development 團隊優化產品功能，提供數據驅動的優化建議。</p>
// //                 </li>
// //               </ul>
// //             </div>
// //           </section>

// //           {/* 行動呼籲 (UX: 導引點擊) */}
// //           <div className="flex flex-wrap gap-4">
// //             <Link href="/programming-project" className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
// //               探索數據作品集
// //             </Link>
// //             <Link href="/about" className="px-8 py-3.5 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all">
// //               更多關於我
// //             </Link>
// //           </div>

// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // "use client"

// // import Link from "next/link";
// // import Menu from "@/component/Menu";
// // import { FaFilePdf, FaArrowRight, FaUser } from "react-icons/fa";

// // export default function Home() {
// //   // 請在此處替換為妳真正的 Google Cloud PDF 連結
// //   const resumePdfUrl = "https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view"; 

// //   return (
// //     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
      
// //       {/* 左側固定 Menu 區塊 */}
// //       <aside className="w-[280px] flex-shrink-0 h-full">
// //         <Menu />
// //       </aside>

// //       {/* 右側主要內容區 */}
// //       <main className="flex-grow overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500">
// //         <div className="max-w-4xl mx-auto px-12 py-20 w-full flex-grow">
          
// //           {/* Hero Section */}
// //           <header className="mb-20">
// //             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
// //               Data Analyst Portfolio
// //             </div>
// //             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
// //               數據洞察，<br />
// //               引導產品決策與商業成長
// //             </h1>
// //             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
// //               我是 <span className="text-slate-900 dark:text-white font-semibold">Claudia 黃婷筠</span>。目前在 Perfect Corp (玩美移動) 擔任數據管理實習生。
// //               我擅長透過 SQL 與 Python 進行用戶行為路徑分析，將碎片化的數據轉化為可執行的產品優化策略。
// //             </p>
// //           </header>

// //           {/* 數據實力展示卡片 */}
// //           <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
// //             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-sm transition-shadow">
// //               <div className="text-3xl font-black text-blue-600 mb-2">3+</div>
// //               <div className="text-sm font-bold text-slate-800">跨領域實習經驗</div>
// //               <p className="text-xs text-slate-500 mt-2 leading-normal">
// //                 具備人壽、廣告媒體與美妝科技的多元商業視角，擅長跨部門溝通。
// //               </p>
// //             </div>
// //             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-sm transition-shadow">
// //               <div className="text-3xl font-black text-blue-600 mb-2">Advanced</div>
// //               <div className="text-sm font-bold text-slate-800">SQL / Python</div>
// //               <p className="text-xs text-slate-500 mt-2 leading-normal">
// //                 精通資料清洗、統計分析與行為路徑建模，將數據轉化為成長動能。
// //               </p>
// //             </div>
// //             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-sm transition-shadow">
// //               <div className="text-3xl font-black text-blue-600 mb-2">Visual</div>
// //               <div className="text-sm font-bold text-slate-800">視覺化洞察</div>
// //               <p className="text-xs text-slate-500 mt-2 leading-normal">
// //                 熟練使用 Tableau 與 BI 工具，以直觀圖表呈現數據故事，驅動精準決策。
// //               </p>
// //             </div>
// //           </section>

// //           {/* 工作動態摘要 */}
// //           <section className="mb-24">
// //             <h2 className="text-sm font-bold text-slate-400 mb-8 flex items-center uppercase tracking-widest">
// //               <span className="w-12 h-px bg-slate-200 mr-4"></span>
// //               Current Experience
// //             </h2>
// //             <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm">
// //               <div className="flex justify-between items-start mb-6">
// //                 <div>
// //                   <h3 className="text-2xl font-bold text-slate-800">玩美移動 Perfect Corp</h3>
// //                   <p className="text-blue-600 font-semibold">Data Management Intern</p>
// //                 </div>
// //                 <span className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">2026.03 - Present</span>
// //               </div>
// //               <ul className="space-y-4">
// //                 <li className="flex items-start text-slate-600">
// //                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
// //                   <p className="text-sm">分析 AI 影像修復與物件移除功能之用戶轉換路徑，協助優化產品 UI/UX 決策。</p>
// //                 </li>
// //                 <li className="flex items-start text-slate-600">
// //                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
// //                   <p className="text-sm">監測全球產品使用趨勢，並撰寫數據亮點報告供 Business Development 團隊參考。</p>
// //                 </li>
// //               </ul>
// //             </div>
// //           </section>

// //           {/* 底部導引按鈕區 (CTA Section) */}
// //           <section className="pt-12 border-t border-slate-100 flex flex-wrap gap-4 items-center mb-10">
// //             {/* 1. 電子履歷 (重點藍色) */}
// //             <a 
// //               href={"https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view?usp=sharing"} 
// //               target="_blank" 
// //               rel="noopener noreferrer"
// //               className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center group"
// //             >
// //               <FaFilePdf className="mr-3 text-lg" />
// //               檢視電子履歷 (PDF)
// //             </a>

// //             {/* 2. 數據作品集 (黑色) */}
// //             <Link 
// //               href="/programming-project" 
// //               className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center"
// //             >
// //               探索數據作品集
// //               <FaArrowRight className="ml-3 text-xs opacity-70 group-hover:translate-x-1 transition-transform" />
// //             </Link>

// //             {/* 3. 關於我 (邊框) */}
// //             <Link 
// //               href="/about" 
// //               className="px-8 py-4 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center"
// //             >
// //               <FaUser className="mr-3 text-xs opacity-70" />
// //               更多關於我
// //             </Link>
// //           </section>

// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // "use client"

// // import Link from "next/link";
// // import Menu from "@/component/Menu";
// // import { FaFilePdf, FaArrowRight, FaUser } from "react-icons/fa";

// // export default function Home() {
// //   const resumePdfUrl = "https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view"; 

// //   return (
// //     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
      
// //       {/* 左側固定 Menu 區塊 */}
// //       <aside className="w-[280px] flex-shrink-0 h-full">
// //         <Menu />
// //       </aside>

// //       {/* 右側主要內容區 */}
// //       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500 custom-scrollbar">
// //         <div className="max-w-4xl mx-auto px-12 py-20 w-full flex-grow">
          
// //           {/* Hero Section */}
// //           <header className="mb-20">
// //             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
// //               Data Analyst Portfolio
// //             </div>
// //             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
// //               數據洞察，<br />
// //               引導產品決策與商業成長
// //             </h1>
// //             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
// //               我是 <span className="text-slate-900 dark:text-white font-semibold">Claudia 黃婷筠</span>。目前在 Perfect Corp (玩美移動) 擔任數據管理實習生。
// //               我擅長透過 SQL 與 Python 進行用戶行為路徑分析，將碎片化的數據轉化為可執行的產品優化策略。
// //             </p>
// //           </header>

// //           {/* 數據實力展示卡片 - 修正深色模式背景與文字 */}
// //           <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
// //             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all">
// //               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">3+</div>
// //               <div className="text-sm font-bold text-slate-800 dark:text-slate-100">跨領域實習經驗</div>
// //               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
// //                 具備人壽、廣告媒體與美妝科技的多元商業視角，擅長跨部門溝通。
// //               </p>
// //             </div>
// //             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all">
// //               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">Advanced</div>
// //               <div className="text-sm font-bold text-slate-800 dark:text-slate-100">SQL / Python</div>
// //               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
// //                 精通資料清洗、統計分析與行為路徑建模，將數據轉化為成長動能。
// //               </p>
// //             </div>
// //             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all">
// //               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">Visual</div>
// //               <div className="text-sm font-bold text-slate-800 dark:text-slate-100">視覺化洞察</div>
// //               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
// //                 熟練使用 Tableau 與 BI 工具，以直觀圖表呈現數據故事，驅動精準決策。
// //               </p>
// //             </div>
// //           </section>

// //           {/* 工作動態摘要 - 修正深色模式卡片與條列文字 */}
// //           <section className="mb-24">
// //             <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-8 flex items-center uppercase tracking-widest">
// //               <span className="w-12 h-px bg-slate-200 dark:bg-slate-800 mr-4"></span>
// //               Current Experience
// //             </h2>
// //             <div className="bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-3xl p-10">
// //               <div className="flex justify-between items-start mb-6">
// //                 <div>
// //                   <h3 className="text-2xl font-bold text-slate-800 dark:text-white">玩美移動 Perfect Corp</h3>
// //                   <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Data Management Intern</p>
// //                 </div>
// //                 <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/50 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800">2026.03 - Present</span>
// //               </div>
// //               <ul className="space-y-4">
// //                 <li className="flex items-start text-slate-600 dark:text-slate-400">
// //                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
// //                   <p className="text-sm leading-relaxed">分析 AI 影像修復與物件移除功能之用戶轉換路徑，協助優化產品 UI/UX 決策。</p>
// //                 </li>
// //                 <li className="flex items-start text-slate-600 dark:text-slate-400">
// //                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
// //                   <p className="text-sm leading-relaxed">監測全球產品使用趨勢，並撰寫數據亮點報告供 Business Development 團隊參考。</p>
// //                 </li>
// //               </ul>
// //             </div>
// //           </section>

// //           {/* 底部導引按鈕區 - 移除 shadow-xl 並修正邊框與背景 */}
// //           <section className="pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 items-center mb-10">
// //             {/* 1. 電子履歷 */}
// //             <a 
// //               href={"https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view?usp=sharing"} 
// //               target="_blank" 
// //               rel="noopener noreferrer"
// //               className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center group"
// //             >
// //               <FaFilePdf className="mr-3 text-lg" />
// //               檢視電子履歷 (PDF)
// //             </a>

// //             {/* 2. 數據作品集 - 深色模式下反轉為白底黑字 */}
// //             <Link 
// //               href="/projects/data" 
// //               className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center group"
// //             >
// //               探索數據作品集
// //               <FaArrowRight className="ml-3 text-xs opacity-70 group-hover:translate-x-1 transition-transform" />
// //             </Link>

// //             {/* 3. 關於我 */}
// //             <Link 
// //               href="/about" 
// //               className="px-8 py-4 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center"
// //             >
// //               <FaUser className="mr-3 text-xs opacity-70" />
// //               更多關於我
// //             </Link>
// //           </section>

// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// "use client"

// import Link from "next/link";
// import Menu from "@/component/Menu";
// import { FaFilePdf, FaArrowRight, FaUser } from "react-icons/fa";
// import { useLang } from "@/component/LanguageProvider";
// import { translations } from "@/component/languageData";

// export default function Home() {
//   const { lang } = useLang();
//   const t = translations[lang as keyof typeof translations].home;
//   const resumePdfUrl = "https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view"; 

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500 font-sans">
      
//       {/* 左側 Menu：手機版寬度改為 w-full，電腦版維持 w-[280px] */}
//       <aside className="w-full sm:w-[280px] flex-shrink-0 h-full border-r border-slate-200 dark:border-slate-800">
//         <Menu />
//       </aside>

//       {/* 右側主要內容區 */}
//       <main className="hidden sm:flex flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 custom-scrollbar flex-col">
//           <div className="max-w-4xl mx-auto px-12 py-20 w-full flex-grow">
          
//           {/* Hero Section */}
//           <header className="mb-20">
//             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               {t.tag}
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
//               {t.title_part1}<br />
//               {t.title_part2}
//             </h1>
//             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//               {t.intro_p1}<span className="text-slate-900 dark:text-white font-semibold">{t.intro_name}</span>{t.intro_p2}
//             </p>
//           </header>

//           {/* 數據實力展示卡片 */}
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all">
//               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">{t.card1_val}</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{t.card1_title}</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
//                 {t.card1_desc}
//               </p>
//             </div>
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all">
//               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">{t.card2_val}</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{t.card2_title}</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
//                 {t.card2_desc}
//               </p>
//             </div>
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all">
//               <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-2">{t.card3_val}</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{t.card3_title}</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-normal">
//                 {t.card3_desc}
//               </p>
//             </div>
//           </section>

//           {/* 工作動態摘要 - 增加背景圖 Hover 與打字機效果 */}
//           <section className="mb-24">
//             <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-8 flex items-center uppercase tracking-widest">
//               <span className="w-12 h-px bg-slate-200 dark:bg-slate-800 mr-4"></span>
//               {t.exp_title}
//             </h2>
            
//             {/* 外層加上 group 類別 */}
//             <div className="group relative bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 overflow-hidden transition-all duration-500">
              
//               {/* 背景圖片層：預設透明度 0，Hover 時變 0.3 */}
//               <div 
//                 className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-cover bg-center pointer-events-none"
//                 style={{ backgroundImage: "url('/perfectcorp.jpg')" }}
//               ></div>

//               {/* 內容層：確保在背景圖之上 */}
//               <div className="relative z-10">
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{t.exp_company}</h3>
//                     <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{t.exp_role}</p>
//                   </div>
//                   <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/50 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800">
//                     2026.03 - Present
//                   </span>
//                 </div>

//                 <ul className="space-y-4">
//                   <li className="flex items-start text-slate-600 dark:text-slate-400">
//                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
//                     {/* 動畫觸發層 */}
//                         <div className="overflow-hidden"> 
//                           <p className="text-sm leading-relaxed whitespace-nowrap overflow-hidden w-0 group-hover:w-full group-hover:animate-typewriter border-r-2 border-transparent group-hover:border-blue-500">
//                             {t.exp_point1}
//                           </p>
//                         </div>
//                   </li>
//                  <li className="flex items-start text-slate-600 dark:text-slate-400">
//                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
//                     <div className="overflow-hidden">
//                       <p 
//                         className="text-sm leading-relaxed whitespace-nowrap overflow-hidden w-0 group-hover:w-full group-hover:animate-typewriter border-r-2 border-transparent group-hover:border-blue-500"
//                         style={{ animationDelay: '1.5s' }} // 讓第二行晚點出來
//                       >
//                         {t.exp_point2}
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* 底部導引按鈕區 */}
//           <section className="pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 items-center mb-10">
//             <a 
//               href={"https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view?usp=sharing"} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center group"
//             >
//               <FaFilePdf className="mr-3 text-lg" />
//               {t.btn_pdf}
//             </a>

//             <Link 
//               href="/projects/data" 
//               className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center group"
//             >
//               {t.btn_projects}
//               <FaArrowRight className="ml-3 text-xs opacity-70 group-hover:translate-x-1 transition-transform" />
//             </Link>

//             <Link 
//               href="/about" 
//               className="px-8 py-4 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center"
//             >
//               <FaUser className="mr-3 text-xs opacity-70" />
//               {t.btn_about}
//             </Link>
//           </section>

//         </div>
//       </main>
//     </div>
//   );
// }


// "use client"

// import Link from "next/link";
// import Menu from "@/component/Menu";
// import { FaFilePdf, FaArrowRight, FaUser } from "react-icons/fa";
// import { useLang } from "@/component/LanguageProvider";
// import { translations } from "@/component/languageData";

// export default function Home() {
//   const { lang } = useLang();
//   const t = translations[lang as keyof typeof translations].home;
  
//   const resumePdfUrl = "https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view?usp=sharing"; 

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500 font-sans overflow-hidden">
      
//       {/* aside：手機版入口
//         - w-full: 確保在手機上橫向撐滿，沒有右側空隙
//         - sm:w-[280px]: 電腦版回歸側邊欄寬度
//       */}
//       <aside className="w-full flex-shrink-0 h-full border-r border-slate-100 dark:border-slate-800">
//         <Menu />
//       </aside>

//       {/* main：內容展示區
//         - hidden: 在手機版徹底移除，不佔用任何寬度，解決右側預覽問題
//         - sm:flex: 電腦版才顯示
//       */}
//       <main className="hidden sm:flex flex-col flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 custom-scrollbar transition-all duration-500">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full flex-grow">
          
//           {/* Hero Section */}
//           <header className="mb-20">
//             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-8 tracking-widest uppercase">
//               {t.tag}
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
//               {t.title_part1}<br />
//               <span className="text-blue-600 dark:text-blue-500">{t.title_part2}</span>
//             </h1>
//             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//               {t.intro_p1}<span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500/30 decoration-4 underline-offset-4">{t.intro_name}</span>{t.intro_p2}
//             </p>
//           </header>

//           {/* 數據卡片區 */}
//           <section className="grid grid-cols-3 gap-6 mb-20">
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 transition-all">
//               <div className="text-3xl font-black text-blue-600 mb-2">{t.card1_val}</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">{t.card1_title}</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.card1_desc}</p>
//             </div>
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 transition-all">
//               <div className="text-3xl font-black text-blue-600 mb-2">{t.card2_val}</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">{t.card2_title}</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.card2_desc}</p>
//             </div>
//             <div className="p-8 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 transition-all">
//               <div className="text-3xl font-black text-blue-600 mb-2">{t.card3_val}</div>
//               <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">{t.card3_title}</div>
//               <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.card3_desc}</p>
//             </div>
//           </section>

//           {/* 工作經歷摘要 - 含 10% 背景圖 Hover 與 打字機效果 */}
//           <section className="mb-24">
//             <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-8 flex items-center uppercase tracking-widest">
//               <span className="w-12 h-px bg-slate-200 dark:bg-slate-800 mr-4"></span>
//               {t.exp_title}
//             </h2>
//             <div className="group relative bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 overflow-hidden transition-all duration-500">
//               <div 
//                 className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-cover bg-center pointer-events-none"
//                 style={{ backgroundImage: "url('/perfectcorp.jpg')" }}
//               ></div>
//               <div className="relative z-10">
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{t.exp_company}</h3>
//                     <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{t.exp_role}</p>
//                   </div>
//                   <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/50 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800">
//                     2026.03 - Present
//                   </span>
//                 </div>
//                 <ul className="space-y-4">
//                   <li className="flex items-start text-slate-600 dark:text-slate-400">
//                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
//                     <div className="overflow-hidden"> 
//                       <p className="text-sm leading-relaxed whitespace-nowrap overflow-hidden w-0 group-hover:w-full group-hover:animate-typewriter border-r-2 border-transparent group-hover:border-blue-500 transition-all duration-500">
//                         {t.exp_point1}
//                       </p>
//                     </div>
//                   </li>
//                   <li className="flex items-start text-slate-600 dark:text-slate-400">
//                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
//                     <div className="overflow-hidden">
//                       <p 
//                         className="text-sm leading-relaxed whitespace-nowrap overflow-hidden w-0 group-hover:w-full group-hover:animate-typewriter border-r-2 border-transparent group-hover:border-blue-500 transition-all duration-500"
//                         style={{ animationDelay: '1.5s' }}
//                       >
//                         {t.exp_point2}
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* 底部按鈕區 */}
//           <div className="flex flex-wrap gap-4 pt-12 border-t border-slate-100 dark:border-slate-800">
//             <a 
//               href={resumePdfUrl} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10 active:scale-95 flex items-center"
//             >
//               <FaFilePdf className="mr-3 text-lg" /> {t.btn_pdf}
//             </a>
//             <Link 
//               href="/projects/data" 
//               className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all active:scale-95 flex items-center group"
//             >
//               {t.btn_projects} <FaArrowRight className="ml-3 text-xs group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


"use client"

import Link from "next/link";
import Menu from "@/component/Menu";
import { FaFilePdf, FaArrowRight, FaUser } from "react-icons/fa";
import { useLang } from "@/component/LanguageProvider";
import { translations } from "@/component/languageData";

export default function Home() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations].home;
  
  // PDF 連結
  const resumePdfUrl = "https://drive.google.com/file/d/1Q5DN6_ey-OBN3qimwkCx7J_2FHNy-ZMb/view?usp=sharing"; 

  return (
    <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500 font-sans overflow-hidden">
      
      {/* 手機版 (預設): w-full，讓選單成為唯一的滿版入口。
          電腦版 (sm 以上): w-[280px]，恢復側邊欄樣式。
          flex-shrink-0 確保它不會被壓縮。
      */}
      <aside className="w-full sm:w-[280px] flex-shrink-0 h-full border-r border-slate-100 dark:border-slate-800">
        <Menu />
      </aside>

      {/* 手機版 (預設): hidden，徹底從渲染樹中移除，不留白邊，確保 iPhone 開起來只有選單。
          電腦版 (sm 以上): flex，正常顯示內容。
      */}
      <main className="hidden sm:flex flex-col flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-900 custom-scrollbar transition-all duration-500">
        <div className="max-w-4xl mx-auto px-12 py-20 w-full flex-grow">
          
          {/* Hero Section */}
          <header className="mb-20">
            <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-8 tracking-widest uppercase">
              {t.tag}
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              {t.title_part1}<br />
              <span className="text-blue-600 dark:text-blue-500">{t.title_part2}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {t.intro_p1}
              <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500/30 decoration-4 underline-offset-4">
                {t.intro_name}
              </span>
              {t.intro_p2}
            </p>
          </header>

          {/* 數據卡片區 */}
          <section className="grid grid-cols-3 gap-6 mb-20">
            <div className="p-8 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 transition-all">
              <div className="text-3xl font-black text-blue-600 mb-2">{t.card1_val}</div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">{t.card1_title}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.card1_desc}</p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 transition-all">
              <div className="text-3xl font-black text-blue-600 mb-2">{t.card2_val}</div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">{t.card2_title}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.card2_desc}</p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 transition-all">
              <div className="text-3xl font-black text-blue-600 mb-2">{t.card3_val}</div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">{t.card3_title}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.card3_desc}</p>
            </div>
          </section>

          {/* 工作經歷摘要 - 含有 10% 背景圖 Hover 與 打字機效果 */}
          <section className="mb-24">
            <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-8 flex items-center uppercase tracking-widest">
              <span className="w-12 h-px bg-slate-200 dark:bg-slate-800 mr-4"></span>
              {t.exp_title}
            </h2>
            <div className="group relative bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 overflow-hidden transition-all duration-500">
              
              {/* 背景圖片層：10% 透明度 */}
              <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: "url('/perfectcorp.jpg')" }}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{t.exp_company}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{t.exp_role}</p>
                  </div>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/50 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800">
                    2026.03 - Present
                  </span>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div className="overflow-hidden"> 
                      <p className="text-sm leading-relaxed whitespace-nowrap overflow-hidden w-0 group-hover:w-full group-hover:animate-typewriter border-r-2 border-transparent group-hover:border-blue-500 transition-all duration-500">
                        {t.exp_point1}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div className="overflow-hidden">
                      <p 
                        className="text-sm leading-relaxed whitespace-nowrap overflow-hidden w-0 group-hover:w-full group-hover:animate-typewriter border-r-2 border-transparent group-hover:border-blue-500 transition-all duration-500"
                        style={{ animationDelay: '1.5s' }}
                      >
                        {t.exp_point2}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 底部按鈕區 */}
          <div className="flex flex-wrap gap-4 pt-12 border-t border-slate-100 dark:border-slate-800">
            <a 
              href={resumePdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10 active:scale-95 flex items-center"
            >
              <FaFilePdf className="mr-3 text-lg" /> {t.btn_pdf}
            </a>
            <Link 
              href="/projects/data" 
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all active:scale-95 flex items-center group"
            >
              {t.btn_projects} <FaArrowRight className="ml-3 text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}