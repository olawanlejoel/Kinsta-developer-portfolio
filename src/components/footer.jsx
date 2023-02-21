import React from 'react'

const footer = () => {
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
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/olawanlejoel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olawanlejoel/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default footer