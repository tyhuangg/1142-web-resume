// // "use client"

// // import Image from "next/image"
// // import Link from "next/link";
// // import Menu from "../component/Menu"

// // export default function Home() {
  
// //   return (
// //     <>
// //       <div className="flex h-full justify-center">
// //         <div className="sm:block hidden ">
// //           {/* 電腦版 */}
// //           電腦版本 Menu
// //         </div>
// //         <div className="sm:hidden">
// //           {/* 手機版 */}
// //           <Menu />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// "use client"

// import Image from "next/image"
// import Link from "next/link";
// import Menu from "../component/Menu"

// export default function Home() {
  
//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* 側邊欄：在電腦版固定顯示，在手機版也可以顯示（或透過隱藏邏輯控制） */}
//       <aside className="flex-shrink-0">
//         <Menu />
//       </aside>

//       {/* 主要內容區 */}
//       <main className="flex-grow overflow-y-auto bg-slate-50 p-8">
//         <div className="max-w-4xl mx-auto">
//           {/* 這裡放妳的首頁內容 */}
//           <h1 className="text-3xl font-bold text-slate-800 mb-4">歡迎來到我的個人履歷</h1>
//           <p className="text-slate-600">
//             我是黃婷筠，目前就讀於政大資管系五年級...
//           </p>
          
//           {/* 測試內容：增加高度看 Menu 是否會固定不動 */}
//           <div className="h-[2000px] mt-10 bg-white shadow-sm rounded-xl p-6 border border-slate-200">
//             這裡可以放妳的專案介紹或經歷詳情。
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client"

// import Image from "next/image"
// import Link from "next/link";
// import Menu from "../component/Menu"

// export default function Home() {
//   return (
//     <div className="flex h-screen overflow-hidden bg-white">
//       {/* 側邊欄固定在左側 */}
//       <aside className="w-[280px] flex-shrink-0">
//         <Menu />
//       </aside>

//       {/* 右側主要內容區 */}
//       <main className="flex-grow min-h-screen bg-white px-12 py-16 ml-0">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Hero Section: 核心價值主張 */}
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 tracking-widest uppercase">
//               Data Analyst Portfolio
//             </div>
//             <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
//               數據洞察，<br />
//               引導產品決策與商業成長
//             </h1>
//             <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
//               我是 <span className="text-slate-900 font-semibold">Claudia 黃婷筠</span>。目前在 Perfect Corp (玩美移動) 擔任數據管理實習生。
//               我擅長從混亂的數據中提煉價值，透過 SQL 與 Python 進行用戶行為分析，將複雜的數據轉化為可執行的產品優化建議。
//             </p>
//           </header>

//           {/* 數據卡片區: 展現量化能力 (UX: 讓面試官一眼看到重點) */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-hover hover:shadow-md">
//               <div className="text-3xl font-black text-blue-600 mb-1">3+</div>
//               <div className="text-sm font-bold text-slate-800">跨領域實習經驗</div>
//               <div className="text-xs text-slate-500 mt-2">從人壽、廣告到美妝科技，具備多元商業視角。</div>
//             </div>
//             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-hover hover:shadow-md">
//               <div className="text-3xl font-black text-blue-600 mb-1">SQL / Python</div>
//               <div className="text-sm font-bold text-slate-800">核心分析工具</div>
//               <div className="text-xs text-slate-500 mt-2">熟練處理大數據清洗、用戶分群與行為路徑分析。</div>
//             </div>
//             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-hover hover:shadow-md">
//               <div className="text-3xl font-black text-blue-600 mb-1">Data Viz</div>
//               <div className="text-sm font-bold text-slate-800">視覺化洞察</div>
//               <div className="text-xs text-slate-500 mt-2">將數據轉化為 Tableau/BI 圖表，驅動跨部門決策。</div>
//             </div>
//           </div>

//           {/* 實習重點摘要 (UX: 建立信任感) */}
//           <section className="mb-16">
//             <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
//               <span className="w-8 h-px bg-slate-300 mr-3"></span>
//               目前專注於
//             </h2>
//             <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
//               <h3 className="text-lg font-bold text-slate-800 mb-4">玩美移動 Perfect Corp | Data Management Intern</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                   <p className="text-slate-600 text-sm">監測 AI 驅動功能（如照片修復、移除工具）之使用表現與轉換率。</p>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                   <p className="text-slate-600 text-sm">協同 Business Development 團隊優化產品功能，提供數據驅動的優化建議。</p>
//                 </li>
//               </ul>
//             </div>
//           </section>

