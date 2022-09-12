import { useState } from "react"
import Container from "../ui/Container"
import Logo from "../ui/Logo"

interface INavbarProps {}

const Navbar = ({}: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSandwichButton = () => {
    setIsOpen((prev) => (prev = !prev))
  }
  return (
    <>
      <header className="bg-slate-300 relative">
        <Container>
          {/* Inner nav */}
          <div className="flex justify-between items-center">
            <a href="/">
              <Logo />
            </a>

            <button>Sell my boat</button>
            {/* Mobile Sandwich button | Visible up to 767px */}
            <div
              onClick={handleSandwichButton}
              className="flex flex-col items-center justify-center border-2 w-10 h-10 border-black md:hidden">
              <div
                className={`${
                  isOpen ? "rotate-45 translate-y-[10px]" : "rotate-0"
                } w-8 h-[2px] bg-black mb-2 transition-all`}></div>
              <div className={`${isOpen ? "hidden" : "block"} w-8 h-[2px] bg-black transition-all`}></div>
              <div
                className={`${
                  isOpen ? "-rotate-45 translate-y-[-8px]" : "rotate-0"
                } w-8 h-[2px] bg-black mt-2 transition-all`}></div>
            </div>
            {/* Mobile Sandwich button menu - absolutely positioned | Visible up to 767px*/}
            <div
              className={`${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } absolute left-0 top-[66px] bg-stone-400 transition-all duration-[400ms] w-2/3 md:hidden z-20`}>
              <nav className="text-center">
                <ul className="">
                  <li>
                    <a className="w-full block bg-stone-100 border-b-2 px-10 py-5" href="/auth/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="w-full block bg-stone-100 border-b-2 px-10 py-5" href="/auth/signup">
                      Signup
                    </a>
                  </li>
                  <li>
                    <a className="w-full block bg-stone-100 px-10 py-5" href="/">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Login/Signup Tablet and Over */}
            <div className="hidden md:flex md:gap-5 items-center">
              <a className="" href="/auth/login">
                Login
              </a>
              <a className="" href="/auth/signup">
                Signup
              </a>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}

export default Navbar
