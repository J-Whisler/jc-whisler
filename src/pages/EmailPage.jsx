import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import EmailPageNavBar from "../components/EmailPageNavBar";
import envelope from "../assets/contact-left.png";
import ParticleComponent from "../subComponents/ParticleComponent";

const EmailPage = () => {
  return (
    <EmailPageContainer>
      <ParticleComponent theme="theme2" />
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
  width: 100vw;
  padding-bottom: 2rem;
  overflow-x: hidden;
`;

const EmailPageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
  margin-top: 1rem;
  width: 100%;
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

    padding: 0 5rem;
    margin-right: 2rem;
    @media (max-width: 500px) {
      padding: 0 1.5rem;
    }
    @media (max-width: 350px) {
      padding: 0 0.5;
    }
  }
  @media (max-width: 1000px) {
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
