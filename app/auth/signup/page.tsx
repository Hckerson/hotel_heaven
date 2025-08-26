import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { UserRound, Mail, KeyRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Signup page",
};
import { Logo } from "@/components/common/Logo";

export default function Signup() {
  return (
    <main className="w-full h-screen relative text-stone-400">
      {/* <div className="bg-[url(/boliviainte.png)] absolute inset-0 -z-10"></div> */}
      <div className=" h-full w-full bg-white z-30 lg:grid lg:grid-cols-2 gap-x-8">
        <div className="bg-[url(/gradient-3d.png)] lg:block hidden"></div>
        <div className="grid gap-y-6 p-3 relative items-center  h-full justify-center">
          <div className="absolute lg:left-[35%]   top-[2%]">
            <Logo color="text-stone-400" />
          </div>
          <form className="lg:min-w-[320px] max-w-[350px]">
            <div className="flex flex-col space-y-3 text-center">
              <span className="text-5xl font-medium">Sign Up</span>
              <p>Use proper information to continue</p>
            </div>
            <div className="grid gap-y-3 pt-3">
              <div className="grid gap-y-6">
                <div className="flex space-x-2 items-center shadow-sm border border-white p-3 bg-transparent rounded-xl">
                  <span>
                    <UserRound />
                  </span>
                  <input
                    type="text"
                    placeholder="Fullname"
                    className="mt-1 block w-full focus:outline-none h-full  placeholder-stone-400 placeholder:text-base"
                  />
                </div>
                <div className="flex space-x-2 items-center shadow-sm border border-white p-3 bg-transparent rounded-xl">
                  <span>
                    <Mail />
                  </span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="mt-1 block w-full focus:outline-none h-full  placeholder-stone-400 placeholder:text-base"
                  />
                </div>
                <div className="flex space-x-2 items-center shadow-sm border border-white p-3 bg-transparent rounded-xl">
                  <span>
                    <KeyRound />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your password "
                    className="mt-1 block w-full focus:outline-none h-full  placeholder-stone-400 placeholder:text-base "
                  />
                </div>
              </div>
              <span className="mt-4 text-center text-sm px-4">
                By signing up, you are agreeing to our{" "}
                <Link
                  href={`/about/terms`}
                  className="text-stone-600 font-medium"
                >
                  Terms and condition
                </Link>{" "}
                and{" "}
                <Link
                  href={`about/policy`}
                  className="text-stone-600 font-medium"
                >
                  Private policy
                </Link>
              </span>
              <div className="flex flex-col space-y-4 pt-6">
                <button
                  type="submit"
                  className="bg-black p-3 text-lg font-semibold rounded-xl"
                >
                  Create an account
                </button>
              </div>
            </div>
          </form>

          <div className="text-sm text-stone-400 absolute flex justify-center w-full bottom-[2%]">
            Already have an account?{" "}
            <Link href={`/auth/login`}>
              <span className="text-stone-700 text-base font-semibold">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
