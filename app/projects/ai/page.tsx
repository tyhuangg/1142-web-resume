"use client"

import Menu from "@/component/Menu"
import Link from "next/link"
import { useLang } from "@/component/LanguageProvider"
import { FaChevronLeft } from "react-icons/fa"
import React from 'react';
import Image from "next/image";

export default function AIPage() {
  const { lang } = useLang(); 

  return (
    <div className="flex h-screen w-full bg-white dark:bg-slate-950 transition-colors duration-500 font-sans overflow-hidden">
      {/* 1. 左側側邊欄 - 保持跟 Data 頁面完全一致 */}
      <aside className="hidden sm:block w-[280px] flex-shrink-0 h-full border-r border-slate-200 dark:border-slate-800">
        <Menu />
      </aside>

      {/* 2. 右側主要內容滾動區 */}
      <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col custom-scrollbar relative">
        
        {/* 手機版返回按鈕 (符合妳作品集的風格) */}
        <Link 
          href="/projects/web" 
          className="sm:hidden fixed top-4 left-4 z-50 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 active:scale-95 transition-all"
        >
          <FaChevronLeft size={20} />
        </Link>

        {/* --- 🟢 超級對齊 Container: 所有的內容都放在這裡 --- */}
        <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-20 w-full space-y-20">
          
          {/* --- Hero Section (保持為 header 標籤) --- */}
          <header>
            <div className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-[10px] font-bold mb-6 tracking-widest uppercase">
              AI & Automation
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              n8n｜AI 個人智慧投資顧問系統
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8 font-light">
              透過 n8n 自動化工流程整合鉅亨網、Yahoo 股市與 Google Sheets 數據，並經由 OpenAI GPT-4o 生成客製化的天藍色投資日報。系統運行於自架 Docker 環境，兼具高隱私與長期運作之魯棒性。
            </p>
            <div className="flex flex-wrap gap-3">
              {['n8n', 'Docker', 'OpenAI API', 'JavaScript', 'GCP', 'Google Sheets'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </header>
          
          {/* --- Workflow Section --- */}
          <section>
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800 dark:text-white">
              <span className="p-2 bg-sky-400 rounded-lg text-white shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>
              </span>
              系統架構與多媒體展示
            </h2>
            
            {/* 包裹容器 */}
            <div className="bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-sm space-y-8">
              
              {/* 1. 上方：Demo 影片 (滿版) */}
              <div className="w-full relative aspect-video bg-black rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                <video 
                  controls 
                  className="w-full h-full object-contain bg-black" // 使用 object-contain 確保影片不被裁切
                  poster="/n8n-placeholder.png"
                >
                  <source src="/n8n-success.mov" type="video/quicktime" />
                  <source src="/n8n-success.mp4" type="video/mp4" />
                  您的瀏覽器不支持影片播放。
                </video>
                <div className="absolute top-4 left-4 bg-sky-500/90 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-lg font-bold uppercase tracking-widest z-10">
                  Live Demo
                </div>
              </div>

              {/* 2. 下方：兩張截圖 (垂直排列，全展開) */}
              <div className="flex flex-col gap-8">
                {/* 第一張截圖 */}
                <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
                  <Image 
                    src="/n8n-success1.png" 
                    alt="n8n Nodes Detail" 
                    width={1200} // 設定一個大寬度
                    height={800} // 高度會根據比例自動調整
                    layout="responsive"
                    className="w-full h-auto"
                  />
                  <div className="bg-white dark:bg-slate-800 p-4 text-center text-xs text-slate-500 font-medium border-t border-slate-100 dark:border-slate-700">
                    工作流局部細節：節點配置與資料傳遞
                  </div>
                </div>
                
                {/* 第二張截圖 */}
                <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
                  <Image 
                    src="/n8n-success2.png" 
                    alt="Data Logic" 
                    width={1200}
                    height={800}
                    layout="responsive"
                    className="w-full h-auto"
                  />
                  <div className="bg-white dark:bg-slate-800 p-4 text-center text-xs text-slate-500 font-medium border-t border-slate-100 dark:border-slate-700">
                    資料處理邏輯：OpenAI Prompt 與異質資料整合
                  </div>
                </div>
              </div>

              {/* 3. 最下方：STEP 說明卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-6 bg-white dark:bg-slate-900/60 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-sky-500 mb-2 font-mono text-xs uppercase tracking-widest">STEP 01</h4>
                  <h5 className="font-bold text-slate-900 dark:text-white mb-2">資料採集</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light">定期抓取鉅亨網、Yahoo 股市及個人 Google Sheets 數據。</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/60 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-sky-500 mb-2 font-mono text-xs uppercase tracking-widest">STEP 02</h4>
                  <h5 className="font-bold text-slate-800 dark:text-white mb-2">AI 邏輯引擎</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light">透過 GPT-4o 進行數據聚合，並針對小資族群個性化分析。</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/60 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-sky-500 mb-2 font-mono text-xs uppercase tracking-widest">STEP 03</h4>
                  <h5 className="font-bold text-slate-800 dark:text-white mb-2">成果交付</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light">自動生成 HTML 報報，於開盤前準時推送至 Gmail。</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* --- Technical Deep Dive --- */}
          <section>
            <h2 className="text-2xl font-bold mb-10 text-slate-800 dark:text-white">技術深度解析</h2>
            <div className="grid grid-cols-1 gap-10">
              <div className="group p-10 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-sky-200">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white group-hover:text-sky-500">
                  <span className="text-sky-400 font-mono text-xl">#</span> 異質資料遞迴處理 (JavaScript)
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl font-light">
                  針對財經新聞 API 繁雜的嵌套結構，我撰寫了自定義的遞迴函數（Recursion）來動態收割標題數據，確保系統具備高度的擴充性，能應對不同來源的 API 回傳格式。
                </p>
              </div>
              
              <div className="group p-10 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-sky-200">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white group-hover:text-sky-500">
                  <span className="text-sky-400 font-mono text-xl">#</span> Docker 自託管環境 (Self-hosting)
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl font-light">
                  不依賴 SaaS 雲端平台，而是將整個 n8n 服務佈署在個人伺服器的 Docker 容器中。這不僅省去了訂閱費用，更讓我在處理個人投資數據時，擁有 100% 的隱私主導權。
                </p>
              </div>
            </div>
          </section>

          {/* --- Result Demo (Gmail Mockup) --- */}
          <section>
            {/* <h2 className="text-2xl font-bold mb-10 text-slate-800 dark:text-white text-center">最終產出展示</h2>
            <div className="max-w-md mx-auto border border-slate-200 dark:border-slate-700 rounded-[2.5rem] shadow-2xl overflow-hidden bg-white">
              <div className="bg-sky-400 px-8 py-5 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">AI</div>
                  <div className="text-sm">
                    <p className="font-bold">準畢業生投顧顧問</p>
                    <p className="text-xs opacity-80">To: Claudia Huang</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="p-10 space-y-8 bg-slate-50">
                <div className="p-6 bg-white border-l-4 border-sky-400 shadow-sm rounded-r-2xl">
                  <h4 className="text-sky-500 font-bold text-sm mb-3">【Part 1: 每日新聞與 AI 摘要】</h4>
                  <div className="h-2 w-3/4 bg-slate-100 rounded mb-3"></div>
                  <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                </div> */}
                {/* <div className="p-6 bg-white border-l-4 border-sky-400 shadow-sm rounded-r-2xl">
                  <h4 className="text-sky-500 font-bold text-sm mb-3">【Part 3: 個人資產追蹤】</h4>
                  <p className="text-[12px] text-slate-400 leading-relaxed italic">
                    「🌱 妳目前的 0050 持倉表現穩健，在準大學畢業的黃金階段，定期定額是妳最強大的複利武器...」
                  </p>
                </div> */}
              {/* </div> */}
            {/* </div> */}
          </section>

          {/* --- Future Outlook --- */}
          <section className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-900/20 p-10 rounded-[3rem] border border-sky-100 dark:border-sky-900/50">
            <h2 className="text-3xl font-bold mb-10 text-sky-600 dark:text-sky-400 flex items-center gap-3">
              🚀 未來展望
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "RAG 強化分析", desc: "串接 Vector Database (Pinecone)，讓 AI 顧問能根據歷史投資筆記提供更具個人化脈絡的分析。" },
                { title: "Telegram Bot 整合", desc: "實作雙向即時互動介面，實現即時資產查詢與異常股價推播通知。" },
                { title: "視覺化數據畫布", desc: "將 n8n 的處理結果渲染為互動式 Dashboard 網頁版，提升數據洞察力。" },
                { title: "多模型競爭檢測", desc: "同步比較 Claude 與 GPT 針對同一財經新聞的解讀差異，優化分析模型。" }
              ].map((item, idx) => (
                <li key={idx} className="bg-white dark:bg-slate-900/70 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-sky-200 transition-colors">
                  <h5 className="font-bold text-slate-800 dark:text-white mb-2">{item.title}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-light">{item.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <footer className="text-center text-slate-400 text-xs border-t border-slate-100 dark:border-slate-800 pt-10 mt-10">
            Designed & Developed by Claudia Huang © 2026 | NCP Portfolio AI Project
          </footer>
        </div>
      </main>
    </div>
  );
}

// "use client"

// import Menu from "@/component/Menu"
// import Link from "next/link"
// import { useLang } from "@/component/LanguageProvider"
// // import { translations } from "@/component/languageData"
// // import { FaChartBar, FaBullseye, FaExternalLinkAlt, FaChevronLeft } from "react-icons/fa"
// // import ImageCarousel from "@/component/ImageCarousel"
// // 修正：確保引入 FaChevronLeft
// import { FaChevronLeft } from "react-icons/fa"
// import React from 'react';

// export default function AIPage() {
//   const { lang } = useLang(); // 確保妳有呼叫語言 Hook (如果 Menu 需要的話)

//   return (
//     // <div className="max-w-4xl mx-auto px-6 py-12 text-slate-800 dark:text-slate-200">
//     // <div className="flex min-h-screen bg-white dark:bg-slate-950">
//     <div className="flex h-screen w-full bg-white dark:bg-slate-950 transition-colors duration-500 font-sans">
//       {/* 1. 這裡加入妳的 Side Menu */}
//       <aside className="hidden sm:block w-[280px] flex-shrink-0 h-full border-r border-slate-200 dark:border-slate-800">
//         <Menu />
//       </aside>

//       {/* 2. 主要內容區塊 */}
//       {/* <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-slate-800 dark:text-slate-200"> */}
//       {/* <main className="flex-1 ml-64 max-w-5xl px-8 py-12 text-slate-800 dark:text-slate-200"> */}
//       <main className="flex-grow h-screen overflow-y-auto bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col custom-scrollbar relative">
        
//         {/* 加入一個回上一頁的按鈕 (符合妳作品集的風格) */}
//         {/* <div className="mb-8">
//           <Link href="/projects/data" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
//             <FaChevronLeft size={12} /> Back to Projects
//           </Link>
//         </div> */}

//       {/* --- Hero Section --- */}
//       <section className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-20 w-full">
//         <div className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-sm font-medium mb-4">
//           AI & Automation
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
//           個人智慧投資顧問系統
//         </h1>
//         <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
//           透過 n8n 串接 OpenAI GPT-4o，將分散的財經數據轉化為具備深度洞察的「天藍色投資日報」。系統完全架設於自建 Docker 環境，實現高度私密且長效的自動化流程。
//         </p>
        
//         {/* Tech Stack Tags */}
//         <div className="flex flex-wrap gap-3">
//           {['n8n', 'Docker', 'OpenAI API', 'JavaScript', 'GCP', 'Google Sheets'].map((tech) => (
//             <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-mono">
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* --- Workflow Section --- */}
//       <section className="mb-16">
//         <div className="flex items-center gap-3 mb-6">
//           <div className="p-2 bg-sky-400 rounded-lg text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>
//           </div>
//           <h2 className="text-2xl font-bold">系統架構與自動化流程</h2>
//         </div>
        
//         <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
//           {/* 圖片預留位：建議放 n8n 截圖 */}
//           <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-dashed border-slate-400">
//             <span className="text-slate-500 italic">Insert n8n Workflow Screenshot Here</span>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
//             <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
//               <h4 className="font-bold text-sky-500 mb-2">1. 資料採集</h4>
//               <p className="text-slate-500">定期抓取鉅亨網、Yahoo 股市及個人 Google Sheets 投資組合數據。</p>
//             </div>
//             <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
//               <h4 className="font-bold text-sky-500 mb-2">2. AI 邏輯引擎</h4>
//               <p className="text-slate-500">透過 GPT-4o 進行多源數據聚合，並針對小資族群進行個性化分析。</p>
//             </div>
//             <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
//               <h4 className="font-bold text-sky-500 mb-2">3. 成果交付</h4>
//               <p className="text-slate-500">自動生成 HTML 格式報報，於每日開盤前準時推送至 Gmail。</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- Technical Deep Dive --- */}
//       <section className="mb-16">
//         <h2 className="text-2xl font-bold mb-8">技術深度解析</h2>
//         <div className="space-y-6">
//           <div className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-400 transition-colors">
//             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//               <span className="text-sky-400">#</span> 異質資料遞迴處理 (JavaScript)
//             </h3>
//             <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
//               針對財經新聞 API 繁雜的嵌套結構，我撰寫了自定義的遞迴函數（Recursion）來動態收割標題數據，確保系統具備高度的擴充性，能應對不同來源的 API 回傳格式。
//             </p>
//           </div>
          
//           <div className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-400 transition-colors">
//             <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//               <span className="text-sky-400">#</span> Docker 自託管環境 (Self-hosting)
//             </h3>
//             <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
//               不依賴 SaaS 雲端平台，而是將整個 n8n 服務佈署在個人伺服器的 Docker 容器中。這不僅省去了訂閱費用，更讓我在處理個人投資數據時，擁有 100% 的隱私主導權。
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- Result Demo (Gmail Mockup) --- */}
//       <section className="mb-16">
//         <h2 className="text-2xl font-bold mb-8">最終產出展示</h2>
//         <div className="max-w-md mx-auto border border-slate-200 dark:border-slate-700 rounded-t-2xl shadow-2xl overflow-hidden bg-white">
//           <div className="bg-sky-400 px-6 py-4 flex justify-between items-center text-white">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">AI</div>
//               <div className="text-sm">
//                 <p className="font-bold">22 歲專屬顧問</p>
//                 <p className="text-xs opacity-80">To: Claudia Huang</p>
//               </div>
//             </div>
//           </div>
//           <div className="p-8 space-y-6 bg-slate-50">
//             <div className="p-4 bg-white border-l-4 border-sky-400 shadow-sm rounded-r-lg">
//               <h4 className="text-sky-500 font-bold text-sm mb-2">【Part 1: 財經頭條】</h4>
//               <div className="h-2 w-3/4 bg-slate-100 rounded mb-2"></div>
//               <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
//             </div>
//             <div className="p-4 bg-white border-l-4 border-sky-400 shadow-sm rounded-r-lg">
//               <h4 className="text-sky-500 font-bold text-sm mb-2">【Part 3: 資產暖心建議】</h4>
//               <p className="text-[10px] text-slate-400 leading-tight italic">
//                 「恭喜妳目前的 0050 獲利穩定，在準大學畢業的黃金階段，定期定額是妳最棒的選擇...」
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- Future Outlook --- */}
//       <section className="mb-16 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-900/20 p-8 rounded-3xl border border-sky-100 dark:border-sky-900/50">
//         <h2 className="text-2xl font-bold mb-6 text-sky-600 dark:text-sky-400 flex items-center gap-2">
//           🚀 未來展望
//         </h2>
//         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {[
//             { title: "RAG 強化分析", desc: "串接 Vector DB (Pinecone)，讓 AI 根據我的歷史投資筆記進行更具脈絡的回答。" },
//             { title: "Telegram 雙向互動", desc: "開發 Bot 介面，實現即時資產查詢與異常股價推播通知。" },
//             { title: "視覺化看板", desc: "將 n8n 的處理結果渲染為互動式數據圖表，提升數據洞察力。" },
//             { title: "多模型競爭優化", desc: "同步比較 Claude 與 GPT 針對同一新聞的解讀差異。" }
//           ].map((item, idx) => (
//             <li key={idx} className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl">
//               <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{item.title}</h5>
//               <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <footer className="text-center text-slate-400 text-xs border-t border-slate-200 dark:border-slate-800 pt-8">
//         Designed & Developed by Claudia Huang © 2026
//       </footer>
//       </main>
//     </div>
//   );
// }

