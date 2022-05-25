

const About = ({dark}) =>{
    return(
        <div className="about_container container" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--darkbg-color'}}>
            <div className="heading">
                <h1>About Me</h1>
            </div>
            <div className="course_card">
                    <div className="newton_card" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                        <h3>Full Stack Development (MERN)</h3>
                        <p>Newton School (e-learning platform bangaluru)</p>
                        <h4>Continue...</h4>
                    </div>
            </div>

            
            <div className="education_card">
                <div className="10th_card card" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                    <h3>10<sup>th</sup> HSC </h3>
                    <p>Name of school / collage</p>
                    <div className="yr_per">
                        <h4>2018-2019</h4>
                        <h4>46%</h4>
                    </div>
                </div>
                <div className="12th_card card" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                    <h3>10<sup>th</sup> HSC </h3>
                    <p>Name of school / collage</p>
                    <div className="yr_per">
                        <h4>2018-2019</h4>
                        <h4>46%</h4>
                    </div>
                </div>
                <div className="12th_card card" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                    <h3>Bachlor Of Computer Application </h3>
                    <p>Makhanlal Chaturvedi University</p>
                    <div className="yr_per">
                        <h4>2016-2019</h4>
                        <h4>59%</h4>
                    </div>
                </div>
                <div className="12th_card card" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                    <h3>Master Of Computer Application</h3>
                    <p>Rajiv Gandhi Prodyogiki Vishwavidyalaya</p>
                    <div className="yr_per">
                        <h4>2019-2021</h4>
                        <h4>8.6 CGPA</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;