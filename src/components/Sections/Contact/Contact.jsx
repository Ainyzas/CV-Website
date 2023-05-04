import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  StyledAiOutlineMail,
  StyledContactDiv,
  StyledContactForm,
  StyledContactOptions,
  StyledContactSection,
  StyledFaViber,
  StyledRiMessengerLine,
} from './Contact.styled';
import ContactOption from './ContactOption';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_esz0iyi', 'template_we78edf', form.current, '3sR4hAWSrntUksr0r').then(
      (result) => {
        e.target.reset();
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <StyledContactSection id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <StyledContactDiv className="container">
        <StyledContactOptions>
          <ContactOption
            icon={<StyledAiOutlineMail />}
            name="Email"
            address="puidokasainas@gmail.com"
            link="mailto:puidokasainas@gmail.com"
          />
          <ContactOption
            icon={<StyledRiMessengerLine />}
            name="Messenger"
            address="Ainas Puidokas"
            link="https://m.me/ainas.puidokas.5"
          />
          <ContactOption
            icon={<StyledFaViber />}
            name="Viber"
            address="Ainas Puidokas"
            link="viber://chat?number=865659783"
          />
        </StyledContactOptions>

        <StyledContactForm ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </StyledContactForm>
      </StyledContactDiv>
    </StyledContactSection>
  );
}
