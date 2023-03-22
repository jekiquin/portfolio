import { PROJECT_IMAGES } from './images';

export const PROJECTS = {
  title: 'My Projects',
  projects: [
    {
      name: 'Jerick Iquin Portfolio',
      role: 'Solo',
      date: 'January 2022',
      image: PROJECT_IMAGES.portfolio,
      description: 'Portfolio Project',
      stacks: ['React', 'SASS', 'TailwindCSS'],
      deployedURL: 'https://jerickiquin-2022.onrender.com',
      githubURL: 'https://github.com/jekiquin/portfolio',
    },
    {
      name: 'Virtual Arcade - Retro Games',
      role: 'Solo',
      date: 'October 2021',
      image: PROJECT_IMAGES.arcade,
      description:
        'Capstone Project. Library of retro games - Space Invaders, Pong, Breakout, and indie game - Jojo.',
      stacks: [
        'React',
        'React Router',
        'Axios',
        'SASS',
        'PhaserJs',
        'NodeJs',
        'Express',
      ],
      deployedURL: 'https://capstone-frontend-sz67.onrender.com',
      githubURL: 'https://github.com/jekiquin/jerick-iquin-capstone',
    },
    {
      name: "Jojo's Adventure",
      role: 'Pair Programmer',
      date: 'September 2021',
      image: PROJECT_IMAGES.jojo,
      description: 'Text based web game.',
      stacks: ['React', 'React Router', 'Axios', 'SASS', 'NodeJs', 'Express'],
      deployedURL: '',
      githubURL: 'https://github.com/jekiquin/team-ceci-jek.git',
    },
    {
      name: 'BrainFlix',
      role: 'Solo',
      date: 'September 2021',
      image: PROJECT_IMAGES.brainflix,
      description: 'Bootcamp project. Video website prototype.',
      stacks: ['React', 'React Router', 'Axios', 'SASS', 'NodeJs', 'Express'],
      deployedURL: '',
      githubURL: 'https://github.com/jekiquin/jerick-iquin-brainflix',
    },
    {
      name: 'Simple Multiple Countdown Timers',
      role: 'Solo',
      date: 'December 2021',
      image: PROJECT_IMAGES.timer,
      description:
        'Just a simple countdown timers implementing context and reducers',
      stacks: ['React', 'Sass', 'Tailwindcss'],
      deployedURL: '',
      githubURL: 'https://github.com/jekiquin/multicountdown',
    },
    {
      name: 'Simple Weather App',
      role: 'Solo',
      date: 'January 2022',
      image: PROJECT_IMAGES.weatherApp,
      description:
        'Simple weather app implementing redux toolkit, rtk query and custom built pagination',
      stacks: ['React', 'Sass', 'Tailwindcss', 'Redux Toolkit'],
      deployedURL: '',
      githubURL: 'https://github.com/jekiquin/simpleweatherapp',
    },
  ],
};
