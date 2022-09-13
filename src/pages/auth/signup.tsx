import type { NextPage } from "next"
import { useForm } from "react-hook-form"
import Container from "../../ui/Container"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

interface ISignupPageProps {}

const SignupPage: NextPage = ({}: ISignupPageProps) => {
  const [inputType, setInputType] = useState("password")
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      verifyEmail: "",
      password: ""
    }
  })

  // Register user
  const registerUser = async (data: any) => {
    try {
      const user = await axios.post("http://localhost:1337/api/auth/local/register", {
        username: data.username,
        email: data.email,
        password: data.password
      })
      console.log(user.data)
      router.push("/")
    } catch (error) {
      console.log(`there is an error message: => ${error}`)
    }
  }

  return (
    <>
      <main className="h-screen bg-green-300 flex items-center justify-center ">
        <Container>
          <div className="">
            <h1 className=" text-xl mb-5">Signup</h1>
            <form onSubmit={handleSubmit(registerUser)} className="bg-gray-200 p-7 flex flex-col gap-4 max-w-lg">
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username is required"
                    },
                    maxLength: {
                      value: 10,
                      message: "The username cannot be over 50 characters"
                    }
                  })}
                  type="text"
                  id="username"
                  className="h-12 w-full"
                />
                <p className="text-rose-700 mt-2">{errors.username?.message}</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "An email is required"
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please use a valid email address"
                    }
                  })}
                  type="text"
                  id="email"
                  className="h-12 w-full"
                />
                {/* <label htmlFor="email" className="mt-5">
                  Verify Email
                </label>
                <input
                  {...register("verifyEmail", {
                    required: {
                      value: true,
                      message: "An email is required"
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please use a valid email address"
                    }
                  })}
                  type="text"
                  id="verifyEmail"
                  className="h-12 w-full"
                />
                <p className="text-rose-700 mt-2">{errors.email?.message}</p> */}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <div className="flex items-center justify-between">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "A password is required"
                      },
                      minLength: { value: 6, message: "Your password must be at least 6 characters long" }
                    })}
                    type={inputType}
                    id="password"
                    className="h-12 w-full"
                  />
                  <div
                    onClick={() => {
                      setInputType(inputType === "password" ? "text" : "password")
                    }}
                    className="w-14 h-12 border-r-[1px] border-t-[1px] border-b-[1px] border-gray-700 bg-white flex justify-center items-center">
                    {inputType === "text" && <BsFillEyeFill size={18} />}
                    {inputType === "password" && <BsFillEyeSlashFill size={18} />}
                  </div>
                </div>
                <p className="text-rose-700 mt-2">{errors.password?.message}</p>
              </div>
              {/* Register Button */}
              <div>
                <button type="submit" className="bg-rose-500 px-10 py-3 text-white cursor-pointer">
                  Register
                </button>
              </div>
            </form>
          </div>
        </Container>
      </main>
    </>
  )
}

export default SignupPage
