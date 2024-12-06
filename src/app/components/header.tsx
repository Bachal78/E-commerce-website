import React from "react";

function Header() {
  return (
    <header className="w-[1440px] h-[48px] bg-black ">
      <div className="w-[859px] h-[24px] top-[12px] left-[445px] gap-[231px]  flex justify-center items-center  ">

        <div className="w-[550px] h-[24px] gap-[8px] font-poppins flex justify-center items-center">
          <p className="w-[474px] h-[18px] font-poppins text-sm font-normal leading-[21px] text-left underline-offset-auto [text-decoration-skip-ink:none] text-[#ffffff]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <a href="#" className="w-[68px] h-[24px] text-sm font-semibold leading-6 text-center underline decoration-solid underline-offset-auto [text-decoration-skip-ink:none] text-[#fafafa] ">ShopNow</a>
        </div>

        <div className="w-[78px] h-[24px] gap-[5px]">
          <p className="w-[49px] h-[21px] font-poppins text-sm font-normal leading-[21px] text-left underline-offset-auto [text-decoration-skip-ink:none] text-[#fafafa]">English</p>
         
        </div>
      </div>
    </header>
  );
}

export default Header;
