import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiFillGithub,AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


const Home = () =>{
    return(
        <>
            <div className="home_container container" >
                <div className="home_content">
                    <h1>Hello I'm Vishal Sharma</h1>
                    <h3>I'm a Front End Developer</h3>
                </div>
                <div className="home_content_btn">
                    <Link className="btn" to='/contact'>Contact Me</Link>
                    <a className="btn" style={{marginLeft:'2rem'}} href='images/vishal_sharma.pdf' download="vishal sharma">Resume</a>
                </div>

                <div className="icon">
                    
                    <li>
                        <a href='tel:9111363002' target="_blank" rel="noreferrer"><FiPhoneCall /></a>
                    </li>
                    <li>
                        <a href='https://github.com/Vishal911136' target="_blank" rel="noreferrer"><AiFillGithub /></a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/vishalsharma_9111/?hl=en' target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/vishal-sharma-1b86581b4' target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
                    </li>
                    <li>
                        <a href="https://wa.me/9111363002" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Home;