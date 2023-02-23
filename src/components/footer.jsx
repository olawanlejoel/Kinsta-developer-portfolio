import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} Joel's Portfolio
                </p>
                <div className="social_icons">
                    <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineTwitter />
                    </a>
                    <a
                        href="https://github.com/olawanlejoel"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olawanlejoel/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillLinkedin />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;