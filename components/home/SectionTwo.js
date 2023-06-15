import Image from "next/image";

const SectionTwo = () => {
  return (
    <div className="mb-40 flex flex-col items-center px-5 md:px-10">
      <div className="max-w-lg mt-16 text-center space-y-2">
        <div className="text-2xl font-semibold md:text-3xl">Mock Interview Session</div>
        <p className="text-secondary2 text-base font-light md:text-lg">
          Here is an example of the interview process for a product design job
          role
        </p>
      </div>

      <div className="relative flex bg-secondary3 py-7 px-6 mt-16 rounded-md md:py-12 md:px-8">
       <Image
          src="/images/icon/play-icon.svg"
          width={112}
          height={112}
          alt="play icon"
          priority
          loading="eager"
          className="h-14 w-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:h-auto md:w-auto"
        />
       
        <div className="absolute -top-5 -left-5 bg-primary h-[32px] w-[32px]"></div>
        <div className="absolute top-0 left-0 bg-secondary h-[32px] w-[32px]"></div>
        <div> <Image
          src="/images/image1.svg"
          alt="image 1"
          height={580}
          width={600}
          priority
          loading="eager"
          className="w-auto h-auto mr-2"
        /></div>
      <div>  <Image
          src="/images/image2.svg"
          alt="image 2"
          height={580}
          width={600}
          priority
          loading="eager"
          className="w-auto h-auto ml-2"
        /></div>
       
      </div>
    </div>
  );
};

export default SectionTwo;
