import {
  faHashtag,
  faSun,
  faGamepad,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

import FCRuns from "../assets/fc-runs.png";
import Sunny from "../assets/sunny.png";
import RPS from "../assets/rps.png";
import Netflix from "../assets/netflix.png";

export const ProjectData = [
  {
    id: 1,
    name: "Forest City Runs",
    subName: "Social Media/Blogging Application",
    icon: faHashtag,
    description:
      "A full stack social media site for the Cleveland running community. The site features a user authentication system that allows members to have full social media capabilities, such as posting, liking, and more. The application automatically creates a profile page for each user to track interactions with the site and other users.",
    toolsUsed: [
      {
        toolName: "React",
        link: "https://reactjs.org/",
      },
      {
        toolName: "React-Router",
        link: "https://reactrouter.com/",
      },
      {
        toolName: "Sass",
        link: "https://sass-lang.com/",
      },
      {
        toolName: "Formik",
        link: "https://formik.org/",
      },
      {
        toolName: "Yup",
        link: "https://www.sanity.io/guides/form-validation-with-npm-yup",
      },
      {
        toolName: "Axios",
        link: "https://axios-http.com/docs/intro",
      },
      {
        toolName: "Express",
        link: "https://expressjs.com/",
      },
      {
        toolName: "MySQL",
        link: "https://www.mysql.com/",
      },
      {
        toolName: "Sequelize",
        link: "https://sequelize.org/",
      },
      {
        toolName: "bcrypt",
        link: "https://www.npmjs.com/package/bcrypt",
      },
    ],
    demoLink: "https://fcruns.netlify.app/",
    repoLink: "https://github.com/J-Whisler/forest-city-runs",
    projectImage: FCRuns,
    card: 2,
  },
  {
    id: 2,
    name: "Sunny",
    subName: "Weather Application",
    icon: faSun,
    description:
      "A basic weather application where users can enter the name of a city that they want to know the current weather for.  This app utilizes the Open Weather API to return users the current temperature and weather conditions in their desired city.  Sunny will also give users a blue background if it's currently cold in their seached city, and orange if it's warm.",
    toolsUsed: [
      {
        toolName: "HTML",
        link: "https://www.hostinger.com/tutorials/what-is-html",
      },
      {
        toolName: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS",
      },
      {
        toolName: "Javascript",
        link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
      },
      {
        toolName: "API's",
        link: "https://www.mulesoft.com/resources/api/what-is-an-api",
      },
      {
        toolName: "React-'State'-Management",
        link: "https://www.w3schools.com/react/react_state.asp",
      },
    ],
    demoLink: "https://sunnybyjw.netlify.app/",
    repoLink: "https://github.com/J-Whisler/weather-react",
    projectImage: Sunny,
    card: 1,
  },
  {
    id: 3,
    name: "Rock, Paper, Scissors",
    subName: "Simple Game",
    icon: faGamepad,
    description:
      "My version of the classic game 'Rock, Paper, Scissors'.  Users are able compete against a computer opponent to see how high of a score they can get!  Score 1 point every time you win, and lose 1 point every the computer wins.  Users can also reset the score at any time.",
    toolsUsed: [
      {
        toolName: "CSS-Transitions",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
      },
      {
        toolName: "Framer-Motion",
        link: "https://www.framer.com/motion/",
      },
      {
        toolName: "React-Hooks",
        link: "https://reactjs.org/docs/hooks-intro.html",
      },
    ],
    demoLink: "https://rpsbyjw.netlify.app/",
    repoLink: "https://github.com/J-Whisler/rockpaperscissors",
    projectImage: RPS,
    card: 2,
  },
  {
    id: 4,
    name: "Netflix",
    subName: "Landing Page Recreation",
    icon: faTv,
    description:
      "A recreation I did of the classic Netflix landing page.  It looks similar to what users would see when they enter the Netflix app for the first time, before they have created an account.  This landing page features a functioning tab section with different information about Netflix on each tab, similar to what you might see on the actual Netflix app.",
    toolsUsed: [
      {
        toolName: "Styled-Components",
        link: "https://styled-components.com/",
      },
      {
        toolName: "JSX",
        link: "https://reactjs.org/docs/introducing-jsx.html",
      },
      {
        toolName: "Conditional-Rendering",
        link: "https://reactjs.org/docs/conditional-rendering.html",
      },
      {
        toolName: "Javascript-Event-Listeners",
        link: "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
      },
    ],
    demoLink: "https://netflix-by-jw.herokuapp.com/",
    repoLink: "https://netflixbyjw.netlify.app/",
    projectImage: Netflix,
    card: 1,
  },
];
