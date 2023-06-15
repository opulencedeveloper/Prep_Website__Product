import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//import Portal from "../UI/Portal";
//import MobileNavigation from "./MobileNavigation";
//import handleWhatsAppClick from "@/helpers/whatsapp";

const linkContent = [
  { title: "Home", link: "/" },
  { title: "Book a Session", link: "/session" },
  { title: "Testimonial", link: "/testimonial" },
  { title: "FAQS", link: "/fags" },
];
let navAnimationClass = "";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };

  return (
    <nav className="w-full flex items-center bg-primary justify-between pt-auto py-4 px-5 md:px-10 md:pt-10">
      {/* <Portal>
        <div
          className={`fixed inset-y-0 -left-64 z-50 shadow-lg lg:hidden transform  ${
            isOpen ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <MobileNavigation />
        </div>
      </Portal> */}
      <Image
        src="/images/logo/logo.svg"
        priority
        loading="eager"
        width={67}
        height={42}
        className="h-auto w-auto"
      />

      <div className="hidden lg:flex items-center text-xl font-semibold space-x-14">
        <div className="text-secondary space-x-16">
          {" "}
          {linkContent.map((content, index) => {
           const activeStyle = activeLink === content.link ? "border-b-2 border-secondary " : "text-textcolor";
            return <Link
              //onClick={handleWhatsAppClick}
              key={index}
              className={`${activeStyle} py-2 px-1`}
              href={content.link}
            >
              {content.title}
            </Link>
          })}{" "}
        </div>{" "}
        {" "}
        <Link
          //  onClick={handleWhatsAppClick}
          href={""}
          className="px-5 py-3 text-secondary border border-1 border-secondary rounded-md"
        >
          <select className="bg-transparent pr-4"><option>Sign Up</option></select>
        </Link>
      </div>
      <button
        className={`${navAnimationClass} block hamburger lg:hidden focus:outline-none`}
        type="button"
        onClick={toggleDrawer}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </nav>
  );
};

export default MainNavigation;
