import { projects } from '@/utils/info'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import NextLink from 'next/link'
import Title from '../Text/Title'
import TitledSection from '../Text/TitledSection'

export default function Projects(props: {
  onVisibilityChanged: (section: string, visible: boolean) => void
  opacity?: string
}) {
  const { ref, inView } = useInView()

  useEffect(() => {
    props.onVisibilityChanged('projects', inView)
  }, [inView])

  return (
    <Stack id={'projects'} spacing={10} ref={ref} opacity={props.opacity}>
      <Title>Projects</Title>
      {projects.map((item, i) => (
        <TitledSection
          key={i}
          title={item.title}
          spacing={'7'}
          hasBorder={true}
          hasPb={true}
        >
          {item.backers ? (
            <TitledSection
              title={'Backers'}
              titleSize={'md'}
              hasUnderline={true}
            >
              <>
                {item.backers.map((backer, i) => (
                  <HStack key={i}>
                    <Text>{backer.name}</Text>
                  </HStack>
                ))}
              </>
            </TitledSection>
          ) : null}
          <TitledSection
            title={'Description'}
            titleSize={'md'}
            hasUnderline={true}
            display={item.description ? 'block' : 'none'}
          >
            <Text>{item.description}</Text>
          </TitledSection>
          <TitledSection
            title={'Used Stack'}
            titleSize={'md'}
            hasUnderline={true}
          >
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
