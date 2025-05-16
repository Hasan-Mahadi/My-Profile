import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Hasan-Mahadi" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/md-hasan-570b62334",
  },

  { icon: <FaTwitter />, path: "https://x.com/HASANMA58525411" },
  {
    icon: <FaDiscord />,
    path: "https://discord.com/users/1358392781080494101",
  },
  { icon: <FaYoutube />, path: "" },
];

const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
