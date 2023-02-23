import { projectData } from './data.js';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            <div className="small-icons">
                                <a href=""><i className="fa-brands fa-github"></i></a>
                                <a href=""><i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;