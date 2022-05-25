import emailjs from '@emailjs/browser';
import { AiOutlineInstagram, AiFillGithub,AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrMail } from "react-icons/gr";

const Contact = ({dark}) =>{
    
    const sendEmail = (e) =>{
        e.preventDefault();
        
        emailjs.sendForm('service_62dy5uc',
        'template_308f006',
        e.target,
        'u4lMzCQxzLAGxsf6x').then((result) =>{
            // console.log(result);
        }, (error) =>{
            console.log(error.text);
        });

        document.getElementById('hideContact').style.display="none"
        document.getElementById('showThanks').style.display="block"
        setTimeout(() => {
            document.getElementById('showThanks').style.display="none"
        }, 2000);
        setTimeout(() => {
            document.getElementById('hideContact').style.display="flex"
        }, 2200);
        
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('mobile').value='';
        document.getElementById('message').value='';
    }
    return(
        <div className="contact_container container" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--darkbg-color)'}}>
            <div className="heading">
                <h1>Contact</h1>
            </div>

                <div className="contact_icon">

                <div className="icon">        
                    <li style={{boxShadow: 'unset'}}>
                        <a href='tel:9111363002' target="_blank" rel="noreferrer"><FiPhoneCall /></a>
                    </li>
                    <li style={{boxShadow: 'unset'}}>
                        <a href='https://github.com/Vishal911136' target="_blank" rel="noreferrer"><AiFillGithub /></a>
                    </li>
                    <li style={{boxShadow: 'unset'}}>
                        <a href='https://www.instagram.com/vishalsharma_9111/?hl=en' target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
                    </li>
                    <li style={{boxShadow: 'unset'}}>
                        <a href='https://www.linkedin.com/in/vishal-sharma-1b86581b4' target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
                    </li>
                    <li style={{boxShadow: 'unset'}}>
                        <a href="https://wa.me/9111363002" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a>
                    </li>
                </div>
                <br />
                </div>
                <h1 style={{textAlign: 'center',color: 'var(--second-color)'}}>Send <GrMail style={{fontSize: '24px',color: '#EA4335'}}/></h1>
            <div className="contact_form_center">
                {/* <h4>Contact</h4> */}
                <form action="" onSubmit={sendEmail}>

                    <div id='hideContact' className="contact_form" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                        <div className="input_field">
                            <label htmlFor="input">Name</label> <br />
                            <input type="text" name='name' required id='name'/>
                        </div>
                        <div className="input_field">
                            <label htmlFor="input">Mobile</label> <br />
                            <input type="text" name='mobile' required id='mobile'/>
                        </div>
                        <div className="input_field">
                            <label htmlFor="input">Email</label> <br />
                            <input type="email" name='email' required id='email'/>
                        </div>
                        <div className="input_field">
                            <label htmlFor="input">Message</label> <br />
                            <textarea type="text" name='message' required id='message'></textarea>
                        </div>
                        <div className="input_field">
                            <input type="submit" value="Sent Mail" />
                        </div>

                    </div>

                        <div className="thank_you" id='showThanks'>
                            <div className="center_thanks_items">
                                <h1>Thank You 😊</h1>
                            </div>
                        </div>

                </form>
            </div>
        </div>
    )
}

export default Contact;