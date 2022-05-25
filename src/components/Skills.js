const Skills = ({dark})=>{
    return(
        <div className="skills_container container" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--darkbg-color)'}}>
            <div className="heading">
                <h1>Skills</h1>
            </div>

            <div className="skills" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                <div className="side1">
                    <label>HTML</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'60%',backgroundColor: '#2091fe'}}></div>
                    </div>
                    <label>Css</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'80%',backgroundColor: 'green'}}></div>
                    </div>
                    <label>BOOTSTRAP</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'20%',backgroundColor: 'red'}}></div>
                    </div>
                    <label>TAILWIND CSS</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'20%',backgroundColor: 'red'}}></div>
                    </div>
                    {/* <label>Git </label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'20%',backgroundColor: 'red'}}></div>
                    </div>
                    <label>Git</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'20%',backgroundColor: 'red'}}></div>
                    </div> */}
                </div>
                <div className="side2">
                    <label>JAVA SCRIPT</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'60%',backgroundColor: '#2091fe'}}></div>
                    </div>
                    <label>REACT JS</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'70%',backgroundColor: '#2091fe'}}></div>
                    </div>
                    {/* <label>Next js</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'5%',backgroundColor: 'red'}}></div>
                    </div> */}
                    <label>PHP</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'30%',backgroundColor: 'orange'}}></div>
                    </div>
                    <label>JAVA</label><br />
                    <div className="html progress_container">
                        <div className="progress html" style={{width:'20%',backgroundColor: 'red'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills