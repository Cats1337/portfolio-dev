import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants"; // Importing the skills array
import { cobol } from '../portfolioAssets';

// Function to transform the language/skill name to match the Devicon image file naming convention
const transformCodeName = (codeName) => {
  return codeName.toLowerCase().replace(/[\*\+#]/g, (match) => {
    if (match === '*') return '';
    if (match === '#') return 'sharp';
    if (match === '+') return 'plus';
  });
};

// Function to calculate the time since a given year
const calculateTimeSince = (year) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const languageStartYear = parseInt(year);
  const languageStartMonth = 1;

  let yearsSince = currentYear - languageStartYear;
  let monthsSince = currentMonth - languageStartMonth;

  if (monthsSince < 0) {
    yearsSince -= 1;
    monthsSince += 12;
  }

  if (yearsSince > 1) {
    return `${yearsSince} years`;
  } else if (yearsSince === 1) {
    return "1 year";
  } else {
    return `${monthsSince} month${monthsSince !== 1 ? "s" : ""}`;
  }
};

// Function to get the correct image URL for each skill
const getSkillIconUrl = (skillId) => {
  const transformedCodeName = transformCodeName(skillId);

  if (transformedCodeName === 'mysql') {
    return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${transformedCodeName}/${transformedCodeName}-original-wordmark.svg`;
  } else if (transformedCodeName === 'cobol') {
    return cobol; // Custom image for COBOL
  } else {
    return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${transformedCodeName}/${transformedCodeName}-original.svg`;
  }
};

const SkillsCards = () => {
  return (
    <div className="flex flex-wrap justify-center" id="imageMaps">
      <LazyMotion features={domAnimation} strict>
        {/* Loop through the skills array */}
        {skills.map((skill, skillIndex) => (
          <m.div
            key={skillIndex}
            initial={{ scale: 0.8 }}
            // animate={{ rotate: [0, 2, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="card m-2 w-[300px] h-[300px] flex flex-col items-center bg-primary-500 rounded-xl border-4 border-primary-400 cursor-pointer"
          >
            <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col text-primary-200">
            <span className="capitalize">{skill.category}</span>
              <img
                className="h-[100px] w-[100px] p-2 object-contain drop-shadow-div"
                src={getSkillIconUrl(skill.id)} // Automatically get the correct icon
                alt={skill.title}
              />
              <span
                className="text-xl text-primary-200 p-1"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {skill.title}
              </span>
              <span
                className="text-center text-primary-500 rounded-xl text-sm p-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {calculateTimeSince(skill.year)}
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;
