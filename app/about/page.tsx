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


"use client"

import Menu from "@/component/Menu"
import { FaGlobeAmericas, FaLanguage, FaRocket, FaMusic } from "react-icons/fa";

export default function AboutPage() {
  const traits = [
    {
      title: "跨文化觀察者 | Explorer",
      icon: <FaGlobeAmericas />,
      bgClass: "bg-indigo-50/50",
      content: "在南卡羅來納大學（USC）交換的經驗，讓我學會從全球化視角觀察商業模式。我熱愛旅遊，因為每一座城市都是一組獨特的數據集，等待被解讀。",
      tags: ["Travel", "Cross-cultural", "Observation"]
    },
    {
      title: "多語學習者 | Polyglot",
      icon: <FaLanguage />,
      bgClass: "bg-emerald-50/50",
      content: "我享受學習新語言的邏輯。除了中文與英文，我也持續探索其他語言。這份對「編碼與解碼」的熱情，讓我能快速上手各種程式語言與分析工具。",
      tags: ["English", "Systematic Learning", "Logic"]
    },
    {
      title: "對未知的渴望 | NASA Dream",
      icon: <FaRocket />,
      bgClass: "bg-slate-100/80",
      content: "從小對太空與黑洞的著迷，形塑了我探索未知、追求真理的性格。我將這份好奇心轉化為對數據深處洞察的追求，致力於發現隱藏在數字後的商業真相。",
      tags: ["NASA Enthusiast", "Curiosity", "Truth-seeking"]
    },
    {
      title: "律動與表達 | Vogue & Dance",
      icon: <FaMusic />,
      bgClass: "bg-pink-50/50",
      content: "Vogue 與 K-pop 舞蹈是我平衡理性與感性的方式。舞蹈教會我精準控制與節奏感，這讓我即便在面對海量數據時，也能保持冷靜、掌握重點脈絡。",
      tags: ["Vogue", "Performance", "Focus"]
    }
  ];

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      <aside className="w-[280px] flex-shrink-0 h-full">
        <Menu />
      </aside>

      <main className="flex-grow overflow-y-auto bg-white custom-scrollbar">
        <div className="max-w-4xl mx-auto px-12 py-20 w-full">
          
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
              Personal Traits & Interests
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
              關於我 About
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              在數據的世界裡，我追求精準與真理；在生活的維度中，我擁抱多元與跨界。這是我，一個不斷進化的數據探索者。
            </p>
          </header>

          {/* 區塊化特質呈現 */}
          <section className="grid grid-cols-1 gap-10">
            {traits.map((trait, idx) => (
              <div 
                key={idx} 
                className="group relative p-10 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl overflow-hidden"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${trait.bgClass}`}></div>
                
                <div className="flex items-center mb-6">
                  <div className="text-2xl text-blue-600 mr-4 p-3 bg-white rounded-2xl shadow-sm">
                    {trait.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">{trait.title}</h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 text-base">
                  {trait.content}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {trait.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white/60 border border-slate-200 text-slate-500 rounded-full text-xs font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* 底部 Call to Action */}
          <div className="mt-20 text-center">
            <p className="text-slate-400 text-sm mb-6 font-medium tracking-widest uppercase italic">
              "Data is what we see, personality is how we interpret it."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}