// // "use client";

// // import { useState } from "react";

// // // ── Types ────────────────────────────────────────────────────────────────────
// // type TabId = "demo" | "workflow" | "tech" | "highlights";

// // // ── Data ─────────────────────────────────────────────────────────────────────
// // const tabs: { id: TabId; label: string; emoji: string }[] = [
// //   { id: "demo",       label: "Gmail Demo",   emoji: "📧" },
// //   { id: "workflow",   label: "n8n Workflow",  emoji: "⚙️" },
// //   { id: "tech",       label: "技術節點",      emoji: "🔧" },
// //   { id: "highlights", label: "亮點 & 心得",   emoji: "✨" },
// // ];

// // const workflowNodes = [
// //   {
// //     step: "01",
// //     name: "Gmail Trigger",
// //     desc: "監聽收件匣，每封新郵件自動觸發工作流程",
// //     tech: ["Google OAuth2", "IMAP"],
// //     color: "#EA4335",
// //   },
// //   {
// //     step: "02",
// //     name: "Google Sheets Read",
// //     desc: "讀取個人資產試算表，取得 0050 買入成本與損益數據",
// //     tech: ["Google Sheets API", "JSON mapping"],
// //     color: "#34A853",
// //   },
// //   {
// //     step: "03",
// //     name: "HTTP Request (新聞 API)",
// //     desc: "同步抓取財經新聞標題，最多 15 則，支援多來源 flat 整合",
// //     tech: ["REST API", "Array.flat()", "JS filter"],
// //     color: "#F9AB00",
// //   },
// //   {
// //     step: "04",
// //     name: "Code Node (資料整合)",
// //     desc: "將新聞、股市數據、個人資產組裝成結構化 prompt，生成 OpenAI messages JSON",
// //     tech: ["JavaScript", "n8n expressions", "JSON.stringify"],
// //     color: "#00a650",
// //   },
// //   {
// //     step: "05",
// //     name: "OpenAI / GPT-4o",
// //     desc: "呼叫 GPT-4o，扮演「國泰證券投顧學姊」角色，產出 HTML 格式投資報報",
// //     tech: ["OpenAI API", "system prompt", "HTML output"],
// //     color: "#412991",
// //   },
// //   {
// //     step: "06",
// //     name: "Gmail Send",
// //     desc: "將 AI 產出的 HTML 投資報報寄回指定信箱，完成自動化閉環",
// //     tech: ["Gmail API", "HTML email"],
// //     color: "#EA4335",
// //   },
// // ];

