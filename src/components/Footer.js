import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col py-11 bg-cyan-600">
      <div className="flex gap-0 items-start self-center mt-5 w-full max-w-[1109px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-1 justify-center items-center self-start ">
          <div className="max-w-full w-[729px]">
            <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-0 ">
              <div className="flex flex-col w-[46%] mr-40 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/097017b6221225ba91654ced9fdf666cd0fa2e4d4c5218e043ea12cb8afdf043?apiKey=8587097ed3a94b279b125430c3e068a6&"
                  className=" w-full  max-md:mt-10"
                />
              </div>
              <div className="flex gap-8">
              <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-lg font-medium text-red-50 whitespace-nowrap max-md:mt-10">
                  <div className="text-xl font-bold">About Us</div>
                  <div className="mt-3.5">FAQ</div>
                  <div className="mt-2.5">Terms of use</div>
                  <div className="mt-2.5">Team</div>
                  <div className="mt-2.5">Privacy policy</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-lg font-medium text-red-50 max-md:mt-10">
                  <div className="text-xl font-bold">Contact us</div>
                  <div className="mt-3.5">Around@gmail.com</div>
                  <div className="mt-2.5">+225548411213</div>
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 self-end mt-36 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e4c1f0ccb3b9a5d13a18a37cfba335a970ddd6c019a76d8655f5e83f6dcfe14?apiKey=8587097ed3a94b279b125430c3e068a6&"
            className="w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10667eb531249253de022798166883ba71bff957aa9fd064dce2efdd2b36651d?apiKey=8587097ed3a94b279b125430c3e068a6&"
            className="w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd3d0c777e3bad036a6014f6b58f16da0c080a2717c79f3b6889bdfdacd77d3?apiKey=8587097ed3a94b279b125430c3e068a6&"
            className="w-6 aspect-square"
          />
        </div>
      </div>
      <div className="mt-5 w-full bg-yellow-300 min-h-[1px] max-md:max-w-full" />
    </div>

  );
};

export default Footer;
