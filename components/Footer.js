import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <section className="w-full  bg-[url('/assets/img/bg_footer.jpg')] bg-cover bg-center mt-52">
      <div className="flex flex-col justify-center items-center text-white flex-wrap lg:mx-16 mx-8">
        <div className="max-w-[1200px] flex items-start text-white py-8 xl:gap-32 md:gap-16 gap-8 justify-between lg:flex-nowrap flex-wrap">
          <div className="lg:w-1/2">
            <div className="relative -mt-10">
              <Link href="/">
                <Image
                  className="-ml-6"
                  alt="logo"
                  src="/assets/img/logo_r.png"
                  width={200}
                  height={200}
                />
              </Link>
              <p className="text-base font-semibold mb-4 uppercase -mt-10">
                AMS ai media solution
              </p>
              <p className="text-sm font-normal">Welcome to AMS</p>
            </div>
          </div>
          <div className="lg:w-fit w-full flex flex-col gap-6">
            <div className="flex gap-6 flex-wrap lg:flex-nowrap">
              <div className="lg:w-1/4">
                <h1 className="text-base font-semibold uppercase">
                  Information
                </h1>
                <div className="mt-6 font-normal flex flex-col gap-2">
                  <Link href="/" className="capitalize">
                    About us
                  </Link>
                  <Link href="/" className="capitalize">
                    Product
                  </Link>
                </div>
              </div>
              <div className="lg:w-2/4">
                <h1 className="text-base font-semibold uppercase">Contact</h1>
                <div className="mt-6 font-normal flex flex-col gap-2">
                  <ul className="flex justify-between flex-col">
                    <li className="flex flex-start gap-2 my-2">
                      <Image
                        src="/assets/svg/phone_white.svg"
                        alt="address"
                        width={16}
                        height={16}
                      />{" "}
                      <Link href="callto:">+84 386902221</Link>
                    </li>
                    <li className="flex flex-start gap-2 my-2">
                      <Image
                        src="/assets/svg/email_white.svg"
                        alt="address"
                        width={16}
                        height={16}
                      />{" "}
                      <Link href="mailto:AMS.JSC@mediasolution.ai">
                        admin@mediasolution.ai
                      </Link>
                    </li>
                    <li className="flex flex-start gap-2">
                      <Image
                        src="/assets/svg/address_white.svg"
                        alt="address"
                        width={16}
                        height={16}
                      />{" "}
                      206/40, Dong Den, Ward 14, Tan Binh District, Ho Chi Minh
                      City
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/4">
                <h1 className="text-base font-semibold uppercase">
                  Connect AMS
                </h1>
                <div className="mt-6 flex gap-6 items-center">
                  <ul className="transform flex gap-4">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61551117176497&mibextid=ZbWKwL"
                        className="relative flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-all duration-500 group"
                      >
                        <svg
                          className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors duration-500"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
                        </svg>
                        <span className="absolute inset-0 rounded-full bg-yellow-400 scale-[0.9] group-hover:scale-110 group-hover:shadow-[0_0_30px_#ffee10] transition-transform duration-500 z-[-1]"></span>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="https://mediasolution.ai/"
                        className="relative flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-all duration-500 group"
                      >
                        <svg
                          className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors duration-500"
                          fill="currentColor"
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width={100}
                          height={100}
                        >
                          <path d="M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"></path>
                          <path d="M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"></path>
                          <path d="M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"></path>
                        </svg>
                        <span className="absolute inset-0 rounded-full bg-yellow-400 scale-[0.9] group-hover:scale-110 group-hover:shadow-[0_0_30px_#ffee10] transition-transform duration-500 z-[-1]"></span>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/company/ai-media-solution-jsc/"
                        className="relative flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-all duration-500 group"
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 1920 1920"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors duration-500"
                          width={100}
                          height={100}
                        >
                          <path
                            d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="absolute inset-0 rounded-full bg-yellow-400 scale-[0.9] group-hover:scale-110 group-hover:shadow-[0_0_30px_#ffee10] transition-transform duration-500 z-[-1]"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
