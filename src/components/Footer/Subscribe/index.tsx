import React, { useState } from "react";
import Email from "../../../assets/icons/Email";
import OriflameApp1 from "../../../assets/icons/OriflameApp1";
import OriflameApp2 from "../../../assets/icons/OriflameApp2";
import OriflameApp3 from "../../../assets/icons/OriflameApp3";
import DownArrow from "../../../assets/icons/DownArrow";

interface Section {
  title: string;
  items: string[];
}
const sections: Section[] = [
  {
    title: "SUPPORT/HELP",
    items: [
      "Support Center",
      "Contact Us",
      "Track your order",
      "Claims & returns",
    ],
  },
  {
    title: "CORPORATE INFO",
    items: [
      "Work With Us",
      "Reach Your Happy Place",
      "Sustainability",
      "Investor Relations",
      "Oriflame.com",
      "EU Declarations of Conformity",
    ],
  },
  {
    title: "DISCOVER",
    items: [
      "Join us as a Brand Partner",
      "Join us as a VIP Customer",
      "eCatalogue",
    ],
  },
];

const Subscribe: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleSection = (index: number) => {
    const newSet = new Set(openIndexes);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenIndexes(newSet);
  };

  return (
    <>
      <div className="w-full h-14 py-4 mt-10 flex items-center justify-center gap-3 text-gray-800 bg-emerald-200 px-4">
        <Email />
        <p className="text-16 font-600">
          Subscribe to our newsletter for inspiration & news!
        </p>
      </div>
      <div className="hidden xs:flex h-45 mb-7.5 py-7.5 bg-gray-100 justify-center items-center">
        <div className="flex w-[984px] h-40 justify-center items-center gap-8 ">
          {sections.map((section: Section) => (
            <div
              key={section.title}
              className="w-1/4 h-full flex flex-col items-center"
            >
              <div className="flex flex-col items-start gap-5">
                <p className="text-gray-800 font-700 text-14">
                  {section.title}
                </p>
                <div className="flex flex-col items-start justify-evenly gap-4">
                  {section.items.map((item: string) => (
                    <p key={item} className="text-14 font-400 text-gray-600">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="hidden lg:flex w-1/4 h-full flex-col items-center justify-start gap-2">
            <h5 className="text-25 text-gray-900 font-600">Our apps</h5>
            <div className="flex justify-between items-center gap-3">
              <OriflameApp1 width={32} height={32} />
              <OriflameApp2 width={32} height={32} />
              <OriflameApp3 width="32px" height="32px" />
            </div>
            <a
              href="..."
              className="underline font-600 text-gray-700 hover:text-emerald-600"
            >
              Read more & download
            </a>
          </div>
        </div>
      </div>
      <div className="flex xs:hidden px-4 mt-5">
        <div className="w-full mb-10 flex flex-col gap-3">
          {sections.map((section, index) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(index)}
                className="w-full text-left px-4 py-3 font-600 flex justify-between items-center text-gray-800 font-semibold"
                type="button"
              >
                {section.title}
                <DownArrow
                  className={`ml-2 transition-transform duration-300 ${
                    openIndexes.has(index) ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {openIndexes.has(index) && (
                <div className="px-6 py-3 bg-white flex flex-col gap-2">
                  {section.items.map((item) => (
                    <p key={item} className="text-gray-600 text-14 font-normal">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subscribe;
