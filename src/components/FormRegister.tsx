import React from "react";
import InfoRegisterLayout from "./InfoRegisterLayout";

function FormRegister() {
  return (
    <InfoRegisterLayout>
      <div className=" w-full min-h-screen flex flex-col justify-center">
        {/* Title Form */}
        <div className="mt-4 ">
          <h2 className="font-bold text-lg">اطلاعات شخصی</h2>
        </div>
        {/* Form Input  */}
        <div className="flex items-center mt-9 w-full  gap-4">
          <div className="flex flex-col items-start w-2/5  gap-2">
            <h3>نام</h3>
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2 w-2/5 ">
            <h3>نام خانوادگی</h3>
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
        </div>
        {/* Form Input  */}
        <div className="flex items-center mt-9 w-full  gap-4">
          <div className="flex flex-col items-start w-2/5  gap-2">
            <h3>تاریخ تولد</h3>
            {/* Select Component */}
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2 w-2/5 ">
            <h3>جنسیت</h3>
            {/* select Component */}
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
        </div>
        {/* Form Input  */}
        <div className="flex items-center mt-9 w-full  gap-4">
          <div className="flex flex-col items-start w-2/5  gap-2">
            <h3>شماره شناسنامه</h3>
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2 w-2/5 ">
            <h3>کد ملی</h3>
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
        </div>
      </div>
      <div className=" w-full min-h-screen flex flex-col justify-center">
        {/* Title Form */}
        <div className="mt-4 ">
          <h2 className="font-bold text-lg">اطلاعات تماس</h2>
        </div>
        {/* Form Input  */}
        <div className="flex items-center mt-9 w-full  gap-4">
          <div className="flex flex-col items-start w-2/5  gap-2">
            <h3>استان</h3>
            {/* Select component */}
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2 w-2/5 ">
            <h3>شهر</h3>
            {/* Select Component */}
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
        </div>
        {/* Form Input  */}
        <div className="flex items-center mt-9 w-full  gap-4">
          <div className="flex flex-col items-start gap-2 w-full ">
            <h3>آدرس</h3>
            {/* select Component */}
            <textarea className="mt-2 h-12 w-4/5 rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "></textarea>
          </div>
        </div>
        {/* Form Input  */}
        <div className="flex items-center mt-9 w-full  gap-4">
          <div className="flex flex-col items-start w-2/5  gap-2">
            <h3>تلفن ثابت</h3>
            <input
              type="number"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2 w-2/5 ">
            <h3>تلفن همراه</h3>
            <input
              type="number"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
        </div>
      </div>
      <div className=" w-full min-h-screen flex flex-col justify-center">
        {/* Title Form */}
        <div className="mt-4 ">
          <h2 className="font-bold text-lg">اطلاعات تجاری</h2>
        </div>
        {/* Form Input  */}
        <div className="flex items-center mt-9 w-full  gap-4">
          <div className="flex flex-col items-start w-2/5  gap-2">
            <h3>نام فروشگاه</h3>

            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2 w-2/5 ">
            <h3>حوزه کاری</h3>
            {/* Select Component */}
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
        </div>
        {/* Form Input  */}
        <div className="flex items-center mt-9 w-full  gap-4">
          <div className="flex flex-col items-start w-4/5  gap-2">
            <h3>نام فروشگاه</h3>

            <input
              type="text"
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-zinc-100 shadow-invoice-form shadow-form-shadow px-4 outline-orange-500 "
            ></input>
          </div>
        </div>
      </div>
    </InfoRegisterLayout>
  );
}

export default FormRegister;
