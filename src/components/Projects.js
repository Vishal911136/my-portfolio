import api from "./projectapi";


const Projects = ({dark}) =>{
    return(
        <div className="project_container container" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--darkbg-color)'}}>
            <div className="heading">
                <h1>Projects</h1>
            </div>

            <div className="projects">
                {
                    api.map((item) =>{
                        return(
                            <div className="project_card" key={item.id} style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                                <div className="img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="content">
                                    <h4>{item.name}</h4>

                                    <div className="button">
                                        <a className="btn" target="_blank" rel="noreferrer" href={item.github}>GitHUB</a>
                                        <a className="btn" target="_blank" rel="noreferrer" href={item.hostlink}>Host Link</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Projects;