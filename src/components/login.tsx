import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SlLogin } from "react-icons/sl";
import LayotLoginRegister from "./LayotLoginRegister";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <LayotLoginRegister title="ورود به پنل">
      <div className="mt-4">
        <span className="text-lg font-bold">
          برای ورود به پنل کاربری لطفا اطلاعات خود را وارد کنید
        </span>
      </div>
      {/* user input form */}
      <div className="mt-4 flex flex-col items-start gap-1">
        <span>نام کاربری</span>
        <input
          type="text"
          id="user-name"
          // value={infoData.company}
          // onChange={(ev) => inputValuesHandler(ev)}
          className="mt-2 h-16 w-full rounded-3xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow  px-4 outline-orange-500 "
        />
      </div>
      {/* password input form */}
      <div className="mt-4 flex flex-col items-start gap-1">
        <span>رمز عبور</span>
        <div className="relative w-full h-16">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            // value={infoData.company}
            // onChange={(ev) => inputValuesHandler(ev)}
            className="mt-2 h-full w-full rounded-3xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
          />
          <div className="absolute left-5 top-6 ">
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <AiOutlineEyeInvisible size={30} color="#3D3D3E" />
              ) : (
                <AiOutlineEye size={30} color="#3D3D3E" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* links */}
      <div className="flex justify-between items-center mt-4 ">
        <a href="#">
          <span className="font-bold text-base text-orange-500">
            فراموشی رمز ؟
          </span>
        </a>
        <a href="#">
          <span className="font-bold text-base text-orange-500">ثبت نام</span>
        </a>
      </div>
      <div className="mt-8">
        <button className="w-full rounded-2xl bg-gradient-to-r from-btn-start-color shadow-form-shadow to-btn-end-color py-3 text-center text-white disabled:bg-slate-600 flex justify-center items-center gap-2">
          <span className="font-bold text-xl">ورود</span>
          <SlLogin size={30} />
        </button>
      </div>
    </LayotLoginRegister>
  );
}

export default Login;
