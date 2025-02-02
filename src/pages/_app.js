import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";


const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-pf",
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function App({ Component, pageProps }) {
  return (
  <main className={`${inter.variable} ${playfair.variable} overflow-x-hidden font-playfair bg-theme-gradient`}>
    <Component {...pageProps} />
  </main>
  )
}
