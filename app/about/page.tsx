// "use client"
// import Image from "next/image"
// import Menu from "../../component/Menu"
// import Link from "next/link";

// export default function About() {
  
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
//           About 關於我
//         </div>
//       </div>
//     </>
//   );
// }


// "use client"

// import Menu from "@/component/Menu"
// import { FaGlobeAmericas, FaLanguage, FaRocket, FaMusic } from "react-icons/fa";

// export default function AboutPage() {
//   const traits = [
//     {
//       title: "跨文化觀察者 | Explorer",
//       icon: <FaGlobeAmericas />,
//       bgClass: "bg-indigo-50/50",
//       content: "在南卡羅來納大學（USC）交換的經驗，讓我學會從全球化視角觀察商業模式。我熱愛旅遊，因為每一座城市都是一組獨特的數據集，等待被解讀。",
//       tags: ["Travel", "Cross-cultural", "Observation"]
//     },
//     {
//       title: "多語學習者 | Polyglot",
//       icon: <FaLanguage />,
//       bgClass: "bg-emerald-50/50",
//       content: "我享受學習新語言的邏輯。除了中文與英文，我也持續探索其他語言。這份對「編碼與解碼」的熱情，讓我能快速上手各種程式語言與分析工具。",
//       tags: ["English", "Systematic Learning", "Logic"]
//     },
//     {
//       title: "對未知的渴望 | NASA Dream",
//       icon: <FaRocket />,
//       bgClass: "bg-slate-100/80",
//       content: "從小對太空與黑洞的著迷，形塑了我探索未知、追求真理的性格。我將這份好奇心轉化為對數據深處洞察的追求，致力於發現隱藏在數字後的商業真相。",
//       tags: ["NASA Enthusiast", "Curiosity", "Truth-seeking"]
//     },
//     {
//       title: "律動與表達 | Vogue & Dance",
//       icon: <FaMusic />,
//       bgClass: "bg-pink-50/50",
//       content: "Vogue 與 K-pop 舞蹈是我平衡理性與感性的方式。舞蹈教會我精準控制與節奏感，這讓我即便在面對海量數據時，也能保持冷靜、掌握重點脈絡。",
//       tags: ["Vogue", "Performance", "Focus"]
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>

      
//       <main className="flex-grow overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               Personal Traits & Interests
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
//               關於我 About
//             </h1>
//             <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
//               在數據的世界裡，我追求精準與真理；在生活的維度中，我擁抱多元與跨界。這是我，一個不斷進化的數據探索者。
//             </p>
//           </header>

//           {/* 區塊化特質呈現 */}
//           <section className="grid grid-cols-1 gap-10">
//             {traits.map((trait, idx) => (
//               <div 
//                 key={idx} 
//                 className="group relative p-10 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl overflow-hidden"
//               >
//                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${trait.bgClass}`}></div>
                
//                 <div className="flex items-center mb-6">
//                   <div className="text-2xl text-blue-600 mr-4 p-3 bg-white rounded-2xl shadow-sm">
//                     {trait.icon}
//                   </div>
//                   <h2 className="text-2xl font-bold text-slate-800">{trait.title}</h2>
//                 </div>
                
//                 <p className="text-slate-600 leading-relaxed mb-8 text-base">
//                   {trait.content}
//                 </p>
                
//                 <div className="flex flex-wrap gap-3">
//                   {trait.tags.map((tag, i) => (
//                     <span key={i} className="px-4 py-1.5 bg-white/60 border border-slate-200 text-slate-500 rounded-full text-xs font-bold">
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* 底部 Call to Action */}
//           <div className="mt-20 text-center">
//             <p className="text-slate-400 text-sm mb-6 font-medium tracking-widest uppercase italic">
//               "Data is what we see, personality is how we interpret it."
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client"

// import Menu from "@/component/Menu"
// import { FaGlobeAmericas, FaLanguage, FaRocket, FaMusic } from "react-icons/fa";

