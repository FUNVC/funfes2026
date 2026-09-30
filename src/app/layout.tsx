import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const genInterfaceJP = localFont({
  src: [
    { path: "./fonts/GenInterfaceJPDisplay-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/GenInterfaceJPDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/GenInterfaceJPDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GenInterfaceJPDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/GenInterfaceJPDisplay-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/GenInterfaceJPDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-gen-interface-jp",
  display: "swap",
  // 1ファイル約2.6MBあるため、全ウェイトのpreloadは行わない
  preload: false,
});

export const metadata: Metadata = {
  // og:image などの絶対 URL の基準。basePath は自動で付かないため /2026 まで含める
  metadataBase: new URL("https://www.funvc.live/2026"),
  title: "FUTURE CLASTAR 2026",
  description: "FUTURE CLASTAR 2026 is virtual 3DCG live event of virtual singers such as Hatsune Miku presented by Future University Hakodate Vocaloid Fan Collective.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${genInterfaceJP.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
