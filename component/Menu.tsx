// // // // // "use client"
// // // // // import Image from "next/image"
// // // // // import Link from "next/link";
// // // // // import { usePathname } from "next/navigation";
// // // // // import {
// // // // //   FaGithub,
// // // // //   FaLinkedin,
// // // // //   FaInstagram,
// // // // //   FaEnvelope,
// // // // //   FaHome,
// // // // //   FaUser,
// // // // //   FaHeart,
// // // // //   FaPalette,
// // // // //   FaCode
// // // // // } from "react-icons/fa";

// // // // // export default function Menu() {
// // // // //   const pathname = usePathname();

// // // // //   const navItems = [
// // // // //     { href: "/", label: "首頁", icon: FaHome },
// // // // //     { href: "/about", label: "關於我", icon: FaUser },
// // // // //     { href: "/hobby", label: "我的興趣", icon: FaHeart },
// // // // //     { href: "/design-project", label: "設計專案", icon: FaPalette },
// // // // //     { href: "/programming-project", label: "程式專案", icon: FaCode },
// // // // //   ];

// // // // //   const socialLinks = [
// // // // //     { href: "https://github.com/tyhuangg/", icon: FaGithub, label: "GitHub" },
// // // // //     { href: "https://www.linkedin.com/in/tingyunclaudiahuang/", icon: FaLinkedin, label: "LinkedIn" },
// // // // //     { href: "https://instagram.com/tyhuangg", icon: FaInstagram, label: "Instagram" },
// // // // //     { href: "mailto:claudia41.huang@gmail.com", icon: FaEnvelope, label: "Email" },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="bg-gradient-to-b from-slate-50 to-white w-[320px] h-full p-6 shadow-xl border-r border-slate-200">
// // // // //       {/* Logo/Home Link */}
// // // // //       <div className="mb-8">
// // // // //         <Link href="/" className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200">
// // // // //           Portfolio
// // // // //         </Link>
// // // // //       </div>

// // // // //       {/* Profile Section */}
// // // // //       <div className="text-center mb-8">
// // // // //         <div className="relative mb-4">
// // // // //           <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
// // // // //             <Image
// // // // //               src="/cat.png"
// // // // //               alt="Profile"
// // // // //               width={96}
// // // // //               height={96}
// // // // //               className="w-full h-full object-cover"
// // // // //             />
// // // // //           </div>
// // // // //           <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // // // //         </div>

// // // // //         <h2 className="text-xl font-bold text-slate-800 mb-1">黃婷筠 Claudia Huang</h2>
// // // // //         <p className="text-sm text-slate-600 mb-2">政大資管五年級</p>
// // // // //         <p className="text-xs text-slate-500 leading-relaxed px-2">
// // // // //           Data Driven Designer & Developer 
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* Social Links */}
// // // // //       <div className="mb-8">
// // // // //         <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">聯絡方式</h3>
// // // // //         <div className="flex justify-center space-x-3">
// // // // //           {socialLinks.map((link, index) => (
// // // // //             <a
// // // // //               key={index}
// // // // //               href={link.href}
// // // // //               target="_blank"
// // // // //               rel="noopener noreferrer"
// // // // //               className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 hover:scale-110"
// // // // //               title={link.label}
// // // // //             >
// // // // //               <link.icon className="w-5 h-5" />
// // // // //             </a>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Navigation */}
// // // // //       <div>
// // // // //         <h3 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">導航</h3>
// // // // //         <nav className="space-y-2">
// // // // //           {navItems.map((item, index) => {
// // // // //             const isActive = pathname === item.href;
// // // // //             return (
// // // // //               <Link
// // // // //                 key={index}
// // // // //                 href={item.href}
// // // // //                 className={`group flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
// // // // //                   isActive
// // // // //                     ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
// // // // //                     : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
// // // // //                 }`}
// // // // //               >
// // // // //                 <item.icon className={`w-5 h-5 mr-3 transition-colors duration-200 ${
// // // // //                   isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
// // // // //                 }`} />
// // // // //                 <span className="font-medium">{item.label}</span>
// // // // //                 {isActive && (
// // // // //                   <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
// // // // //                 )}
// // // // //               </Link>
// // // // //             );
// // // // //           })}
// // // // //         </nav>
// // // // //       </div>

