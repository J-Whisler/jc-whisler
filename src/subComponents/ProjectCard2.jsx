import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard2 = ({ project }) => {
  const tools = project.toolsUsed;

  return (
    <ProjectCardContainer
      className={project.card === 1 ? "card1 card" : "card2 card"}
    >
      <ProjectImage
        className={
          project.card === 1
            ? "imageContainer1 imageContainer"
            : "imageContainer2 imageContainer"
        }
      >
        <img src={project.projectImage} className="image" alt="" />
      </ProjectImage>
      <ProjectInfo>
        <InfoHeader>
          <div className="header-top">
            <h2 className="info-name">{project.name}</h2>
            <FontAwesomeIcon icon={project.icon} className="icon" />
          </div>
          <div className="header-bottom">
            <h6 className="info-subName">{project.subName}</h6>
          </div>
        </InfoHeader>
        <InfoDescription>
          <div className="description">
            <p className="description__text">{project.description}</p>
          </div>
          <div className="tools">
            <p className="tools__header">Tools Used: </p>
            <ul className="tools__toolList">
              {tools.map((tool) => (
                <li className="toolList__listItem">
                  <a
                    href={tool.link}
                    className="listItem__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="link__toolName">{tool.toolName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </InfoDescription>
        <CardButtons>
          <a
            className="demoButton cardButton"
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="demoButton__text text">
              View Project
              <FontAwesomeIcon icon={faEye} className="icon" />
            </h4>
          </a>
          <a
            className="repoButton cardButton"
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="repoButton__text text">
              View Github Repo
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </h4>
          </a>
        </CardButtons>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  border: 2px solid red;
  margin-bottom: 4rem;
  display: flex;
  padding: 0 1rem;
  &.card1 {
    flex-direction: row-reverse;
  }
  &.card2 {
    flex-direction: row;
  }
  @media (max-width: 820px) {
    &.card1 {
      flex-direction: column;
      align-items: flex-start;
    }
    &.card2 {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const ProjectImage = styled.div`
  /* border: 2px solid blue; */
  width: fit-content;
  &.imageContainer1 {
    margin-left: 4rem;
  }
  &.imageContainer2 {
    margin-right: 4rem;
  }
  .image {
    width: 22rem;
    height: 18rem;
    object-fit: fill;

    border-radius: 0.3rem;
  }
  @media (max-width: 820px) {
    &.imageContainer1 {
      margin-left: 0;
    }
    &.imageContainer2 {
      margin-right: 0;
    }
  }
`;

const ProjectInfo = styled.div`
  /* border: 2px solid green; */
  font-family: ${({ theme }) => theme.fonts.main};
  width: 30rem;
  /* width: fit-content; */
  display: flex;
  flex-direction: column;
`;

const InfoHeader = styled.div`
  margin-bottom: 0.3rem;
  .header-top {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    color: ${({ theme }) => theme.colors.secondary};
    .info-name {
      font-size: 1.7rem;
    }
    .icon {
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-right: 2rem;
      padding: 0.2rem;

      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.bgDark};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 0.5rem;

      /* filter: drop-shadow(5px 5px 2px ${({ theme }) =>
        theme.colors.secondary}); */
    }
  }
  .header-bottom {
    .info-subName {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 1.1rem;

      /* border: 2px solid blue; */
    }
  }
`;

const InfoDescription = styled.div`
  margin-bottom: 0.15rem;
  .description {
    .description__text {
      color: ${({ theme }) => theme.colors.text};
    }
  }
  .tools {
    display: flex;
    flex-direction: column;
    .tools__header {
      color: ${({ theme }) => theme.colors.accent};
    }
    .tools__toolList {
      display: flex;
      flex-wrap: wrap;
      padding-left: 1rem;
      .toolList__listItem {
        /* list-style: none; */
        color: ${({ theme }) => theme.colors.secondary};

        margin-right: 1.8rem;
        .listItem__link {
          color: ${({ theme }) => theme.colors.secondary};
          .link__toolName {
          }
        }
      }
    }
  }
`;

const CardButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cardButton {
    display: flex;
    justify-content: center;

    padding: 0.3rem 0.5rem;

    background: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.bgDark};
    font-size: 1.1rem;
    border-radius: 0.2rem;

    transition: all 0.3s ease-in-out;
    .text {
      .icon {
        margin-left: 0.5rem;
      }
    }
    &:hover {
      background: ${({ theme }) => theme.colors.bgDark};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.secondary};

      transform: scale(0.99);
    }
  }
  .demoButton {
    margin-right: 1rem;
    margin-top: 0.5rem;

    /* width: 10rem; */
  }
  .repoButton {
    margin-top: 0.5rem;

    /* width: 13rem; */
  }
`;

export default ProjectCard2;
