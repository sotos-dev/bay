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
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      make: "",
      condition: "all",
      type: "sail",
      length: "meters",
      minLength: "",
      maxLength: "",
      yearMadeMin: "",
      yearMadeMax: "",
      priceRange: ""
    }
  })

  const makeQuery = (data: any) => {
    console.log(data)
  }

  // These are for CSS only - to show which one is active---------------
  const [activeCondition, setActiveCondition] = useState<string>("all")
  const [activeType, setActiveType] = useState<string>("sail")

  return (
    <>
      <div className="relative py-20">
        {/* Absolutely positioned background image - optimized */}
        <div className="absolute left-0 top-0 right-0 bottom-0 z-0">
          <Image src={HeroImage} alt="hero image" layout="fill" objectFit="cover" />
        </div>

        <Container>
          <form onSubmit={handleSubmit(makeQuery)} className="relative z-10 bg-gray-300 max-w-sm p-7">
            {/* Make */}
            <div className="flex flex-col">
              <label htmlFor="">Make</label>
              <input {...register("make")} type="text" placeholder="Enter a boat make" />
            </div>
            {/* Condition */}
            <p className="mt-5 mb-1">Condition</p>
            <div className="flex justify-start items-center gap-5">
              <label
                onClick={() => setActiveCondition("all")}
                className={`${
                  activeCondition === "all" ? "bg-black text-white" : "bg-blue-100 text-black"
                }  px-7 py-2 cursor-pointer`}
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
                onClick={() => setActiveCondition("new")}
                className={`${
                  activeCondition === "new" ? "bg-black text-white" : "bg-blue-100 text-black"
                } px-7 py-2 cursor-pointer`}
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
                onClick={() => setActiveCondition("old")}
                className={`${
                  activeCondition === "old" ? "bg-black text-white" : "bg-blue-100 text-black"
                }  px-7 py-2 cursor-pointer`}
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
              <label
                onClick={() => setActiveType("sail")}
                className={`${
                  activeType === "sail" ? "bg-black text-white" : "bg-blue-100 text-black"
                } px-7 py-2 cursor-pointer`}
                htmlFor="sail">
                Sail
                <input {...register("type")} type="radio" value="sail" name="type" id="sail" className="hidden" />
              </label>
              <label
                onClick={() => setActiveType("motor")}
                className={`${
                  activeType === "motor" ? "bg-black text-white" : "bg-blue-100 text-black"
                } px-7 py-2 cursor-pointer`}
                htmlFor="motor">
                Motor
                <input {...register("type")} type="radio" value="motor" name="type" id="motor" className="hidden" />
              </label>
            </div>
            {/* Length */}
            <div className="flex justify-between items-center max-w-full mt-7">
              <div className="flex items-center gap-2">
                <p>Length</p>
                <input {...register("length")} type="radio" name="length" value="meters" id="meters" />
                <label htmlFor="meters">m</label>
                <input {...register("length")} type="radio" name="length" value="feet" id="feet" />
                <label htmlFor="feet">ft</label>
              </div>
              <div className="flex items-center gap-2">
                <input {...register("minLength")} className="w-16" type="text" />
                <span>to</span>
                <input {...register("maxLength")} className="w-16" type="text" />
              </div>
            </div>
            {/* Year Made */}
            <div className="flex justify-between items-center mt-7">
              <div>
                <p>Year made</p>
              </div>
              <div className="flex items-center gap-2">
                <input {...register("yearMadeMin")} className="w-16" type="text" />
                <span>to</span>
                <input {...register("yearMadeMax")} className="w-16" type="text" />
              </div>
            </div>
            {/* Price range selection */}
            <div className="flex justify-between items-center mt-7">
              <p>Price range</p>
              <select {...register("priceRange")} name="priceRange" id="price-range">
                <option value="">Select a value</option>
                <option value="1">$0 - $5000</option>
                <option value="2">$5001 - $10000</option>
                <option value="3">$10001 - $15000</option>
                <option value="4">$15001 - $20000</option>
                <option value="5">$20001 - $25000</option>
                <option value="6">$30001 - $35000</option>
                <option value="7">$35001+</option>
              </select>
            </div>
            {/* Search Button */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  reset()
                  setActiveCondition("all")
                  setActiveType("sail")
                }}
                type="button"
                className="mt-7 bg-gray-600 px-10 py-3 text-white">
                Reset
              </button>
              <button type="submit" className="mt-7 bg-pink-700 px-10 py-3 text-white">
                Search
              </button>
            </div>
          </form>
        </Container>
      </div>
    </>
  )
}

export default HeroSection
