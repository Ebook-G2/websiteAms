import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
function Header() {
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [open, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const menu = [
    {
      src: "/assets/svg/home.svg",
      alt: "Home",
      name: "Home",
      url: "/",
    },
    {
      src: "/assets/svg/product-m.svg",
      alt: "Product",
      name: "Product",
      url: "/",
    },
    {
      src: "/assets/svg/news-m.svg",
      alt: "News",
      name: "News",
      url: "/news",
    },
    {
      src: "/assets/svg/about-m.svg",
      alt: "About us",
      name: "About Us",
      url: "/about",
    },
    {
      src: "/assets/svg/contact-m.svg",
      alt: "4",
      name: "Contact Us",
      url: "/contact",
    },
  ];
  return (
    <header className="flex max-sm:flex-col md:flex-col lg:px-2 lg:h-[70px] md:h-[70px] max-sm:h-[80px] h-fit z-50 shadow sticky top-0 bg-white font-roboto">
      <div className="flex justify-between pt-[1rem] pb-5 lg:px-2 w-full ">
        <div className="w-1/6 max-sm:w-full flex items-center -my-7">
          <Link href="/" className="ml-8">
            <img
              src="/assets/img/logo_r.png"
              width={100}
              alt="AMS Logo"
              className="block h-auto max-h-[100px] max-w-full "
            />
          </Link>
        </div>
        <div className="w-5/6 lg:w-4/5 max-sm:hidden flex text-xs xl:text-sm font-bold items-center justify-end px-2 mr-20">
          <section className="flex gap-3 lg:gap-6">
            {menu.map((menu, index) => (
              <Link href={menu.url} key={index}>
                <p className="py-1 border-b-2 border-transparent hover:border-[#144189] uppercase 2xl:text-xl xl:text-xl lg:text-xl md:text-base font-semibold">
                  {menu.name}
                </p>
              </Link>
            ))}
          </section>
        </div>
        <div className="max-sm:flex hidden w-4 h-4 my-auto mr-4">
          <img src="/assets/svg/mobile.svg" alt="icon" onClick={showDrawer} />
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-4/5 max-w-md h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <div className="w-6 h--6">
                <img src="/assets/svg/close.svg" alt="icon" onClick={onClose} />
              </div>
            </div>
            {menu.map((menu, index) => (
              <Link
                href={menu.url}
                className="link-item"
                onClick={onClose}
                key={index}
              >
                <div className="flex justify-start gap-2 items-center py-3 border-b-2 border-transparent hover:border-[#144189]">
                  <img src={menu.src} alt={menu.alt} className="w-6 h-6" />
                  <p className="text-base font-bold capitalize">{menu.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