// // const techStack = [
// //   { category: "自動化平台", items: ["n8n (self-hosted)", "Webhook trigger", "Schedule trigger"] },
// //   { category: "AI / LLM",   items: ["OpenAI GPT-4o", "Prompt engineering", "Role-play system prompt"] },
// //   { category: "資料整合",   items: ["Google Sheets API", "Gmail API", "財經新聞 REST API"] },
// //   { category: "程式技術",   items: ["JavaScript ES6+", "Array.flat / filter", "JSON 結構化輸出"] },
// //   { category: "輸出格式",   items: ["HTML email template", "國泰綠 (#00a650) 品牌色", "白話財經術語"] },
// // ];

// // const highlights = [
// //   {
// //     icon: "🤖",
// //     title: "全自動閉環",
// //     desc: "從 Gmail 觸發 → 資料整合 → AI 分析 → 自動寄回，零人工介入。每天早晨自動送出個人化投資報報。",
// //   },
// //   {
// //     icon: "📊",
// //     title: "個人化資產整合",
// //     desc: "透過 Google Sheets 串接真實持倉數據（0050 定期定額成本、損益），讓 AI 給出有針對性的暖心建議。",
// //   },
// //   {
// //     icon: "🧩",
// //     title: "模組化 Prompt 設計",
// //     desc: "將新聞摘要、股市走勢、個人資產、小資推薦拆成 4 個 Part，讓 GPT-4o 輸出結構清晰的 HTML 報告。",
// //   },
// //   {
// //     icon: "🔄",
// //     title: "可擴充架構",
// //     desc: "節點設計解耦，未來可替換新聞 API 來源、加入 LINE Notify 推播、或串接更多 Google 服務。",
// //   },
// // ];

// // const reflection = `這個 Side Project 起源於一個很日常的煩惱：每天要追好多財經新聞、還要對照自己的持倉，很費時間。
// // 於是我用 n8n 把這件事自動化，同時練習了 API 整合、Prompt Engineering 和資料流設計。
// // 最大的收穫是：學會把「人工判斷」轉化成「可執行的結構化指令」，
// // 這個思維其實跟數據分析很像——把模糊問題拆解成可量化的步驟。`;

// // // ── Gmail Mock ────────────────────────────────────────────────────────────────
// // function GmailDemo() {
// //   return (
// //     <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
// //       {/* Gmail top bar */}
// //       <div className="bg-white dark:bg-gray-900 px-4 py-3 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
// //         <div className="flex gap-1.5">
// //           <span className="w-3 h-3 rounded-full bg-red-400" />
// //           <span className="w-3 h-3 rounded-full bg-yellow-400" />
// //           <span className="w-3 h-3 rounded-full bg-green-400" />
// //         </div>
// //         <span className="text-xs text-gray-400 font-mono ml-2">Gmail — 收件匣</span>
// //         <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 font-medium">
// //           🟢 自動寄出
// //         </span>
// //       </div>

// //       {/* Email content */}
// //       <div className="bg-white dark:bg-gray-950 p-6 space-y-4">
// //         <div className="space-y-1">
// //           <p className="text-xs text-gray-400">寄件者：投顧學姊 AI &lt;noreply@claudia-bot.app&gt;</p>
// //           <p className="text-xs text-gray-400">收件者：claudia@example.com</p>
// //           <h2 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
// //             📈 今日投資報報｜2026/04/24
// //           </h2>
// //         </div>

