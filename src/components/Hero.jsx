import Image from "next/image";

import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Joe 👋</h1>
                <p>
                    I'm a software developer based in Lagos, Nigeria. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
                </p>
                <div className="social-icons">
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
        </div>
    )
}

export default Hero;