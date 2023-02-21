import Image from "next/image"

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut atque autem dolor nisi voluptas iste, error ratione asperiores dignissimos libero sed quis harum nesciunt culpa dolores! Est dolore nobis ipsum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p>Aut atque autem dolor nisi voluptas iste, error ratione asperiores dignissimos libero sed quis harum nesciunt culpa dolores! Est dolore nobis ipsum!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut atque autem dolor nisi voluptas iste,</p>
                    <p> error ratione asperiores dignissimos libero sed quis harum nesciunt culpa dolores! Est dolore nobis ipsum!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut atque autem dolor nisi voluptas iste, error ratione asperiores dignissimos libero sed quis harum nesciunt culpa dolores! Est dolore nobis ipsum!</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} />
                </div>
            </div>
        </div>

    )
}

export default About