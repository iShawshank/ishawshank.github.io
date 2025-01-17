export const resumeData = {
  whoAmI:
    'Before diving into the world of technology, my career journey led me through diverse paths. I started as a PGA Apprentice, gaining valuable insights from the golf industry, and later transitioned to the finance sector, where I served as a Bank Branch Operations Manager. These experiences collectively amount to over 15 years of dedicated customer service and management expertise.',
  whoAmI2:
    "Fast forward to the present, I've had the privilege of contributing to a wide range of projects, honing my skills and expanding my knowledge. My projects have included developing content management systems for government websites, crafting responsive video players for city council meetings, and creating internal portals to streamline various aspects of government agenda management and video recording.",
  whoAmI3:
    "In my current role, I've taken on the challenge of managing a backend GraphQL API utilized by a mobile app that supports millions of users annually. Simultaneously, I've built a web platform from the ground up, which now boasts over 200,000 monthly active users and continues to grow.",
  outsideOfWork:
    "Beyond my professional pursuits, I treasure my time spent with my wife and two children. When I'm not working, you can often find me refining my golf game in my home simulator or on the golf course. I'm also an unwavering sports enthusiast, fervently supporting my hometown teams. In addition to my passion for sports, I'm an avid video game enthusiast, with a special love for immersive virtual worlds and gaming adventures.",
  experience: [
    {
      id: 6,
      timeLine: '2024 - PRESENT',
      company: 'Anywhere Real Estate',
      companyLink: 'https://anywhere.re/',
      title: 'Senior Full Stack Engineer',
      description: [
        'Designed and implemented a custom AI chatbot from scratch, integrating it seamlessly into existing real estate web products.',
        'Conceptualized, designed, and developed a scalable, multi-tenant platform to consolidate and streamline multiple real estate websites, enhancing functionality and operational efficiency.',
      ],
      skills: [
        'React',
        'NextJS',
        'Material UI',
        'CMS',
        'Directus',
        'GraphQL',
        'AWS',
        'CI/CD',
        'TypeScript',
        'Docker',
        'Figma',
      ],
    },
    {
      id: 5,
      timeLine: '2021 - 2024',
      company: 'Ibotta Inc',
      companyLink: 'https://ibotta.com',
      title: 'Senior Full Stack Engineer',
      description: [
        'Spearheaded the development of the logged-in web experience, catering to a rapidly growing user base of 200,000+ monthly active users.',
        'Successfully led two cross-functional squads consisting of 11 engineers, prioritizing feature development to enhance our logged-in web experience.',
        'Thrived in a high-paced, feature development-focused environment, demonstrating adaptability and efficiency in delivering top-tier solutions.',
        'Played a pivotal role in the professional growth of several associate, mid-level, and senior engineers through mentorship and guidance.',
      ],
      skills: [
        'VueJS',
        'NodeJS',
        'React',
        'GraphQL',
        'Cloudfront',
        'CI/CD',
        'Ruby/Rails',
        'TypeScript',
        'Terraform',
        'Tailwind',
        'NuxtJS',
        'Docker',
        'Figma',
        'DynamoDB',
        'MySQL',
      ],
    },
    {
      id: 4,
      timeLine: '2019 - 2021',
      company: 'Ibotta Inc',
      companyLink: 'https://ibotta.com',
      title: 'Sofware Engineer (Backend)',
      description: [
        'Drove initiatives aimed at enhancing core user experiences, ensuring the continued satisfaction of our user base.',
        'Demonstrated proficiency in building and maintaining robust microservices using Node, Java, Kotlin, and Rails, optimizing system performance and reliability.',
      ],
      skills: [
        'NodeJS',
        'Java',
        'Ruby/Rails',
        'Kotlin',
        'TypeScript',
        'Micro-services',
        'Event Driven Architecture',
        'DynamoDB',
        'Kubernetes',
        'ElasticSearch',
        'GraphQL',
        'Docker',
        'MySQL',
      ],
    },
    {
      id: 3,
      timeLine: '2018 - 2019',
      company: 'Granicus Inc',
      companyLink: 'https://granicus.com/',
      title: 'Sofware Engineer',
      description: [
        'Utilized a diverse skill set in Java, PHP, and .NET to maintain and enhance core legacy products, encompassing a wide spectrum of domains, including video, agenda and records management, and website design.',
      ],
      skills: [
        'PHP',
        'JavaScript',
        'Java',
        '.NET',
        'Classic ASP',
        'Ruby',
        'Travis',
        'MSSQL',
        'MySQL',
      ],
    },
    {
      id: 2,
      timeLine: '2015 - 2018',
      company: 'Granicus Inc.',
      companyLink: 'https://granicus.com/',
      title: 'Web Developer / Designer',
      description: [
        'Spearheaded management and feature development of legacy Classic ASP content management systems for government websites, ensuring improved functionality, security, and user experience.',
      ],
      skills: [
        'PHP',
        'Classic ASP',
        'JavaScript',
        'Smarty',
        'Freemarker',
        'Jira',
        'Salesforce',
        'MSSQL',
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: 'Roulette Strategy Helper',
      img: 'RouletteStratHelper.png',
      description:
        'Roulette Strategy helper site that allows users to personalize their gambling experience based off their bankroll and learn from strategies from a popular content creator.',
      description2:
        'With this project, I helped out a content creator share his strategies with his audience.',
      keyTechnologies: {
        'Frontend Framework':
          'The site was developed using the power and flexibility of ReactJS, ensuring a dynamic and interactive user experience.',
        Styling:
          'Tailwind CSS played a significant role in shaping the visual identity and responsiveness of this site, making it as visually appealing as it is functional.',
        Deployment:
          'The site is seamlessly accessible to the world, thanks to its deployment on GitHub Pages, making it available for anyone to explore and appreciate.',
      },
      altText: 'roulette strategy helper screenshot',
      url: 'https://ishawshank.github.io/roulette-strategy-helper/',
      imgType: 'landscape',
    },
    {
      id: 2,
      name: 'Golf launch monitor averages',
      img: 'PGATourAverages.png',
      description:
        'Presenting a web application designed to elevate the Golf Simulator experience by showcasing PGA Tour launch monitor stat averages. Crafted with precision and expertise, this project encapsulates the essence of golf and technology.',
      description2:
        "With this project, I've blended a passion for golf with technical acumen to create a platform that enhances the experience of golf enthusiasts and simulator users.",
      keyTechnologies: {
        Framework:
          'React was perfect for this project as it needed to be responsive, fast, and lightweight. I also added Tailwind CSS to ensure consisistent design across the site.',
        'Visual Appeal':
          'I worked with a very large group of fellow Golf Simulator Enthusiasts to ensure the design and functionality of the application met the needs of the community.',
      },
      altText: 'PGA Tour Averages screenshot',
      url: 'https://ishawshank.github.io/golf-launch-monitor-averages/',
      imgType: 'landscape',
    },
    {
      id: 3,
      name: 'Ibotta.com web experience',
      img: 'Ibotta.png',
      description: `Logged in web experience for Ibotta Inc that enables full access to all Ibotta's direct to consumer offers and user flows.`,
      description2: `From conception to reality, I led the technical direction across the Web Domain and was influential across the entire site. I've influenced every user flow and component within the domain.`,
      keyTechnologies: {
        Framework:
          'Vue, Nuxt, Vuex, Apollo, GraphQL and Tailwind were used for this large web application.',
      },
      altText: 'Ibotta.com image',
      imgType: 'landscape',
      url: 'https://ibotta.com/home',
    },
  ],
};
