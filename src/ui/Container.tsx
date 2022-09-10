import { ReactNode } from "react"

interface IContainerProps {
  children: ReactNode
}

const Container = ({ children }: IContainerProps) => {
  return (
    <>
      <div className="container mx-auto px-3">{children}</div>
    </>
  )
}

export default Container