// // // // //       {/* Footer */}
// // // // //       <div className="absolute bottom-6 left-6 right-6">
// // // // //         <div className="text-xs text-slate-400 text-center">
// // // // //           © 2026 Claudia Huang. All rights reserved.
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // "use client"
// // // // import Image from "next/image"
// // // // import Link from "next/link";
// // // // import { usePathname } from "next/navigation";
// // // // import {
// // // //   FaGithub,
// // // //   FaLinkedin,
// // // //   FaInstagram,
// // // //   FaEnvelope,
// // // //   FaHome,
// // // //   FaUser,
// // // //   FaHeart,
// // // //   FaPalette,
// // // //   FaCode
// // // // } from "react-icons/fa";

// // // // export default function Menu() {
// // // //   const pathname = usePathname();

// // // //   const navItems = [
// // // //     { href: "/", label: "首頁", icon: FaHome },
// // // //     { href: "/about", label: "關於我", icon: FaUser },
// // // //     { href: "/hobby", label: "我的興趣", icon: FaHeart },
// // // //     { href: "/design-project", label: "設計專案", icon: FaPalette },
// // // //     { href: "/programming-project", label: "程式專案", icon: FaCode },
// // // //   ];

// // // //   const socialLinks = [
// // // //     { href: "https://github.com/tyhuangg/", icon: FaGithub, label: "GitHub" },
// // // //     { href: "https://www.linkedin.com/in/tingyunclaudiahuang/", icon: FaLinkedin, label: "LinkedIn" },
// // // //     { href: "https://instagram.com/tyhuangg", icon: FaInstagram, label: "Instagram" },
// // // //     { href: "mailto:claudia41.huang@gmail.com", icon: FaEnvelope, label: "Email" },
// // // //   ];

// // // //   return (
// // // //     // 使用 h-screen 鎖定高度，flex-col 進行垂直分佈
// // // //     <div className="bg-gradient-to-b from-slate-50 to-white w-[320px] h-screen p-6 shadow-xl border-r border-slate-200 flex flex-col relative">
      
// // // //       {/* 上半部：Logo + 個人資訊 (固定，不捲動) */}
// // // //       <div className="flex-shrink-0">
// // // //         <div className="mb-8">
// // // //           <Link href="/" className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200">
// // // //             Portfolio
// // // //           </Link>
// // // //         </div>

// // // //         <div className="text-center mb-8">
// // // //           <div className="relative mb-4">
// // // //             <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
// // // //               <Image
// // // //                 src="/cat.png"
// // // //                 alt="Profile"
// // // //                 width={96}
// // // //                 height={96}
// // // //                 className="w-full h-full object-cover"
// // // //               />
// // // //             </div>
// // // //             <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // // //           </div>

// // // //           <h2 className="text-xl font-bold text-slate-800 mb-1">黃婷筠 Claudia Huang</h2>
// // // //           <p className="text-sm text-slate-600 mb-2">政大資管五年級</p>
// // // //           <p className="text-xs text-slate-500 leading-relaxed px-2">
// // // //             Data Driven Designer & Developer 
// // // //           </p>
// // // //         </div>

// // // //         {/* Social Links */}
// // // //         <div className="mb-8 border-b border-slate-100 pb-6">
// // // //           <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide text-center">聯絡方式</h3>
// // // //           <div className="flex justify-center space-x-3">
// // // //             {socialLinks.map((link, index) => (
// // // //               <a
// // // //                 key={index}
// // // //                 href={link.href}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 hover:scale-110"
// // // //                 title={link.label}
// // // //               >
// // // //                 <link.icon className="w-5 h-5" />
// // // //               </a>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* 中間部：導航選單 (會捲動區塊) */}
// // // //       <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
// // // //         <h3 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">導航</h3>
// // // //         <nav className="space-y-2">
// // // //           {navItems.map((item, index) => {
// // // //             const isActive = pathname === item.href;
// // // //             return (
// // // //               <Link
// // // //                 key={index}
// // // //                 href={item.href}
// // // //                 className={`group flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
// // // //                   isActive
// // // //                     ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500 shadow-sm"
// // // //                     : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
// // // //                 }`}
// // // //               >
// // // //                 <item.icon className={`w-5 h-5 mr-3 transition-colors duration-200 ${
// // // //                   isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
// // // //                 }`} />
// // // //                 <span className="font-medium">{item.label}</span>
// // // //                 {isActive && (
// // // //                   <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
// // // //                 )}
// // // //               </Link>
// // // //             );
// // // //           })}
// // // //         </nav>
// // // //       </div>

