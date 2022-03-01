import React from "react";
import styled from "styled-components";

const SkillCard = ({ skill }) => {
  const tags = skill.tags;
  return (
    <SkillCardContainer>
      <SkillCardLeft>
        <SkillHeader>
          <h4 className="header">{skill.name}</h4>
          <h6 className="subHeader">{skill.subName}</h6>
        </SkillHeader>
        <Divider>
          <span className="line"></span>
        </Divider>
        <SkillInfo>
          <p className="yearsUsed">Years Used: {skill.yearsUsed}</p>
          <p className="progressBarHeader">Skill Level: </p>
          <div className="progressBarContainer">
            <div
              className="progressBar"
              style={{ width: `${skill.skillLevel}%` }}
            >
              <span className="percent">{skill.skillLevel}%</span>
            </div>
          </div>
        </SkillInfo>
      </SkillCardLeft>
      <SkillCardRight>
        <TagsContainer>
          <h4 className="tags__header">Learn more about each skill below:</h4>
          <ul className="tags__list">
            {tags.map((tag) => (
              <li className="list__item">
                <a href={tag.url} className="item__link">
                  {tag.name}
                </a>
              </li>
            ))}
          </ul>
        </TagsContainer>
      </SkillCardRight>
    </SkillCardContainer>
  );
};

const SkillCardContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
  margin: 1rem 0.5rem;

  display: flex;
`;

const SkillCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);

  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.3rem 0 0 0.3rem;

  font-family: ${({ theme }) => theme.fonts.main};

  padding: 0.5rem;
`;

const SkillCardRight = styled.div`
  /* border: 2px solid red; */
  display: flex;
  width: 45%;
  /* padding-left: 1rem; */
  padding: 0.3rem 1rem;
`;

const TagsContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  .tags__header {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }
  .tags__list {
    .list__item {
      list-style: none;
      margin-bottom: 0.3rem;
      .item__link {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.secondary};
        transition: all 0.3s ease-in-out;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

const SkillHeader = styled.div`
  color: ${({ theme }) => theme.colors.bgDark};
  .header {
    font-size: 1.2rem;
  }
  .subHeader {
    font-size: 0.9rem;
    opacity: 0.75;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;

  margin: 0.2rem 0;
  .line {
    border: 1px solid ${({ theme }) => theme.colors.bgDark};
    border-radius: 1rem;
    width: 90%;
  }
`;

const SkillInfo = styled.div`
  .yearsUsed {
    margin-bottom: 0.4rem;
  }
  .progressBarHeader {
    margin-bottom: 0.2rem;
  }
  .progressBarContainer {
    border: 2px solid ${({ theme }) => theme.colors.bgDark};
    border-radius: 1rem;
    width: 95%;
    .progressBar {
      background: ${({ theme }) => theme.colors.bgDark};
      border-radius: 0.4rem 0 0 0.4rem;

      display: flex;
      justify-content: flex-end;
      padding-right: 0.5rem;
    }
    .percent {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default SkillCard;