// //         <hr className="border-gray-100 dark:border-gray-800" />

// //         {/* Part 1 */}
// //         <div>
// //           <h3 style={{ color: "#00a650" }} className="font-bold text-sm mb-2">
// //             Part 1｜每日新聞摘要
// //           </h3>
// //           <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-none">
// //             {[
// //               "★ 台積電法說會釋利多，AI 晶片需求超預期",
// //               "★ Fed 維持利率不變，美股三大指數收漲",
// //               "★ 00878 配息確認，存股族今年報酬亮眼",
// //             ].map((t) => (
// //               <li key={t} className="flex gap-2 text-xs leading-relaxed">
// //                 <span className="text-green-600 shrink-0">▶</span>
// //                 <span>{t.replace("★ ", "")}</span>
// //               </li>
// //             ))}
// //           </ul>
// //           <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
// //             💡 白話解析：Fed 不升息代表借錢成本不會更貴，科技股通常會因此上漲～
// //           </p>
// //         </div>

// //         {/* Part 2 */}
// //         <div>
// //           <h3 style={{ color: "#00a650" }} className="font-bold text-sm mb-2">
// //             Part 2｜跨國股市走勢
// //           </h3>
// //           <div className="grid grid-cols-3 gap-2">
// //             {[
// //               { name: "台積電 2330", price: "NT$800", change: "+2.3%" },
// //               { name: "VOO", price: "$520.4", change: "+1.1%" },
// //               { name: "HYBE", price: "₩201,000", change: "-0.8%" },
// //             ].map((s) => (
// //               <div
// //                 key={s.name}
// //                 className="rounded-lg bg-gray-50 dark:bg-gray-800 p-2 text-center"
// //               >
// //                 <p className="text-xs text-gray-500 dark:text-gray-400">{s.name}</p>
// //                 <p className="font-bold text-sm text-gray-900 dark:text-white">{s.price}</p>
// //                 <p
// //                   className={`text-xs font-medium ${
// //                     s.change.startsWith("+") ? "text-green-600" : "text-red-500"
// //                   }`}
// //                 >
// //                   {s.change}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Part 3 */}
// //         <div>
// //           <h3 style={{ color: "#00a650" }} className="font-bold text-sm mb-2">
// //             Part 3｜個人資產提醒
// //           </h3>
// //           <div className="rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-3">
// //             <p className="text-xs text-gray-700 dark:text-gray-300">
// //               🌱 妳的 0050 定期定額目前損益 <span className="font-bold text-green-700 dark:text-green-400">+5%</span>，
// //               持續加碼是對的！長期投資就是在買「時間的複利」，學姊替妳加油 ✨
// //             </p>
// //           </div>
// //         </div>

