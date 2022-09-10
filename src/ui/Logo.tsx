import Image from "next/image"
import MainLogo from "../assets/images/main-logo.png"

interface ILogoPropsMain {}

const LogoMain = ({}: ILogoPropsMain) => {
  return (
    <>
      <div>
        <Image src={MainLogo} alt="Main Bay logo" />
      </div>
    </>
  )
}

export default LogoMain
