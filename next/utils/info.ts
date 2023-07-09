const me = {
  image:
    'https://ipfs.io/ipfs/bafybeiedloskfopzcn4fdeo2huyskf2hmosd6danh4ogbc2bdqihhd3qge/finish_andre.jpeg',
  summary: [
    `I am an experienced full-stack developer with expertise in DevOps and knowledge of various software design patterns. My strength lies in back-end technologies such as ASP .NET Core, Nest.js, and Express.js with TypeScript, as well as my love for containerization. I am well-versed in RDBSM and have experience with NoSQL DBs. On the front-end side, I excel in React and Next.js and have worked with various web3 frameworks. As a team player, I am experienced in Agile methodologies and passionate about blockchain development, with a goal to improve the web3 space for the end-user.`,
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
  cvLink:
    'https://ipfs.io/ipfs/bafybeifoplrvdm4tcmtrdwmmykw6uq6nl7eoxojfe7vh32b5hwwmknbd6a/CV_JUN_23.pdf',
}

const projects = [
  {
    title: 'Enode',
    description:
      'Enode is an universal encryption node for IPFS that can be used for securing private data on any public blockchain. Enode v1.1 is an improved version of original Enode that was created during ETHGlobal 2023 Scaling Ethereum. This version became more secure by using sign in with ethereum to ensure that data will not be exposed to the third party. Also, supports both encryption of files and json data.',
    stack: 'Next, React, chakra, thirdweb, nestjs, ipfs, docker, nginx',
    links: [
      {
        title: 'MVP',
        href: 'https://enode.2bb.dev',
      },
    ],
  },
  {
    title: 'Warp Drive',
    description:
      'Embark on a thrilling, cross-chain odyssey that pushes the boundaries of blockchain gaming and showcases the might of the Axelar Network! Prepare to wage war across four distinct blockchains, engaging in relentless combat for power and control in a game that is equal parts immersive, secure, and exhilarating. In this epochal struggle, only one chain shall reign supreme.',
    stack:
      'axelar, moralis, express, React, Next, rainbowkit, wagmi, ethers.js, docker, nginx, hardhar, foundry, docker, nginx',
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
    title: 'TimePact',
    description:
      'TimePact allows users to create secure time capsules containing specific data, with an expiration date, that can be unlocked using special NFTs. These NFTs can be easily transferred between accounts and bridged to other blockchains.',
    stack:
      'express, React, Next, rainbowkit, wagmi, ethers.js, FEVM, IPFS, docker, nginx, hardhat, foundry, docker, nginx',
    links: [
      {
        title: 'Project Page',
        href: 'https://ethglobal.com/showcase/timepact-1mof1',
      },
      {
        title: 'MVP',
        href: 'https://timepact.xyz',
      },
      {
        title: 'Github',
        href: 'https://github.com/Canvinus/TimePact',
      },
    ],
  },
  {
    title: 'Monkey Business',
    description:
      'The Infinite Monkey Theorem is a fascinating and thought-provoking concept in the realm of mathematics and probability theory. It posits that if a monkey were to randomly hit keys on a typewriter for an infinite amount of time, it would eventually produce a complete and perfect piece of literature, such as the works of Shakespeare. While the idea may seem far-fetched, it highlights the power of probability and the potential for rare events to occur given enough time.',
    stack: 'React, Next, tailwindcss, rainbowkit',
    links: [
      {
        title: 'Site',
        href: 'https://monkeybiz.agruz.dev',
      },
      {
        title: 'Github',
        href: 'https://github.com/Canvinus/monkey-business',
      },
    ],
  },
  {
    title: 'Cryptolio',
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
    title: 'Multi-User Chat',
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
    title: 'Student Attendance Monitoring Service',
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

const hacks = [
  {
    name: 'Harvard Blockchain x EasyA Hackathon',
    logo: 'https://pbs.twimg.com/profile_images/1655494003935019008/aHyxX6iG_400x400.jpg',
    date: '31 March - 2 April 2023',
    project: 'Warp Drive',
    prizes: [
      {
        nomination: '"1st Place"',
        sponsor: {
          name: 'Axelar',
          logo: 'https://avatars.githubusercontent.com/u/67522309?s=280&v=4',
        },
      },
    ],
  },
  {
    name: 'ETHGLobal Scaling Ethereum 2023',
    logo: 'https://storage.googleapis.com/ethglobal-api-production/events%2Fof2r2%2Flogo%2F1671503482706_scaling-ethereum-square-logo.svg',
    date: '10 - 31 March 2023',
    project: 'TimePact',
    prizes: [
      {
        nomination: '"Best Primitives or Infra"',
        sponsor: {
          name: 'FVM',
          logo: 'https://storage.googleapis.com/ethglobal-api-production/organizations%2F9zj01%2Flogo%2F1677081097389_FVM%20square%20logo.png',
        },
      },
      {
        nomination: '"Just Deploy!"',
        sponsor: {
          name: 'Scroll',
          logo: 'https://storage.googleapis.com/ethglobal-api-production/organizations%2Fyip67%2Fimages%2FETH%20Tokyo%202023%20_logo_400_400%402x.png',
        },
      },
    ],
  },
]

const socials = [
  { label: 'Github', href: 'https://github.com/canvinus' },
  { label: '2bb', href: 'https://2bb.dev' },
  { label: 'twitter', href: 'https://twitter.com/Canvinus' },
  { label: 'telegram', href: 'https://t.me/canvi' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrey-gruzdev-4643a9236',
  },
]

export { me, projects, hacks, socials }
