// // app/layout.tsx 節錄
// import { ThemeProvider } from "@/component/ThemeProvider"

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning> {/* 注意這裡要加 suppressHydrationWarning */}
//       <body>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="light"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <ThemeToggle/>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Claudia's Resume",
//   description: "Claudia's personal resume",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">


//         <div className="flex h-full">

//           {/* 左邊 */}
          

//           {/* 右邊 */}
//           <div className="bg-gray-200 w-full h-full">

//             {children}

//           </div>

//         </div>

//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/component/ThemeProvider";
import { ThemeToggle } from "@/component/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claudia Huang | Data Analyst Portfolio",
  description: "Data-driven thinker and cross-disciplinary creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning 是必要的，因為 next-themes 會修改 html 的 class
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* ThemeToggle 放在這裡會出現在所有頁面的右上方 */}
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}