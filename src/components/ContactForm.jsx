import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rjzifrn",
        "template_xsbffju",
        e.target,
        "user_vciSLxoFailuPgBKUaz3i"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
    }, 4000);
  };

  return (
    <ContactFormContainer>
      <Form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Name*"
          required
          //   onChange={(e) => setNameInput(e.target.value)}
          //   placeholder={`${(<FontAwesomeIcon icon={faUser} />)} Name`}
        />

        <input
          type="email"
          name="user_email"
          className="input"
          placeholder="E-mail*"
          required
          //   onChange={(e) => setEmailInput(e.target.value)}
        />

        <textarea
          type="text"
          name="message"
          className="textarea"
          placeholder="Message*"
          required
          //   onChange={(e) => setMessageInput(e.target.value)}
        />
        <FormFooter>
          <div className="footer__left">
            <button type="submit" className="left__button">
              Send Message
            </button>
            {emailSent && <span className="left__sentText">Message Sent!</span>}
          </div>
          <div className="footer__right">
            <p className="right__text">* = required</p>
          </div>
        </FormFooter>
      </Form>
    </ContactFormContainer>
  );
};

const ContactFormContainer = styled.div`
  z-index: 1000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  .input,
  .textarea {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    padding: 0.4rem 0.7rem;

    background: ${({ theme }) => theme.colors.bgGrey};

    outline: none;
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.colors.bgDark};
    &::placeholder {
      color: ${({ theme }) => theme.colors.accent};
    }
    &:valid {
      border-right: 3px solid ${({ theme }) => theme.colors.secondary};
      border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
    }
    &:invalid {
      border-right: 3px solid ${({ theme }) => theme.colors.accent};
      border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
    }
    &:focus,
    &:active {
      outline: none;
      &:valid {
        border-right: 4px solid ${({ theme }) => theme.colors.secondary};
        border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
      }
      &:invalid {
        border-right: 4px solid ${({ theme }) => theme.colors.accent};
        border-bottom: 4px solid ${({ theme }) => theme.colors.accent};
      }
    }
  }
  .textarea {
    resize: none;
  }
`;

const FormFooter = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  display: flex;
  justify-content: space-between;

  margin-top: 0.5rem;
  .footer__left {
    .left__button {
      margin-right: 0.7rem;
      font-size: 1.4rem;

      color: ${({ theme }) => theme.colors.bgDark};
      background: ${({ theme }) => theme.colors.secondary};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 0.5rem;

      padding: 0.5rem 1rem;

      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        background: ${({ theme }) => theme.colors.bgDark};
      }
    }
    .left__sentText {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.2rem;
    }
  }
  .footer__right {
    .right__text {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1rem;
      opacity: 0.5;
    }
  }
`;

export default ContactForm;
