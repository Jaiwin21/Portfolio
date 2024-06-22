import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

// Define the socials array with valid paths
const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaYoutube />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
            <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
            </Link>
            ))}
        </div>
    );
};

export default Social;


