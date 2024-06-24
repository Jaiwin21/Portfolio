import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

// Define the socials array with valid paths
const socials = [
    { icon: <FaGithub />, path: "https://github.com/Jaiwin21" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/jaiwinprince" },
    { icon: <FaYoutube />, path: "https://youtube.com" }, // Update this with your actual YouTube link
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} passHref legacyBehavior>
                    <a className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Social;
