import { Heading, Stack, Text } from '@chakra-ui/react'

import SmallTitle from '../Text/SmallTitle'
import Title from '../Text/Title'
import TextContainer from '../Text/TextContainer'

export default function Me() {
  return (
    <Stack id={'me'} p={4}>
      <Title>Andrey Gruzdev</Title>
      <SmallTitle>Summary</SmallTitle>
      <TextContainer>
        <Text>
          With my extensive experience as a full-stack developer and expertise
          in DevOps, I possess a wealth of knowledge in various software design
          patterns. I excel in back-end technologies, specifically ASP .NET
          Core, Nest.js, Express.js, and TypeScript, which enable me to create
          high-performing and efficient applications. My love for
          containerization fuels my passion for development, as I believe it
          helps to improve development speed and efficiency. Furthermore, my
          in-depth understanding of RDBSM, as well as my experience with NoSQL
          DBs, adds to my versatility as a developer.
        </Text>
        <Text>
          On the front-end side, I am skilled in React and Next.js, both of
          which are essential for building responsive and engaging user
          interfaces. My extensive experience working with different web3
          frameworks has provided me with a deep understanding of blockchain
          technology and its applications.
        </Text>
        <Text>
          As a team player, I excel in Agile methodologies and am adept at
          adapting to changing circumstances. My main passion is in blockchain
          development, and I am committed to immersing myself in the web3 space
          to make it a better place for the end-user. By working on projects
          that create a more decentralized and equitable internet, I strive to
          contribute to a better world. With my skills, experience, and drive to
          make a difference, I am confident that I can make a valuable
          contribution to any team or project.
        </Text>
      </TextContainer>
    </Stack>
  )
}
