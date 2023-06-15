import Image from "next/image";

const sectionThreeContent = [
  "How can i get started?",
  "Are there any restrictions?",
  "Can I get Jobs here?",
  "When is the next design challenge?",
  "When did the first edition take place?",
  "What can i do here?",
];

const SectionThree = () => {
  return (
    <div className="px-5 mb-28 md:px-10 ">
      <div className="max-w-lg mx-auto">
        <div className="text-primary font-semibold text-2xl mb-7 md:text-3xl">
          Frequently Asked Questions
        </div>
       <div className="space-y-5"> {sectionThreeContent.map((content, index) => (
          <div
            className="flex pb-3 justify-between items-center border-b border-secondary1"
            key={index}
          >
            <div className="text-base font-light md:text-lg">{content}</div>
            <Image
              src="images/icon/add-icon.svg"
              height={40}
              width={40}
              className="h-auto w-auto cursor-pointer"
            />
          </div>
        ))} </div>
      </div>
    </div>
  );
};
export default SectionThree;
