import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8f72cbf3-44eb-44e8-869f-5be297a0beb5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact'>

      <div className='title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern}></img>
      </div>

      <div className='contact-section'>

        <div className='con_left'>
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

          <div className='con-details'>
            <div className='con-d'>
              <img src={mail_icon}></img><p>devyanshim6@gmail.com</p>
            </div>
            <div className='con-d'>
            <img src={call_icon}></img><p>*********</p>
            </div>
            <div className='con-d'>
            <img src={location_icon}></img><p>ghaziabad,Uttar Pradesh,India </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='con-right'>
          <label>Your Name</label>
          <input type='text' placeholder='enter your name' name='name'/>
          <label>Your email</label>
          <input type='email' placeholder='enter your email' name='email'/>
          <label>Write your message here</label>
          <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
          <button className='con-submit' type='submit'>Submit now</button>
        </form>


      </div>

    </div>
  )
}

export default Contact
