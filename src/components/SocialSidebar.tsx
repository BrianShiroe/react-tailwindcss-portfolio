// src/components/SocialSidebar.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

const SocialSidebar = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 right-6 flex-col items-center z-50 text-gray-600 dark:text-gray-300">
      {/* Top Line */}
      {/* <div className="w-[4px] h-10 bg-gray-400 dark:bg-gray-500 mb-2" /> */}

      {/* Icons + Connecting Lines */}
      <ul className="flex flex-col items-center space-y-0">
        <li className="flex flex-col items-center space-y-2">
          <a href="https://www.linkedin.com/in/brianshiroe" target="_blank" rel="noopener noreferrer" className="group">
            <div className="p-4 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 group-hover:bg-blue-500">
              <FaLinkedin className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-white" />
            </div>
          </a>
          <div className="w-[4px] h-6 bg-gray-400 dark:bg-gray-500" />
        </li>
        <li className="flex flex-col items-center space-y-2">
          <a href="https://github.com/brianshiroe" target="_blank" rel="noopener noreferrer" className="group">
            <div className="p-4 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 group-hover:bg-black dark:group-hover:bg-gray-200">
              <FaGithub className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black" />
            </div>
          </a>
          <div className="w-[4px] h-6 bg-gray-400 dark:bg-gray-500" />
        </li>
        <li className="flex flex-col items-center space-y-2">
          <a href="https://mun-development.itch.io" target="_blank" rel="noopener noreferrer" className="group">
            <div className="p-4 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 group-hover:bg-red-500">
              <SiItchdotio className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-white" />
            </div>
          </a>
          <div className="w-[4px] h-6 bg-gray-400 dark:bg-gray-500" />
        </li>
        <li>
          <a href="mailto:brianshiroe@gmail.com" className="group">
            <div className="p-4 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 group-hover:bg-yellow-500">
              <FaEnvelope className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black" />
            </div>
          </a>
        </li>
      </ul>

      {/* Bottom Line */}
      <div className="w-[4px] h-10 bg-gray-400 dark:bg-gray-500 mt-2" />
    </div>
  );
};

export default SocialSidebar;