//           {/* 行動呼籲 (UX: 導引點擊) */}
//           <div className="flex flex-wrap gap-4">
//             <Link href="/programming-project" className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
//               探索數據作品集
//             </Link>
//             <Link href="/about" className="px-8 py-3.5 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all">
//               更多關於我
//             </Link>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }

"use client"

import Link from "next/link";
import Menu from "../component/Menu";
import { FaFilePdf, FaArrowRight, FaUser } from "react-icons/fa";

export default function Home() {
  // 請在此處替換為妳真正的 Google Cloud PDF 連結
  const resumePdfUrl = "https://your-google-cloud-link-to-resume.pdf"; 

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      
      {/* 左側固定 Menu 區塊 */}
      <aside className="w-[280px] flex-shrink-0 h-full">
        <Menu />
      </aside>

      {/* 右側主要內容區 */}
      <main className="flex-grow overflow-y-auto bg-white custom-scrollbar flex flex-col">
        <div className="max-w-4xl mx-auto px-12 py-20 w-full flex-grow">
          
          {/* Hero Section */}
          <header className="mb-20">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
              Data Analyst Portfolio
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              數據洞察，<br />
              引導產品決策與商業成長
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              我是 <span className="text-slate-900 font-semibold">Claudia 黃婷筠</span>。目前在 Perfect Corp (玩美移動) 擔任數據管理實習生。
              我擅長透過 SQL 與 Python 進行用戶行為路徑分析，將碎片化的數據轉化為可執行的產品優化策略。
            </p>
          </header>

          {/* 數據實力展示卡片 */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-sm transition-shadow">
              <div className="text-3xl font-black text-blue-600 mb-2">3+</div>
              <div className="text-sm font-bold text-slate-800">跨領域實習經驗</div>
              <p className="text-xs text-slate-500 mt-2 leading-normal">
                具備人壽、廣告媒體與美妝科技的多元商業視角，擅長跨部門溝通。
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-sm transition-shadow">
              <div className="text-3xl font-black text-blue-600 mb-2">Advanced</div>
              <div className="text-sm font-bold text-slate-800">SQL / Python</div>
              <p className="text-xs text-slate-500 mt-2 leading-normal">
                精通資料清洗、統計分析與行為路徑建模，將數據轉化為成長動能。
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-sm transition-shadow">
              <div className="text-3xl font-black text-blue-600 mb-2">Visual</div>
              <div className="text-sm font-bold text-slate-800">視覺化洞察</div>
              <p className="text-xs text-slate-500 mt-2 leading-normal">
                熟練使用 Tableau 與 BI 工具，以直觀圖表呈現數據故事，驅動精準決策。
              </p>
            </div>
          </section>

          {/* 工作動態摘要 */}
          <section className="mb-24">
            <h2 className="text-sm font-bold text-slate-400 mb-8 flex items-center uppercase tracking-widest">
              <span className="w-12 h-px bg-slate-200 mr-4"></span>
              Current Experience
            </h2>
            <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">玩美移動 Perfect Corp</h3>
                  <p className="text-blue-600 font-semibold">Data Management Intern</p>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">2026.03 - Present</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-sm">分析 AI 影像修復與物件移除功能之用戶轉換路徑，協助優化產品 UI/UX 決策。</p>
                </li>
                <li className="flex items-start text-slate-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-sm">監測全球產品使用趨勢，並撰寫數據亮點報告供 Business Development 團隊參考。</p>
                </li>
              </ul>
            </div>
          </section>

          {/* 底部導引按鈕區 (CTA Section) */}
          <section className="pt-12 border-t border-slate-100 flex flex-wrap gap-4 items-center mb-10">
            {/* 1. 電子履歷 (重點藍色) */}
            <a 
              href={resumePdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center group"
            >
              <FaFilePdf className="mr-3 text-lg" />
              檢視電子履歷 (PDF)
            </a>

            {/* 2. 數據作品集 (黑色) */}
            <Link 
              href="/programming-project" 
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center"
            >
              探索數據作品集
              <FaArrowRight className="ml-3 text-xs opacity-70 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* 3. 關於我 (邊框) */}
            <Link 
              href="/about" 
              className="px-8 py-4 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center"
            >
              <FaUser className="mr-3 text-xs opacity-70" />
              更多關於我
            </Link>
          </section>

        </div>
      </main>
    </div>
  );
}