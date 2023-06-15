import Image from "next/image";

const commonUI = (
  <div className="absolute bottom-3 h-20 w-full">
    <div className="mx-2 h-full bg-secondary1 space-y-2 py-2 px-1.5 rounded-xl">
      <div className="h-3 bg-black bg-boxcolor3 rounded-md w-[90%]"></div>
      <div className="h-3 bg-black bg-boxcolor3 rounded-md w-[60%]"></div>
      <div className="flex justify-between h-5">
        <div className="h-3 bg-black bg-boxcolor3 rounded-md w-[40%]"></div>
        <Image
          src="/images/group-image.svg"
          alt="group images"
          priority
          loading="eager"
          width={64}
          height={32}
          className="h-auto w-auto"
        />
      </div>
    </div>
  </div>
);

const SectionOne = () => {
  return (
    <div className="relative -mt-1 flex flex-col px-5 pt-20 pb-16  bg-primary text-white md:pt-20 md:px-10 lg:flex-row">
      <div className="absolute right-2 z-0 bottom-72 md:bottom-[27rem]">
        <div className="bg-boxcolor2 h-[32px] w-[32px] "></div>
        <div className="bg-boxcolor1 h-[32px] w-[32px] -mt-4 ml-5"></div>
      </div>

      <div className="absolute bottom-10 left-0 md:bottom-24">
        <div className="bg-boxcolor1 h-[56px] w-[40px] "></div>
        <div className="bg-boxcolor2 h-[48px] w-[48px] -mt-7 ml-5"></div>
      </div>
      <div className="w-full pt-auto space-y-8 px-auto pb-10 md:pt-24 lg:w-1/2 lg:px-7">
        <div className="relative font-bold text-4xl leading-normal md:text-5xl">
          <h1 className="relative z-20">
            Prepare for job interviews on this platform
          </h1>
          <div className="h-[48px] w-[48px] bg-black z-10 absolute -top-5 -left-4 bg-secondary"></div>
        </div>
        <p className="font-light text-base md:text-xl">
          Search for the type of job you are applying to and you wouuld be
          linked to our experts n interview prep
        </p>
        <div className="shadow-4xl flex items-center rounded-sm bg-secondary1 p-2 max-w-xs md:p-3 lg:max-w-full ">
          <Image
            src="/images/icon/search-icon.svg"
            alt="search icon"
            loading="eager"
            priority
            height={32}
            width={32}
            className="h-8 w-8 p-1.5  lg:h-10 lg:w-10"
          />
          <input
            type="text"
            placeholder="Search for Jobs"
            className="placeholder-textcolor bg-transparent outline-none text-black text-sm pl-auto w-full md:pl-2 md:flex-1 lg:text-lg"
          />
          <button className="bg-secondary text-base text-semibold rounded-md py-2 px-3 lg:text-lg lg:py-3 lg:px-6">
            Search
          </button>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center pb-10 md:pb-auto lg:items-end lg:w-1/2">
        <div className="flex items-start space-x-8">
          <div className="relative shadow-3xl">
            {commonUI}
            <Image
              src="/images/hero-image1.png"
              priority
              loading="eager"
              alt="heroimage"
              width={277}
              height={382}
              className="h-auto w-auto rounded-[24px]"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/icon/idea-icon.svg"
              priority
              loading="eager"
              alt="idea icon"
              className="h-20 w-10 absolute top-3 right-4 md:h-auto md:w-auto md:top-8"
              height={67}
              width={56}
            />
            <Image
              src="/images/hero-image2.svg"
              priority
              loading="eager"
              alt="heroimage"
              width={276}
              height={296}
              className="h-auto w-auto pt-4"
            />
          </div>
        </div>
        <div className="flex items-start space-x-9">
          <div className="relative">
            <Image
              src="/images/icon/idea-icon.svg"
              priority
              loading="eager"
              alt="idea icon"
              className="h-20 w-10 absolute top-6 right-3 md:top-10 md:right-5 md:h-auto md:w-auto"
              height={67}
              width={56}
            />
            <Image
              src="/images/hero-image3.svg"
              priority
              loading="eager"
              alt="heroimage"
              height={291}
              width={254}
              className="h-auto w-auto pt-7"
            />
          </div>
          <div className="relative shadow-4xl">
            {commonUI}
            <Image
              src="/images/hero-image4.png"
              priority
              loading="eager"
              alt="heroimage"
              height={328}
              width={254}
              className="h-auto w-auto mt-2 rounded-[24px] md:-mt-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
