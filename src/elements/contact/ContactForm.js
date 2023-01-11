import React , {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98jv9rq', 'template_ckft51c', form.current, 'RhmwyMPbyCzxTTitG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input 
                type="text"
                name="fullname"
                placeholder="Your Name"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="email"
                name="email"
                placeholder="Email Address"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                />
            </div>


            <div className="form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Subject"
                required
                />
            </div>

            <div className="form-group">
                <textarea 
                name="message"
                placeholder="Your Message"
                required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Submit Now</button>
            </div> 

            <div className="form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