// //         {/* Part 4 */}
// //         <div>
// //           <h3 style={{ color: "#00a650" }} className="font-bold text-sm mb-2">
// //             Part 4｜學生小資推薦
// //           </h3>
// //           <p className="text-xs text-gray-700 dark:text-gray-300">
// //             本週關注：<strong>00878（國泰永續高股息）</strong> — 月月配、波動低，適合小資族長期持有。
// //           </p>
// //           <p className="text-xs text-gray-400 mt-2 italic">
// //             ⚠️ 以上內容為 AI 自動生成，僅供參考，不構成投資建議。投資有風險，請評估自身財務狀況。
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ── Workflow Visual ───────────────────────────────────────────────────────────
// // function WorkflowDiagram() {
// //   return (
// //     <div className="space-y-3">
// //       <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
// //         以下為 n8n 自動化工作流程的各節點示意
// //       </p>
// //       <div className="relative">
// //         {workflowNodes.map((node, i) => (
// //           <div key={node.step} className="flex gap-4 mb-2 group">
// //             {/* Connector line */}
// //             <div className="flex flex-col items-center">
// //               <div
// //                 className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-md"
// //                 style={{ backgroundColor: node.color }}
// //               >
// //                 {node.step}
// //               </div>
// //               {i < workflowNodes.length - 1 && (
// //                 <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 my-1 min-h-[16px]" />
// //               )}
// //             </div>

