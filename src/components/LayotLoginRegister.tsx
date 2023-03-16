import React, { useEffect, useState } from "react";
interface LayoutProps {
  children: any;
  title: string;
}
function LayotLoginRegister({ children, title }: LayoutProps) {
  const [radioCheck, setradioCheck] = useState("customer");
  const [changeColors, setchangeColors] = useState({
    parentBg: "white",
    bgIcon: "",
  });
  // customer bg #3D3D3E
  useEffect(() => {
    switch (radioCheck) {
      case "customer":
        setchangeColors({
          ...changeColors,
          parentBg: "#efefef",
          bgIcon: "#ff692b",
        });
        break;
      case "seller":
        setchangeColors({
          ...changeColors,
          parentBg: "#3D3D3E",
          bgIcon: "#FFFFFF",
        });
        break;
    }
    // if(radioCheck === 'user'){

    // }
  }, [radioCheck]);

  return (
    <div
      className=" relative w-full h-full min-h-screen   flex justify-center items-center transition-all duration-700"
      dir="rtl"
      style={{ backgroundColor: changeColors.parentBg }}
    >
      <div className=" flex justify-center items-center">
        {/* Start Background design */}
        <div className="flex gap-12 absolute mt-12 justify-end ml-40 w-1/3 z-10">
          <div
            className="w-72 h-72 rounded-full p-5 bg-slate-400 flex justify-center items-center transition-all duration-700"
            style={{ backgroundColor: changeColors.bgIcon, opacity: "0.25" }}
          >
            <div
              className=" rounded-full w-44 h-44  transition-all duration-700"
              style={{ backgroundColor: changeColors.parentBg }}
            ></div>
          </div>
          <div
            className="w-20  rounded-5xl transition-all duration-700"
            style={{
              backgroundColor: changeColors.bgIcon,
              opacity: "0.25",
              height: "30rem",
            }}
          ></div>
        </div>
        {/* End Background design */}
        {/* Start form */}
        <div
          className=" absolute h-2/3 px-4 py-2  z-20 "
          style={{ width: "25%" }}
        >
          {/* Title */}
          <div className="mb-16">
            <h2 className="text-lg font-bold text-orange-700">{title}</h2>
          </div>
          {/* radio buttons */}
          <div id="radio-group " className="flex items-center gap-6">
            <div className="flex items-center gap-2 ">
              <input
                type="radio"
                name="user"
                defaultChecked
                onChange={(e) => setradioCheck(e.target.id)}
                id="customer"
                className="cursor-pointer"
              />
              <label htmlFor="customer" className="cursor-pointer font-bold">
                {" "}
                مشتری{" "}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="user"
                id="seller"
                className="cursor-pointer"
                onChange={(e) => setradioCheck(e.target.id)}
              />
              <label htmlFor="seller" className="cursor-pointer font-bold ">
                {" "}
                فروشنده{" "}
              </label>
            </div>
          </div>
          {/* */}
          {children}
        </div>
        {/* End form */}
      </div>
    </div>
  );
}

export default LayotLoginRegister;
