import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