// //             {/* Card */}
// //             <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-3 mb-1 group-hover:border-green-400 transition-colors duration-200">
// //               <div className="flex items-start justify-between gap-2">
// //                 <div>
// //                   <p className="font-semibold text-sm text-gray-900 dark:text-white">{node.name}</p>
// //                   <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{node.desc}</p>
// //                 </div>
// //               </div>
// //               <div className="flex flex-wrap gap-1 mt-2">
// //                 {node.tech.map((t) => (
// //                   <span
// //                     key={t}
// //                     className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-mono"
// //                   >
// //                     {t}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // ── Tech Stack ────────────────────────────────────────────────────────────────
// // function TechStack() {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //       {techStack.map((group) => (
// //         <div
// //           key={group.category}
// //           className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4"
// //         >
// //           <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">
// //             {group.category}
// //           </p>
// //           <div className="flex flex-wrap gap-2">
// //             {group.items.map((item) => (
// //               <span
// //                 key={item}
// //                 className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
// //               >
// //                 {item}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // // ── Highlights ────────────────────────────────────────────────────────────────
// // function Highlights() {
// //   return (
// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //         {highlights.map((h) => (
// //           <div
// //             key={h.title}
// //             className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-green-400 transition-colors"
// //           >
// //             <span className="text-2xl">{h.icon}</span>
// //             <h3 className="font-bold text-sm text-gray-900 dark:text-white mt-2 mb-1">{h.title}</h3>
// //             <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{h.desc}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Reflection */}
// //       <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
// //         <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">🌿 開發心得</p>
// //         {reflection.split("\n").map((line, i) => (
// //           <p key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
// //             {line}
// //           </p>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // ── Main Page ─────────────────────────────────────────────────────────────────
// // export default function AIProjectPage() {
// //   const [activeTab, setActiveTab] = useState<TabId>("demo");

// //   return (
// //     <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
// //       <div className="max-w-3xl mx-auto">

// //         {/* Header */}
// //         <div className="mb-10">
// //           <div className="flex items-center gap-2 mb-3">
// //             <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
// //               🟢 Running
// //             </span>
// //             <span className="text-xs text-gray-400">AI Side Project</span>
// //           </div>
// //           <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
// //             投顧學姊 AI 投資報報
// //           </h1>
// //           <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
// //             以 n8n 串接 Gmail、Google Sheets、財經新聞 API 與 GPT-4o，
// //             每日自動生成個人化 HTML 投資報報並寄送至信箱。
// //           </p>

// //           {/* Meta tags */}
// //           <div className="flex flex-wrap gap-2 mt-4">
// //             {["n8n", "GPT-4o", "Google Sheets", "Gmail API", "Prompt Engineering"].map((tag) => (
// //               <span
// //                 key={tag}
// //                 className="text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
// //               >
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Tabs */}
// //         <div className="flex gap-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-1 mb-6">
// //           {tabs.map((tab) => (
// //             <button
// //               key={tab.id}
// //               onClick={() => setActiveTab(tab.id)}
// //               className={`flex-1 flex items-center justify-center gap-1.5 text-xs py-2 px-2 rounded-lg font-medium transition-all duration-200 ${
// //                 activeTab === tab.id
// //                   ? "bg-green-600 text-white shadow-sm"
// //                   : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
// //               }`}
// //             >
// //               <span>{tab.emoji}</span>
// //               <span className="hidden sm:inline">{tab.label}</span>
// //             </button>
// //           ))}
// //         </div>

// //         {/* Tab Content */}
// //         <div className="animate-fadeIn">
// //           {activeTab === "demo"       && <GmailDemo />}
// //           {activeTab === "workflow"   && <WorkflowDiagram />}
// //           {activeTab === "tech"       && <TechStack />}
// //           {activeTab === "highlights" && <Highlights />}
// //         </div>

// //       </div>
// //     </main>
// //   );
// // }