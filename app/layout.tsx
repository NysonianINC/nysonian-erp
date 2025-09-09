import Sidebar from "./layout/Sidebar"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
// import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        {/* Header */}
        <Header />
        {/* Sidebar */}
        <Sidebar />
        <Navbar  title="Shaheryar Malik"/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
