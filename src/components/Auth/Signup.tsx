"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = data;

  const registerUser = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("Something went wrong!");
    }

    axios
      .post("/api/register", {
        name,
        email,
        password,
      })
      .then(() => {
        toast.success("User has been registered");
        setData({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <>
      <section className="pt-17.5 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="wow fadeInUp rounded-3xl bg-white/[0.05]">
            <div className="flex">
              <div className="hidden lg:block w-full lg:w-1/2">
                <div className="relative py-20 pl-17.5 pr-22">
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>

                  <h2 className="max-w-[292px] font-bold text-white text-heading-4 mb-10">
                    Unlock the Power of Writing Tool
                  </h2>
                  <div className="relative aspect-[61/50] max-w-[427px] w-full">
                    <Image src="/images/signin/sigin.svg" alt="signin" fill />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="py-8 sm:py-20 pl-8 sm:pl-21 pr-8 sm:pr-20">
                  <div>
                    <button
                      aria-label="signup with google"
                      onClick={() => signIn("google")}
                      className="w-full flex items-center justify-center gap-3 p-3.5 font-medium text-white rounded-lg border border-white/[0.12] ease-in duration-300 hover:border-purple"
                    >
                      <svg
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_132_14584)">
                          <path
                            d="M22.5001 11.2438C22.5134 10.4876 22.4338 9.73256 22.2629 8.995H11.7246V13.0771H17.9105C17.7933 13.7929 17.5296 14.478 17.1352 15.0914C16.7409 15.7047 16.224 16.2335 15.6158 16.646L15.5942 16.7827L18.9264 19.3124L19.1571 19.335C21.2772 17.4161 22.4997 14.5926 22.4997 11.2438"
                            fill="#4285F4"
                          />
                          <path
                            d="M11.7245 22C14.755 22 17.2992 21.0221 19.1577 19.3355L15.6156 16.6464C14.6679 17.2944 13.3958 17.7467 11.7245 17.7467C10.3051 17.7385 8.92433 17.2926 7.77814 16.472C6.63195 15.6515 5.77851 14.4981 5.33892 13.1755L5.20737 13.1865L1.74255 15.8142L1.69727 15.9376C2.63043 17.7602 4.06252 19.2925 5.83341 20.3631C7.60429 21.4337 9.64416 22.0005 11.7249 22"
                            fill="#34A853"
                          />
                          <path
                            d="M5.33889 13.1755C5.09338 12.4753 4.96669 11.7404 4.96388 11C4.9684 10.2608 5.09041 9.52685 5.32552 8.8245L5.31927 8.67868L1.81196 6.00867L1.69724 6.06214C0.910039 7.5938 0.5 9.28491 0.5 10.9999C0.5 12.7148 0.910039 14.406 1.69724 15.9376L5.33889 13.1755Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M11.7249 4.25337C13.3333 4.22889 14.8888 4.8159 16.065 5.89121L19.2329 2.86003C17.2011 0.992106 14.5106 -0.0328008 11.7249 3.27798e-05C9.64418 -0.000452376 7.60433 0.566279 5.83345 1.63686C4.06256 2.70743 2.63046 4.23965 1.69727 6.06218L5.32684 8.82455C5.77077 7.50213 6.62703 6.34962 7.77491 5.5295C8.9228 4.70938 10.3044 4.26302 11.7249 4.25337Z"
                            fill="#EB4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_132_14584">
                            <rect
                              width="22"
                              height="22"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Sign in with Google
                    </button>

                    <button
                      aria-label="signup with github"
                      onClick={() => signIn("github")}
                      className="mt-4 w-full flex items-center justify-center gap-3 p-3.5 font-medium text-white rounded-lg border border-white/[0.12] ease-in duration-300 hover:border-purple"
                    >
                      <svg
                        fill="currentColor"
                        width="22"
                        height="22"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" />
                      </svg>
                      Sign in with Github
                    </button>

                    <span className="relative block font-medium text-sm text-center my-7.5">
                      <span className="block absolute left-0 top-1/2 h-[1px] w-22.5 bg-white/[0.12]"></span>
                      <span className="block absolute right-0 top-1/2 h-[1px] w-22.5 bg-white/[0.12]"></span>
                      Or sign up with email
                    </span>

                    <form onSubmit={registerUser}>
                      <div className="mb-4 relative">
                        <span className="absolute top-1/2 -translate-y-1/2 left-6">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00039 6.92499C9.85039 6.92499 11.3504 5.47499 11.3504 3.67499C11.3504 1.87499 9.85039 0.424988 8.00039 0.424988C6.15039 0.424988 4.65039 1.87499 4.65039 3.67499C4.65039 5.47499 6.15039 6.92499 8.00039 6.92499ZM8.00039 1.57499C9.22539 1.57499 10.2254 2.52499 10.2254 3.69999C10.2254 4.87499 9.22539 5.82499 8.00039 5.82499C6.77539 5.82499 5.77539 4.87499 5.77539 3.69999C5.77539 2.52499 6.77539 1.57499 8.00039 1.57499Z"
                              fill="#918EA0"
                            />
                            <path
                              d="M9.62539 8.04999H6.37539C3.70039 8.04999 1.52539 10.25 1.52539 12.925V15C1.52539 15.3 1.77539 15.575 2.10039 15.575C2.42539 15.575 2.67539 15.325 2.67539 15V12.925C2.67539 10.875 4.35039 9.17499 6.42539 9.17499H9.65039C11.7004 9.17499 13.4004 10.85 13.4004 12.925V15C13.4004 15.3 13.6504 15.575 13.9754 15.575C14.3004 15.575 14.5504 15.325 14.5504 15V12.925C14.4754 10.25 12.3004 8.04999 9.62539 8.04999Z"
                              fill="#918EA0"
                            />
                          </svg>
                        </span>
                        <input
                          type="name"
                          placeholder="Enter your name"
                          value={data.name}
                          onChange={(e) =>
                            setData({
                              ...data,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none text-white"
                        />
                      </div>

                      <div className="mb-4 relative">
                        <span className="absolute top-1/2 -translate-y-1/2 left-6">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z"
                              fill="#918EA0"
                            />
                          </svg>
                        </span>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={data.email}
                          onChange={(e) =>
                            setData({
                              ...data,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none text-white"
                        />
                      </div>

                      <div className="mb-5 relative">
                        <span className="absolute top-1/2 -translate-y-1/2 left-6">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_368_6544)">
                              <path
                                d="M14.0752 1.92501C13.1252 0.975012 11.8502 0.450012 10.5002 0.450012C9.1502 0.450012 7.8502 0.975012 6.9002 1.92501C5.6252 3.20001 5.1252 5.00001 5.5752 6.75001L0.725195 11.575C0.550195 11.75 0.450195 12 0.450195 12.275V14.6C0.450195 15.125 0.875195 15.575 1.4252 15.575H3.7502C4.0002 15.575 4.2502 15.475 4.4502 15.3L5.0252 14.725C5.2252 14.525 5.3502 14.225 5.3002 13.925V13.875L5.6002 13.85C6.0752 13.8 6.4252 13.45 6.4752 12.975L6.5002 12.675H6.5502C6.8252 12.7 7.1002 12.625 7.3252 12.425C7.5252 12.25 7.6502 11.975 7.6502 11.7V11.5H7.8252C8.0752 11.5 8.3252 11.4 8.5002 11.225L9.3252 10.425C11.0502 10.85 12.8502 10.375 14.1002 9.12501C16.0502 7.12501 16.0502 3.90001 14.0752 1.92501ZM13.2752 8.30001C12.2502 9.32501 10.7252 9.70001 9.3002 9.22501C9.1002 9.15001 8.8752 9.20001 8.7252 9.35001L7.7252 10.35H7.0502C6.7502 10.35 6.4752 10.6 6.4752 10.925V11.525L6.0252 11.475C5.8752 11.45 5.7252 11.5 5.6002 11.6C5.4752 11.7 5.4002 11.825 5.4002 11.975L5.3252 12.725L4.5752 12.8C4.4252 12.825 4.2752 12.9 4.2002 13C4.1002 13.125 4.0502 13.275 4.0752 13.425L4.1502 13.975L3.6752 14.45H1.5752V12.35L6.6002 7.32501C6.7502 7.17501 6.8002 6.95001 6.7252 6.75001C6.2752 5.32501 6.6252 3.80001 7.6752 2.75001C8.4252 2.00001 9.4002 1.60001 10.4752 1.60001C11.5252 1.60001 12.5252 2.00001 13.2752 2.75001C14.8252 4.25001 14.8252 6.75001 13.2752 8.30001Z"
                                fill="#918EA0"
                              />
                              <path
                                d="M11.3498 2.875C10.8748 2.875 10.4248 3.05 10.0748 3.4C9.3748 4.1 9.3748 5.225 10.0748 5.925C10.4248 6.275 10.8748 6.45 11.3498 6.45C11.8248 6.45 12.2748 6.275 12.6248 5.925C12.9748 5.575 13.1498 5.125 13.1498 4.65C13.1498 4.175 12.9748 3.725 12.6248 3.375C12.2748 3.05 11.8248 2.875 11.3498 2.875ZM11.8248 5.125C11.5748 5.375 11.1248 5.375 10.8748 5.125C10.6248 4.875 10.6248 4.45 10.8748 4.175C10.9998 4.05 11.1748 3.975 11.3498 3.975C11.5248 3.975 11.6998 4.05 11.8248 4.175C11.9498 4.3 12.0248 4.475 12.0248 4.65C12.0248 4.825 11.9498 5 11.8248 5.125Z"
                                fill="#918EA0"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_368_6544">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <input
                          type="password"
                          placeholder="Confirm password"
                          value={data.password}
                          onChange={(e) =>
                            setData({
                              ...data,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14.5 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none text-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="hero-button-gradient flex justify-center w-full rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                      >
                        Sign up with AI Tool
                      </button>
                    </form>

                    <p className="text-center font-medium text-white mt-5">
                      Already have an account?{" "}
                      <Link href="/auth/signin" className="text-purple">
                        Sign in Here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
