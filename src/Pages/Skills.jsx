import { useState, useEffect } from "react";
import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";
import { skills } from "../Constants/constants";

const Skills = () => {
  const [shuffledSkills, setShuffledSkills] = useState([]); // State to hold shuffled skills
  const [showMore, setShowMore] = useState(false); // State to track if additional skills are shown

  // Shuffle skills once on initial load
  useEffect(() => {
    setShuffledSkills([...skills].sort(() => Math.random() - 0.5));
  }, []);

  const handleShowMore = () => {
    setShowMore((prev) => !prev); // Toggle the show more state
  };

  // Get the skills for the marquee row and the static skills
  const marqueeSkills = shuffledSkills.slice(0, 5); // First 5 skills for the marquee row
  const additionalSkills = shuffledSkills.slice(5); // Remaining skills for static display

  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center pb-12">
      <div className="w-full min-h-[190px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle 
            title="SKILLS" 
            subtitle="WHAT I DO" 
            toggleShowMore={handleShowMore} 
            isShowingMore={showMore}
          />
        </div>

        <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full">
          <div className="relative">
            {/* Always moving marquee row */}
            <MarqueeCards direction="left">
              <SkillsCards skills={marqueeSkills} />
            </MarqueeCards>

            {/* Static display of additional skills with smooth reveal */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col items-center mt-4">
                <SkillsCards skills={additionalSkills} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
