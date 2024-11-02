import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "Cats";

  return (
    <div
      className="noselect w-fit h-fit text-primary-200 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "SuperMario" }}
        >

          <m.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 bounce text-shadow"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>

          <m.span
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            1337{" "}
          </m.span>

        </m.h1>
      </LazyMotion>
    </div>
  );
};

export default HeroText;