import Image from "next/image";
import { Logo } from "@/components/common/Logo";

export default function Login() {
  return (
    <main className="w-full h-screen relative text-stone-400">
      {/* <div className="bg-[url(/boliviainte.png)] absolute inset-0 -z-10"></div> */}
      <div className=" h-full w-full bg-white z-30 lg:grid lg:grid-cols-2 gap-x-8">
        <div className=" bg-[url(/gradient-3d.png)]"></div>
        <div className="grid gap-y-6 relative items-center justify-center">
          <div className="absolute left-[35%] top-[2%]">
            <Logo color="text-stone-400" />
          </div>
          <form>
            <div className="flex flex-col space-y-3">
              <span className="text-5xl font-medium">Welcome Back</span>
              <p>Enter you Email and password to access your account</p>
            </div>
            <div className="grid gap-y-3 pt-3">
              <div className="grid gap-y-6">
                <label className="block">
                  <span className="block font-semibold text-sm text-stone-600">
                    Email
                  </span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                  />
                </label>
                <label className="block">
                  <span className="block font-semibold text-sm text-stone-600">
                    Password
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your password "
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 "
                  />
                </label>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <input type="checkbox" name="" id="" />
                    <span className="font-semibold text-sm text-stone-600">Remember me</span>
                  </div>
                  <div className="font-semibold text-sm text-stone-600">Forget Password?</div>
                </div>
                <button type="submit" className="bg-black p-3 rounded-xl">Sign in</button>
              </div>
            </div>
          </form>
          <div className="text-sm text-stone-400 absolute left-[35%] bottom-[2%]">
            Don't have an account?{" "}
            <span className="text-stone-700 text-base font-semibold">
              Sign up
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
