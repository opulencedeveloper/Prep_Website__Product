import Image from "next/image";
const icons = [
  "facebook-icon",
  "instagram-icon",
  "twitter-icon",
  "linkedin-icon",
];
const Footer = () => {
  return (
    <footer className="bg-primary pt-12 px-5 text-white font-light pb-10 text-base md:text-xl  md:px-10">
      <div className="flex flex-wrap justify-between space-y-8 lg:flex-row md:space-y-0">
        <div className="flex flex-col justify-betweenspace-y-5">
          {" "}
          <div className="space-y-5 mb-3">
              <Image
                src="images/logo/logo.svg"
                alt="logo"
                width={40}
                height={40}
                className="h-auto w-auto"
                loading="eager"
                priority
              />
              
            <div className="max-w-sm mb-10">
            This platform is were Developers of different levels meet, share ideas and apply to job openings
            </div>
          </div>
          
        </div>
          <div className="space-y-4 mr-5">
            <div className="">Services</div>
            <div>Career</div>
            <div>FAQs</div>
          </div>

          <div className="space-y-4 font-light mr-5">
            <div className="">About</div>
            <div>Blog</div>
            <div>Registration</div>
          </div>
          <div className="space-y-4 font-light mr-5">
            <div className="font-normal text-lg md:text-xl">Follow us on socila media</div>
          <div className="flex justify-end space-x-5">
            {icons.map((icon, index) => (
              <Image
                key={index}
                className="w-auto h-auto"
                loading="eager"
                alt={icon}
                height={28}
                width={28}
                src={`images/icon/${icon}.svg`}
              />
            ))}
          </div>
          </div></div>
      <div className="border-t border-secondary4 mt-20 text-sm font-normal text-lg text-center pt-5 pb-10">
        Property of <span className="font-semibold">opulencedeveloper.com</span>{" "}
        2023, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
