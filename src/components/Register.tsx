import React from "react";
import LayotLoginRegister from "./LayotLoginRegister";

function Register() {
  // need regex
  return (
    <LayotLoginRegister title="ثبت نام">
      <div className="mt-4">
        <span className="text-lg font-bold">شماره تماس خود را وارد کنید</span>
        {/* input phonenumber */}
        <div className="mt-4 flex flex-col items-start gap-1">
          <span>شماره تماس</span>
          <input
            type="number"
            id="user-name"
            placeholder="شماره تماس خود را وارد کنید"
            // value={infoData.company}
            // onChange={(ev) => inputValuesHandler(ev)}
            className="mt-2 h-16 w-full rounded-3xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow  px-4 outline-orange-500 "
          />
        </div>
        {/* registe button */}
        <div className="mt-8">
          <button className="w-full rounded-2xl bg-gradient-to-r from-btn-start-color shadow-form-shadow to-btn-end-color py-3 text-center text-white disabled:bg-slate-600 flex justify-center items-center gap-2">
            <span className="font-bold text-xl">ارسال</span>
            {/* <SlLogin size={30} /> */}
          </button>
        </div>
      </div>
    </LayotLoginRegister>
  );
}

export default Register;