// export default function AboutPage() {
//   const traits = [
//     {
//       title: "跨文化觀察者 | Explorer",
//       icon: <FaGlobeAmericas />,
//       // 修正：深色模式下使用半透明深色背景
//       bgClass: "bg-indigo-50/50 dark:bg-indigo-900/20",
//       content: "在南卡羅來納大學（USC）交換的經驗，讓我學會從全球化視角觀察商業模式。我熱愛旅遊，因為每一座城市都是一組獨特的數據集，等待被解讀。",
//       tags: ["Travel", "Cross-cultural", "Observation"]
//     },
//     {
//       title: "多語學習者 | Polyglot",
//       icon: <FaLanguage />,
//       bgClass: "bg-emerald-50/50 dark:bg-emerald-900/20",
//       content: "我享受學習新語言的邏輯。除了中文與英文，我也持續探索其他語言。這份對「編碼與解碼」的熱情，讓我能快速上手各種程式語言與分析工具。",
//       tags: ["English", "Systematic Learning", "Logic"]
//     },
//     {
//       title: "對未知的渴望 | NASA Dream",
//       icon: <FaRocket />,
//       bgClass: "bg-slate-100/80 dark:bg-slate-800/50",
//       content: "從小對太空與黑洞的着迷，形塑了我探索未知、追求真理的性格。我將這份好奇心轉化為對數據深處洞察的追求，致力於發現隱藏在數字後的商業真相。",
//       tags: ["NASA Enthusiast", "Curiosity", "Truth-seeking"]
//     },
//     {
//       title: "律動與表達 | Vogue & Dance",
//       icon: <FaMusic />,
//       bgClass: "bg-pink-50/50 dark:bg-pink-900/20",
//       content: "Vogue 與 K-pop 舞蹈是我平衡理性與感性的方式。舞蹈教會我精準控制與節奏感，這讓我即便在面對海量數據時，也能保持冷靜、掌握重點脈絡。",
//       tags: ["Vogue", "Performance", "Focus"]
//     }
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
//       <aside className="w-[280px] flex-shrink-0 h-full">
//         <Menu />
//       </aside>

//       <main className="flex-grow overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500 custom-scrollbar">
//         <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
//           <header className="mb-16">
//             <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//               Personal Traits & Interests
//             </div>
//             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
//               關於我 About
//             </h1>
//             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//               在數據的世界裡，我追求精準與真理；在生活的維度中，我擁抱多元與跨界。這是我，一個不斷進化的數據探索者。
//             </p>
//           </header>

//           {/* 區塊化特質呈現 */}
//           <section className="grid grid-cols-1 gap-10">
//             {traits.map((trait, idx) => (
//               <div 
//                 key={idx} 
//                 className="group relative p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 overflow-hidden bg-white dark:bg-slate-800/30"
//               >
//                 {/* 移除 Hover 陰影，改用背景色深淺變化 */}
//                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${trait.bgClass}`}></div>
                
//                 <div className="flex items-center mb-6">
//                   <div className="text-2xl text-blue-600 dark:text-blue-400 mr-4 p-3 bg-white dark:bg-slate-700 rounded-2xl border border-slate-100 dark:border-slate-600">
//                     {trait.icon}
//                   </div>
//                   <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{trait.title}</h2>
//                 </div>
                
//                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-base">
//                   {trait.content}
//                 </p>
                
//                 <div className="flex flex-wrap gap-3">
//                   {trait.tags.map((tag, i) => (
//                     <span key={i} className="px-4 py-1.5 bg-white/60 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300 rounded-full text-xs font-bold">
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* 底部 Call to Action */}
//           <div className="mt-20 text-center">
//             <p className="text-slate-400 dark:text-slate-500 text-sm mb-6 font-medium tracking-widest uppercase italic">
//               "Data is what we see, personality is how we interpret it."
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client"

import Menu from "@/component/Menu"
import { useLang } from "@/component/LanguageProvider";
import { translations } from "@/component/languageData";
import { FaGlobeAmericas, FaLanguage, FaRocket, FaMusic } from "react-icons/fa";

export default function AboutPage() {
  const { lang } = useLang();
  const t = translations[lang as keyof typeof translations].about;

  // 因為 Icon 是組件，無法放入 JSON 字典，我們在這裡建立一個對應陣列
  const icons = [
    <FaGlobeAmericas key="globe" />,
    <FaLanguage key="lang" />,
    <FaRocket key="rocket" />,
    <FaMusic key="music" />
  ];

  return (
    <div className="flex h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-500">
      <aside className="w-[280px] flex-shrink-0 h-full">
        <Menu />
      </aside>

      <main className="flex-grow overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500 custom-scrollbar">
        <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
              {t.tag}
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {t.intro}
            </p>
          </header>

          {/* 區塊化特質呈現 */}
          <section className="grid grid-cols-1 gap-10">
            {t.traits.map((trait, idx) => (
              <div 
                key={idx} 
                className="group relative p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 overflow-hidden bg-white dark:bg-slate-800/30"
              >
                {/* 懸停背景色 */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${trait.bgClass}`}></div>
                
                <div className="flex items-center mb-6">
                  <div className="text-2xl text-blue-600 dark:text-blue-400 mr-4 p-3 bg-white dark:bg-slate-700 rounded-2xl border border-slate-100 dark:border-slate-600">
                    {icons[idx]}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{trait.title}</h2>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-base">
                  {trait.content}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {trait.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-1.5 bg-white/60 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300 rounded-full text-xs font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* 底部 Call to Action */}
          <div className="mt-20 text-center">
            <p className="text-slate-400 dark:text-slate-500 text-sm mb-6 font-medium tracking-widest uppercase italic">
              "Data is what we see, personality is how we interpret it."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}