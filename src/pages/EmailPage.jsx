import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import EmailPageNavBar from "../components/EmailPageNavBar";
import envelope from "../assets/contact-left.png";

const EmailPage = () => {
  return (
    <EmailPageContainer>
      <EmailPageNavBar />
      <EmailPageContent>
        <div className="content__image">
          <img src={envelope} alt="envelope" className="image" />
        </div>
        <div className="content__form">
          <ContentFormHeader>Get in touch...</ContentFormHeader>

          <ContactForm />
        </div>
      </EmailPageContent>
    </EmailPageContainer>
  );
};

const EmailPageContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgDark};
  min-height: 100vh;
`;

const EmailPageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
  .content__image {
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      width: 70%;
    }
  }
  .content__form {
    display: flex;
    flex-direction: column;

    padding: 0 7rem;
  }
  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);

    margin-top: 1rem;
  }
`;

const ContentFormHeader = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

export default EmailPage;
