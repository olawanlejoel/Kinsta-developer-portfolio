import Link from "next/link"

const navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Joel's Portfolio
                </Link>
            </div>
            <a href="" className="cta-btn">Resume</a>
        </div>
    )
}

export default navbar