import { Text, Stack, HStack, Flex } from '@chakra-ui/react'
import { projects } from '@/utils/info'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import NextLink from 'next/link'
import TitledSection from '../Text/TitledSection'
import Title from '../Text/Title'

export default function Projects() {
  return (
    <Stack id={'projects'} p={4} spacing={10}>
      <Title>Projects</Title>
      {projects.map((item, i) => (
        <TitledSection key={i} title={item.title} spacing={'7'}>
          <TitledSection title={'Description'} titleSize={'md'}>
            <Text>{item.description}</Text>
          </TitledSection>
          <TitledSection title={'Used Stack'} titleSize={'md'}>
            <Text>{item.stack}</Text>
          </TitledSection>
          <Stack spacing={4}>
            {item.links.map((link, i) => (
              <Flex key={i}>
                <NextLink href={link.href} target={'_blank'}>
                  <Text fontWeight={'bold'}>
                    {link.title} <ExternalLinkIcon />
                  </Text>
                </NextLink>
              </Flex>
            ))}
          </Stack>
        </TitledSection>
      ))}
    </Stack>
  )
}