// // // //       {/* 下半部：Footer (固定在最底) */}
// // // //       <div className="flex-shrink-0 pt-6 mt-auto border-t border-slate-100">
// // // //         <div className="text-[10px] text-slate-400 text-center">
// // // //           © 2026 Claudia Huang.<br/>All rights reserved.
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client"
// // // import Image from "next/image"
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import {
// // //   FaGithub,
// // //   FaLinkedin,
// // //   FaInstagram,
// // //   FaEnvelope,
// // //   FaHome,
// // //   FaUser,
// // //   FaHeart,
// // //   FaPalette,
// // //   FaCode
// // // } from "react-icons/fa";

// // // export default function Menu() {
// // //   const pathname = usePathname();

// // //   const navItems = [
// // //     { href: "/", label: "首頁", icon: FaHome },
// // //     { href: "/about", label: "關於我", icon: FaUser },
// // //     { href: "/hobby", label: "我的興趣", icon: FaHeart },
// // //     { href: "/design-project", label: "設計專案", icon: FaPalette },
// // //     { href: "/programming-project", label: "程式專案", icon: FaCode },
// // //   ];

// // //   const socialLinks = [
// // //     { href: "https://github.com/tyhuangg/", icon: FaGithub, label: "GitHub" },
// // //     { href: "https://www.linkedin.com/in/tingyunclaudiahuang/", icon: FaLinkedin, label: "LinkedIn" },
// // //     { href: "https://instagram.com/tyhuangg", icon: FaInstagram, label: "Instagram" },
// // //     { href: "mailto:claudia41.huang@gmail.com", icon: FaEnvelope, label: "Email" },
// // //   ];

// // //   return (
// // //     <div className="bg-gradient-to-b from-slate-50 to-white w-[320px] h-screen p-6 shadow-xl border-r border-slate-200 flex flex-col">
      
// // //       {/* 1. 固定區：Logo + 個人基本資料 */}
// // //       <div className="flex-shrink-0">
// // //         {/* <div className="mb-8">
// // //           <Link href="/" className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200">
// // //             Portfolio
// // //           </Link>
// // //         </div> */}

// // //         <div className="text-center mb-6">
// // //           <div className="relative mb-4">
// // //             <div className="w-16 h-16 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
// // //               <Image
// // //                 src="/cat.png"
// // //                 alt="Profile"
// // //                 width={16}
// // //                 height={16}
// // //                 className="w-full h-full object-cover"
// // //               />
// // //             </div>
// // //             <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // //           </div>

// // //           <h2 className="text-xl font-bold text-slate-800 mb-1">黃婷筠 Claudia Huang</h2>
// // //           <p className="text-sm text-slate-600 mb-2">政大資管五年級</p>
// // //           <p className="text-xs text-slate-500 leading-relaxed px-2 mb-4">
// // //             數據驅動的思考者，熱愛設計與程式的跨界創作者
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* 2. 捲動區：聯絡方式 + 導航選單都在這裡 */}
// // //       <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
        
// // //         {/* 聯絡方式：現在會跟著一起滑動了 */}
// // //         <div className="mb-8 pt-4 border-t border-slate-100">
// // //           <h3 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">聯絡方式</h3>
// // //           <div className="flex justify-start space-x-3">
// // //             {socialLinks.map((link, index) => (
// // //               <a
// // //                 key={index}
// // //                 href={link.href}
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="w-10 h-10 bg-white shadow-sm border border-slate-100 hover:bg-blue-50 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 hover:scale-110"
// // //                 title={link.label}
// // //               >
// // //                 <link.icon className="w-5 h-5" />
// // //               </a>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* 導航選單 */}
// // //         <div className="mb-6">
// // //           <h3 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">導航</h3>
// // //           <nav className="space-y-2">
// // //             {navItems.map((item, index) => {
// // //               const isActive = pathname === item.href;
// // //               return (
// // //                 <Link
// // //                   key={index}
// // //                   href={item.href}
// // //                   className={`group flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
// // //                     isActive
// // //                       ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
// // //                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
// // //                   }`}
// // //                 >
// // //                   <item.icon className={`w-5 h-5 mr-3 transition-colors duration-200 ${
// // //                     isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
// // //                   }`} />
// // //                   <span className="font-medium">{item.label}</span>
// // //                   {isActive && (
// // //                     <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
// // //                   )}
// // //                 </Link>
// // //               );
// // //             })}
// // //           </nav>
// // //         </div>
// // //       </div>

