import React from "react";

function InfoRegisterLayout({ children }: any) {
  return (
    <div className="flex items-center" dir="rtl">
      {/* right design fixed */}
      <div className="flex justify-center items-center w-1/2 bg-register-bg min-h-screen fixed top-0 right-0">
        <div className="backdrop-blur w-2/5  p-5 rounded-md ">
          <h2 className="mb-12 text-center font-bold text-lg">
            ثبت نام فروشنده
          </h2>
          <p className="">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراو
          </p>
          <p className="mt-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="px-8 py-2 rounded-md bg-gradient-to-r from-btn-start-color shadow-form-shadow to-btn-end-color">
              حقیقی
            </button>
            <button className="px-8 py-2 rounded-md bg-gradient-to-r from-btn-start-color shadow-form-shadow to-btn-end-color">
              حقوقی
            </button>
          </div>
        </div>
      </div>
      {/* leftInfo Register forms */}
      <div className="w-full flex flex-row-reverse ">
        <div className="w-1/2">{children}</div>
      </div>
    </div>
  );
}

export default InfoRegisterLayout;
