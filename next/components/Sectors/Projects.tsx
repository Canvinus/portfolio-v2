import { Text, Stack, HStack, Flex } from '@chakra-ui/react'
import { projects } from '@/utils/info'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import NextLink from 'next/link'
import TitledSection from '../Text/TitledSection'
import Title from '../Text/Title'

export default function Projects(props: {
  onVisibilityChanged: (section: string, visible: boolean) => void
}) {
  const { ref, inView } = useInView()

  useEffect(() => {
    props.onVisibilityChanged('projects', inView)
  }, [inView])

  return (
    <Stack id={'projects'} spacing={10} ref={ref}>
      <Title>Projects</Title>
      {projects.map((item, i) => (
        <TitledSection
          key={i}
          title={item.title}
          spacing={'7'}
          hasBorder={true}
        >
          <TitledSection
            title={'Description'}
            titleSize={'md'}
            display={item.description ? 'flex' : 'none'}
          >
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
