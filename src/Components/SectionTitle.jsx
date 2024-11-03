import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = ({ title, subtitle, toggleShowMore, isShowingMore }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-400 p-6 noselect flex"
      >
        <div className="sectionTitle">
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-7xl sm:text-8xl md:text-9xl"
          style={{ fontFamily: "Morganite Black" }}
        >
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>;
          })}
        </h2>
        </div>

        {/* Conditionally render the toggle button if isShowingMore and toggleShowMore are provided */}
        {typeof isShowingMore !== 'undefined' && typeof toggleShowMore === 'function' && (
          <div className="flex justify-center mt-4">
            <div className="flex items-center">
              <span className="text-left mr-[-1rem]">SHOW</span>
              <div>
                <label className="rocker w-28 h-16 text-base font-bold text-center inline-block overflow-hidden">
                  <input
                    type="checkbox"
                    checked={isShowingMore}
                    onChange={toggleShowMore}
                    className="opacity-0 w-0 h-0 absolute"
                  />
                  <span className="switch-left cursor-pointer absolute flex items-center justify-center h-10 w-12 select-none">
                    <span className="switch-text">MORE</span>
                  </span>
                  <span className="switch-right cursor-pointer absolute flex items-center justify-center h-10 w-12 select-none">
                    <span className="switch-text">LESS</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
