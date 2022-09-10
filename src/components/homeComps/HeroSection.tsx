import Image from "next/image"
import { useState } from "react"
import HeroImage from "../../assets/images/hero-image.jpg"
import Container from "../../ui/Container"
import { useForm } from "react-hook-form"

interface IHeroSectionProps {}

const HeroSection = ({}: IHeroSectionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const makeQuery = (data: any) => {
    console.log(data)
  }

  const [activeCondition, setActiveCondition] = useState<string>("all")

  const handleCondition = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const item = e.currentTarget.firstElementChild as HTMLElement

    setActiveCondition(item.id)
  }
  const handleType = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const item = e.currentTarget.firstElementChild as HTMLElement

    setActiveCondition(item.id)
  }

  return (
    <>
      <div className="relative py-20">
        {/* Absolutely positioned background image - optimized */}
        <div className="absolute left-0 top-0 right-0 bottom-0 z-0">
          <Image src={HeroImage} alt="hero image" layout="fill" objectFit="cover" />
        </div>

        <Container>
          <form onSubmit={handleSubmit(makeQuery)} className="relative z-10 bg-gray-400 max-w-sm p-10">
            {/* Make */}
            <div className="flex flex-col">
              <label htmlFor="">Make</label>
              <input {...register("make")} type="text" />
            </div>
            {/* Condition */}
            <p className="mt-5 mb-1">Condition</p>
            <div className="flex justify-start items-center gap-5">
              <label
                onClick={handleCondition}
                className={`${activeCondition === "all" ? "bg-black text-white" : "bg-blue-100 text-black"}  px-7 py-2`}
                htmlFor="all">
                All
                <input
                  {...register("condition")}
                  type="radio"
                  value="all"
                  name="condition"
                  id="all"
                  className="hidden"
                />
              </label>
              <label
                onClick={handleCondition}
                className={`${activeCondition === "new" ? "bg-black text-white" : "bg-blue-100 text-black"} px-7 py-2`}
                htmlFor="new">
                New
                <input
                  {...register("condition")}
                  type="radio"
                  value="new"
                  name="condition"
                  id="new"
                  className="hidden"
                />
              </label>
              <label
                onClick={handleCondition}
                className={`${activeCondition === "old" ? "bg-black text-white" : "bg-blue-100 text-black"}  px-7 py-2`}
                htmlFor="old">
                Old
                <input
                  {...register("condition")}
                  type="radio"
                  value="old"
                  name="condition"
                  id="old"
                  className="hidden"
                />
              </label>
            </div>
            {/* Type */}
            <p className="mt-5 mb-1">Type</p>
            <div className="flex justify-start items-center gap-5">
              <label className="bg-blue-100 px-7 py-2" htmlFor="sail">
                Sail
                <input {...register("type")} type="radio" value="sail" name="type" id="sail" className="hidden" />
              </label>
              <label className="bg-blue-100 px-7 py-2" htmlFor="motor">
                Motor
                <input {...register("type")} type="radio" value="motor" name="type" id="motor" className="hidden" />
              </label>
            </div>
            <button type="submit" className="mt-7 bg-pink-700 px-10 py-3 text-white">
              Search
            </button>
          </form>
        </Container>
      </div>
    </>
  )
}

export default HeroSection
