import { FaGithub, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Copyright from "./copyright";

const medsosLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/DyArdh",
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    url: "https://facebook.com/andiko.wardhana.3",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    url: "https://twitter.com/AndikoYoga5",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/in/dyardh",
  },
];

const Footer = () => {
  return (
    <div className="container max-w-full md:px-[40px] lg:px-[8%] mt-[50px] bg-[#37474F] py-6">
      <div className="flex flex-col items-center justify-center my-14">
        <div className="px-4 text-3xl font-semibold text-gray-200">
          <p>Follow me</p>
        </div>
        <ul className="flex gap-4 sm:gap-8 my-4">
          {medsosLinks.map((link) => (
            <a
              href={link.url}
              target="__blank"
              key={link.id}
              className="text-gray-400 hover:text-main-color  cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 shadow-sm p-4 duration-300"
            >
              <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
            </a>
          ))}
        </ul>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
