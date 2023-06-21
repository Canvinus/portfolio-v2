const me = {
  summary: [
    `With my extensive experience as a full-stack developer and expertise in DevOps, I possess a wealth of knowledge in various software design patterns. I excel in back-end technologies, specifically ASP .NET Core, Nest.js, Express.js, and TypeScript, which enable me to create high-performing and efficient applications. My love for containerization fuels my passion for development, as I believe it helps to improve development speed and efficiency. Furthermore, my in-depth understanding of RDBSM, as well as my experience with NoSQL DBs, adds to my versatility as a developer.`,
    `On the front-end side, I am skilled in React and Next.js, both of which are essential for building responsive and engaging user interfaces. My extensive experience working with different web3 frameworks has provided me with a deep understanding of blockchain technology and its applications.`,
    `As a team player, I excel in Agile methodologies and am adept at adapting to changing circumstances. My main passion is in blockchain development, and I am committed to immersing myself in the web3 space to make it a better place for the end-user. By working on projects that create a more decentralized and equitable internet, I strive to contribute to a better world. With my skills, experience, and drive to make a difference, I am confident that I can make a valuable contribution to any team or project.`,
  ],
  workExperience: [
    {
      location: 'Amkapital - Moscow, Russia',
      dates: '11/2020 - 07/2021',
    },
    {
      location: 'Infostrategic - Dubai, UAE',
      dates: '04/2022 - 09/2022',
    },
  ],
  education: 'BA of Computer Science - Higher School of Economics',
  skills: {
    langs: 'TS, JS, C++, C#, Rust, Python, SQL',
    back: 'Docker, nginx, nest.js, express.js, ASP .NET Core, EF, SignalR, RDBMS, redis, MongoDB',
    front: 'Next.js, React, chakra, wagmi, rainbowkit, thirdweb, ethers.js',
    chains: 'evm, filecoin, near',
    other: 'ipfs, git, swagger, agile, OAuth 2.0',
  },
}

const projects = [
  {
    title: 'Warp Drive',
    description:
      'Embark on a thrilling, cross-chain odyssey that pushes the boundaries of blockchain gaming and showcases the might of the Axelar Network! Prepare to wage war across four distinct blockchains, engaging in relentless combat for power and control in a game that is equal parts immersive, secure, and exhilarating. In this epochal struggle, only one chain shall reign supreme.',
    stack:
      'axelar, moralis, node.js (express), React, Next.js, rainbowkit, wagmi, ethers.js, docker, nginx, hardhar, foundry',
    links: [
      {
        title: 'Project Page',
        href: 'https://twitter.com/easya_app/status/1642623297052618752?s=46&t=wWGh6aBdBOA2phlNMj_ZFQ',
      },
      {
        title: 'MVP',
        href: 'https://wdrive.io',
      },
      {
        title: 'Github',
        href: 'https://github.com/Canvinus/warp-drive',
      },
    ],
  },
  {
    title: 'MONKEY BUSINESS',
    description:
      'The Infinite Monkey Theorem is a fascinating and thought-provoking concept in the realm of mathematics and probability theory. It posits that if a monkey were to randomly hit keys on a typewriter for an infinite amount of time, it would eventually produce a complete and perfect piece of literature, such as the works of Shakespeare. While the idea may seem far-fetched, it highlights the power of probability and the potential for rare events to occur given enough time.',
    stack: 'React, Next, tailwindcss, rainbowkit',
    links: [
      {
        title: 'MVP',
        href: 'https://agruz.dev/monkey-business',
      },
      {
        title: 'Github',
        href: 'https://github.com/Canvinus/monkey-business',
      },
    ],
  },
  {
    title: 'CRYPTOLIO',
    description: `Display information about any Externally Owned Account on Ethereum Mainnet. It displays every ERC-20 token on an animated canvas, pie-chart of account's ERC-20 portfolio, also the total ETH balance and ERC-20 tokens balance. Use the Search Bar to lookup for any EOA on the eth network or connect your metamask wallet.`,
    stack: 'node.js (express), React, ethers.js, moralis',
    links: [
      {
        title: 'MVP',
        href: 'https://agruz.dev/cryptolio',
      },
      {
        title: 'Github',
        href: 'https://github.com/Canvinus/cryptolio',
      },
    ],
  },
  {
    title: 'MULTI-USER CHAT',
    description: `Introducing a versatile chat subsystem designed to seamlessly integrate with various Jitsi-Meet projects. This powerful tool enhances the collaborative experience by enabling smooth communication and instant messaging capabilities within the Jitsi-Meet ecosystem. With its user-friendly interface and robust functionality, the chat subsystem is the perfect addition to any Jitsi-Meet implementation.`,
    stack:
      'ASP.NET Core, SignalR, Entity Framework, Oracle DB, swagger, OAuth 2.0',
    links: [
      {
        title: 'MVP',
        href: 'https://muchat.infostrategic.com/web',
      },
      {
        title: 'Github',
        href: 'https://github.com/Canvinus/muchat',
      },
    ],
  },
  {
    title: 'LIVE ATTENDANCE MONITORING SERVICE',
    description: `Introducing a cutting-edge monitoring service that utilizes powerful machine learning algorithms to ensure that only authentic individuals are present in your online meetings. With our app, you can effortlessly schedule or join meetings with ease. Our app also comes equipped with advanced moderator features that allow for seamless user moderation, real-time monitoring, and comprehensive report generation at the end of each meeting. You can trust our service to provide you with a secure and reliable online meeting experience.`,
    stack:
      'ASP.NET Core, Entity Framework, flask, selenium web driver, jitsi-meet, Oracle DB, swagger, JWT Auth',
    links: [
      {
        title: 'MVP',
        href: 'https://smartconf.infostrategic.com/web',
      },
      {
        title: 'Github',
        href: 'https://github.com/Canvinus/smartconf',
      },
    ],
  },
]

export { me, projects }