// // //       {/* 3. 固定區：Footer */}
// // //       <div className="flex-shrink-0 pt-6 mt-auto border-t border-slate-100">
// // //         <div className="text-[10px] text-slate-400 text-center">
// // //           © 2026 Claudia Huang. All rights reserved.
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client"
// // import Image from "next/image"
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import {
// //   FaGithub, FaLinkedin, FaInstagram, FaEnvelope,
// //   FaHome, FaUser, FaHeart, FaPalette, FaCode
// // } from "react-icons/fa";

// // export default function Menu() {
// //   const pathname = usePathname();

// //   const navItems = [
// //     { href: "/", label: "首頁", icon: FaHome },
// //     { href: "/about", label: "關於我", icon: FaUser },
// //     { href: "/hobby", label: "我的興趣", icon: FaHeart },
// //     { href: "/design-project", label: "設計專案", icon: FaPalette },
// //     { href: "/programming-project", label: "程式專案", icon: FaCode },
// //   ];

// //   const socialLinks = [
// //     { href: "https://github.com/tyhuangg/", icon: FaGithub, label: "GitHub" },
// //     { href: "https://www.linkedin.com/in/tingyunclaudiahuang/", icon: FaLinkedin, label: "LinkedIn" },
// //     { href: "https://instagram.com/tyhuangg", icon: FaInstagram, label: "Instagram" },
// //     { href: "mailto:claudia41.huang@gmail.com", icon: FaEnvelope, label: "Email" },
// //   ];

// //   return (
// //     <div className="bg-gradient-to-b from-slate-50 to-white w-[280px] h-screen p-5 shadow-xl border-r border-slate-200 flex flex-col font-sans">
      
// //       {/* 1. 固定區：個人基本資料 (移除綠點) */}
// //       <div className="flex-shrink-0">
// //         <div className="text-center mb-4 mt-2">
// //           <div className="relative mb-3">
// //             <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-blue-100 shadow-md">
// //               <Image
// //                 src="/profile.png"
// //                 alt="Profile"
// //                 width={80}
// //                 height={80}
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //             {/* 綠點已移除 */}
// //           </div>

// //           <h2 className="text-lg font-bold text-slate-800 mb-0.5">黃婷筠 Claudia Huang</h2>
// //           <p className="text-xs text-slate-600 mb-1">政大資管五年級</p>
// //           <p className="text-[10px] text-slate-400 leading-relaxed px-2 mb-4">
// //             數據驅動的思考者，<br />
// //             熱愛設計與程式的跨界創作者
// //           </p>
// //         </div>
// //       </div>

// //       {/* 2. 捲動區：聯絡方式 + 導航選單
// //       <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
        
// //         <div className="mb-6 pt-3 border-t border-slate-100">
// //           <h3 className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-widest">Contact</h3>
// //           <div className="flex justify-start space-x-2">
// //             {socialLinks.map((link, index) => (
// //               <a
// //                 key={index}
// //                 href={link.href}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="w-8 h-8 bg-white shadow-sm border border-slate-50 hover:bg-blue-50 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 transition-all duration-200"
// //               >
// //                 <link.icon className="w-4 h-4" />
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="mb-6">
// //           <h3 className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-widest">Menu</h3>
// //           <nav className="space-y-1">
// //             {navItems.map((item, index) => {
// //               const isActive = pathname === item.href;
// //               return (
// //                 <Link
// //                   key={index}
// //                   href={item.href}
// //                   className={`group flex items-center px-3 py-2.5 rounded-md transition-all duration-200 ${
// //                     isActive
// //                       ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
// //                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
// //                   }`}
// //                 >
// //                   <item.icon className={`w-4 h-4 mr-3 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
// //                   <span className="text-sm font-medium">{item.label}</span>
// //                 </Link>
// //               );
// //             })}
// //           </nav>
// //         </div>
// //       </div> */}
// //       <div className="flex-grow pr-2"> {/* 移除 overflow 和 scrollbar */}
        
// //         {/* 聯絡方式 */}
// //         <div className="mb-4 pt-3 border-t border-slate-100">
// //           <h3 className="text-[9px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Contact</h3>
// //           <div className="flex justify-start space-x-2">
// //             {socialLinks.map((link, index) => (
// //               <a key={index} href={link.href} className="w-7 h-7 bg-white shadow-sm border border-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 transition-all">
// //                 <link.icon className="w-3.5 h-3.5" />
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         {/* 導航選單 */}
// //         <div>
// //           <h3 className="text-[9px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Menu</h3>
// //           <nav className="space-y-0.5"> {/* 縮小行距 */}
// //             {navItems.map((item, index) => {
// //               const isActive = pathname === item.href;
// //               return (
// //                 <Link key={index} href={item.href} 
// //                   className={`flex items-center px-3 py-2 rounded-md transition-all ${
// //                     isActive ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-500 text-sm"
// //                   }`}>
// //                   <item.icon className={`w-3.5 h-3.5 mr-3 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
// //                   <span>{item.label}</span>
// //                 </Link>
// //               );
// //             })}
// //           </nav>
// //         </div>
// //       </div>
// //       {/* 3. 固定區：Footer */}
// //       <div className="flex-shrink-0 pt-4 mt-auto border-t border-slate-100">
// //         <div className="text-[10px] text-slate-400 text-center">
// //           © 2026 Claudia Huang
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client"
// import Image from "next/image"
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaHome, 
//   FaUserAstronaut, 
//   FaBriefcase, 
//   FaDatabase,
//   FaGithub, 
//   FaLinkedin, 
//   FaChartBar, // <-- 確保這行有加進來
//   FaCode,
//   FaInstagram, 
//   FaEnvelope
// } from "react-icons/fa";

// export default function Menu() {
//   const pathname = usePathname();

//   const navItems = [
//     { href: "/", label: "首頁 Home", icon: FaHome },
//     { href: "/about", label: "個人特質 About", icon: FaUserAstronaut },
//     { href: "/resume", label: "履歷經歷 Resume", icon: FaBriefcase },
//     //{ href: "/programming-project", label: "數據作品 Projects", icon: FaDatabase },
//     { href: "/projects/data", label: "數據分析 Data", icon: FaChartBar }, // 新增
//     { href: "/projects/web", label: "網頁開發 Web", icon: FaCode },     // 新增
//   ];

//   const socialLinks = [
//     { href: "https://github.com/tyhuangg/", icon: FaGithub },
//     { href: "https://www.linkedin.com/in/tingyunclaudiahuang/", icon: FaLinkedin },
//     { href: "https://instagram.com/ty.huangg", icon: FaInstagram },
//     { href: "mailto:claudia41.huang@gmail.com", icon: FaEnvelope },
//   ];

//   return (
//     <div className="w-[280px] h-full bg-gradient-to-b from-slate-50 to-white p-6 border-r border-slate-200 flex flex-col font-sans shadow-sm">
      
//       {/* 1. 個人品牌區 */}
//       <div className="flex-shrink-0 text-center mb-8 mt-2">
//         <div className="relative mb-4">
//           <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-blue-100 shadow-md">
//             <Image
//               src="/profile.png"
//               alt="Claudia Huang"
//               width={80}
//               height={80}
//               className="w-full h-full object-cover"
//               priority
//             />
//           </div>
//         </div>
//         <h2 className="text-xl font-bold text-slate-800 mb-1">黃婷筠 Claudia Huang</h2>
//         <p className="text-xs text-blue-600 font-bold mb-3 tracking-wide uppercase">Data Analyst Intern</p>
//         <p className="text-[10px] text-slate-400 leading-relaxed px-4">
//           數據驅動的思考者，<br />
//           熱愛設計與程式的跨界創作者
//         </p>
//       </div>

//       {/* 2. 導航選單區 */}
//       <div className="flex-grow">
//         <h3 className="text-[9px] font-bold text-slate-400 mb-4 uppercase tracking-[0.2em] border-t border-slate-100 pt-6">
//           Navigation
//         </h3>
//         <nav className="space-y-1.5">
//           {navItems.map((item, index) => {
//             const isActive = pathname === item.href;
//             return (
//               <Link key={index} href={item.href} 
//                 className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
//                   isActive 
//                     ? "bg-slate-900 text-white shadow-lg" 
//                     : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
//                 }`}>
//                 <item.icon className={`w-4 h-4 mr-4 ${isActive ? "text-blue-300" : "text-slate-400"}`} />
//                 <span className="text-sm font-semibold tracking-wide">{item.label}</span>
//               </Link>
//             );
//           })}
//         </nav>
//       </div>

//       {/* 3. 底部社群區 */}
//       <div className="flex-shrink-0 pt-6 border-t border-slate-100 mt-auto">
//         <div className="flex justify-center space-x-4 mb-4">
//           {socialLinks.map((link, index) => (
//             <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" 
//                className="text-slate-400 hover:text-blue-600 transition-colors">
//               <link.icon className="w-4 h-4" />
//             </a>
//           ))}
//         </div>
//         <div className="text-[9px] text-slate-300 text-center tracking-tighter">
//           © 2026 Claudia Huang. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome, 
  FaUserAstronaut, 
  FaBriefcase, 
  FaDatabase,
  FaGithub, 
  FaLinkedin, 
  FaChartBar, 
  FaCode,
  FaInstagram, 
  FaEnvelope
} from "react-icons/fa";

