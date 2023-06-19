import Image from "next/image";

import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import handleWhatsAppClick from "@/helpers/whatsapp";

export default function Home() {
  return (
    <>
     <p
        className='fixed top-0 right0 z-20'
      >Site developed by opulencedeveloper</p>
    <Image
        src="/images/for-sale.png"
        alt="for sale"
        width={200}
        height={200}
        onClick={handleWhatsAppClick}
        className='h-auto w-auto fixed bottom-0 right-10 z-20 cursor-pointer'
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      
    </>
  );
}
