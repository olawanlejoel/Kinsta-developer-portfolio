import { projectData } from './data.js';

import { FaFolderOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <FaFolderOpen className='folder-icon' />
                            <div className="small-icons">
                                <a href={project.gitHubLink}><AiFillGithub /></a>
                                <a href={project.liveLink}><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;