export default function Menu() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "首頁 Home", icon: FaHome },
    { href: "/about", label: "關於我 About", icon: FaUserAstronaut },
    { href: "/resume", label: "履歷經歷 Resume", icon: FaBriefcase },
    { href: "/projects/data", label: "數據分析 Data", icon: FaChartBar }, 
    { href: "/projects/web", label: "網頁開發 Web", icon: FaCode },     
  ];

  const socialLinks = [
    { href: "https://github.com/tyhuangg/", icon: FaGithub },
    { href: "https://www.linkedin.com/in/tingyunclaudiahuang/", icon: FaLinkedin },
    { href: "https://instagram.com/ty.huangg", icon: FaInstagram },
    { href: "mailto:claudia41.huang@gmail.com", icon: FaEnvelope },
  ];

  return (
    // 修改 1: 背景改為從深色模式對應的深色色階
    <div className="w-[280px] h-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-6 border-r border-slate-200 dark:border-slate-800 flex flex-col font-sans shadow-sm transition-colors duration-500">
      
      {/* 1. 個人品牌區 */}
      <div className="flex-shrink-0 text-center mb-8 mt-2">
        <div className="relative mb-4">
          {/* 修改 2: 圖片外圈在深色模式下稍微降低亮度對比 */}
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-blue-100 dark:ring-blue-900 shadow-md">
            <Image
              src="/profile.png"
              alt="Claudia Huang"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        {/* 修改 3: 文字顏色在深色模式反轉 */}
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">黃婷筠 Claudia Huang</h2>
        <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-3 tracking-wide uppercase">Data Analyst Intern</p>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed px-4">
          數據驅動的思考者，<br />
          熱愛設計與程式的跨界創作者
        </p>
      </div>

      {/* 2. 導航選單區 */}
      <div className="flex-grow">
        <h3 className="text-[9px] font-bold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-[0.2em] border-t border-slate-100 dark:border-slate-800 pt-6">
          Navigation
        </h3>
        <nav className="space-y-1.5">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link key={index} href={item.href} 
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    // 修改 4: 選取狀態在深色模式使用亮色背景，文字反轉
                    ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg" 
                    : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200"
                }`}>
                <item.icon className={`w-4 h-4 mr-4 ${isActive ? "text-blue-300 dark:text-blue-600" : "text-slate-400 dark:text-slate-600"}`} />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. 底部社群區 */}
      <div className="flex-shrink-0 pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 dark:text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="text-[9px] text-slate-300 dark:text-slate-700 text-center tracking-tighter">
          © 2026 Claudia Huang. All rights reserved.
        </div>
      </div>
    </div>
  );
}