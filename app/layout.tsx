// // // app/layout.tsx 節錄
// // import { ThemeProvider } from "@/component/ThemeProvider"

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <html lang="en" suppressHydrationWarning> {/* 注意這裡要加 suppressHydrationWarning */}
// //       <body>
// //         <ThemeProvider
// //           attribute="class"
// //           defaultTheme="light"
// //           enableSystem
// //           disableTransitionOnChange
// //         >
// //           <ThemeToggle/>
// //           {children}
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   )
// // }


// // import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css";


// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// // export const metadata: Metadata = {
// //   title: "Claudia's Resume",
// //   description: "Claudia's personal resume",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html
// //       lang="en"
// //       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
// //     >
// //       <body className="min-h-full flex flex-col">


// //         <div className="flex h-full">

// //           {/* 左邊 */}
          

// //           {/* 右邊 */}
// //           <div className="bg-gray-200 w-full h-full">

// //             {children}

// //           </div>

// //         </div>

// //       </body>
// //     </html>
// //   );
// // }


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/component/ThemeProvider";
// import { ThemeToggle } from "@/component/ThemeToggle";
// import { LanguageProvider } from "@/component/LanguageProvider"; // 確保路徑與檔案名稱正確

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Claudia Huang | Data Analyst Portfolio",
//   description: "Data-driven thinker and cross-disciplinary creator.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     // suppressHydrationWarning 是必要的，因為 next-themes 會修改 html 的 class
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="light"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <LanguageProvider>
//             <ThemeToggle /> {/* 我們稍後會在這裡加入語言切換按鈕 */}
//             {children}
//           </LanguageProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx 完整程式碼

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/component/ThemeProvider";
import { ThemeToggle } from "@/component/ThemeToggle";
import { LanguageProvider } from "@/component/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claudia Huang | Data Analyst Portfolio",
  description: "Data-driven thinker and cross-disciplinary creator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} h-full`}> {/* 加入 h-full 確保高度撐滿 */}
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            {/* 電腦版才顯示切換按鈕，避免擠壓手機版空間 */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            
            {/* 這裡直接放 children，不要包任何帶有 padding 或 margin 的 div */}
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}   
