import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://github.com/cats1337" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="https://discord.com/users/123889840726081536" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faDiscord}
        />
      </a>
      {/* <a href="mailto:---@gmail.com" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faEnvelope}
        />
      </a> */}
      {/* <a href="https://www.linkedin.com/in/---" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a> */}
    </div>
  );
};

export default SocialLinks;
