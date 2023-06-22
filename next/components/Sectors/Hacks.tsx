import { Avatar, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import Title from '../Text/Title'
import TitledSection from '../Text/TitledSection'
import { hacks } from '@/utils/info'
import SmallTitle from '../Text/SmallTitle'

export default function Hacks(props: {
  onVisibilityChanged: (section: string, visible: boolean) => void
}) {
  const { ref, inView } = useInView()

  useEffect(() => {
    props.onVisibilityChanged('hacks', inView)
  }, [inView])

  return (
    <Stack id={'hacks'} spacing={10} ref={ref}>
      <Title>Hacks</Title>
      {hacks.map((hack, i) => (
        <TitledSection
          key={i}
          title={hack.name}
          logo={hack.logo}
          hasBorder={true}
        >
          <Text fontSize={'lg'}>{hack.date}</Text>
          <TitledSection title={hack.project} hasPb={true}>
            {hack.prizes.map((prize, i) => (
              <HStack key={i}>
                <SmallTitle titleSize={'md'}>
                  {prize.nomination}
                  {' --- '}
                </SmallTitle>
                <HStack>
                  <SmallTitle titleSize={'sm'}>{prize.sponsor.name}</SmallTitle>
                  <Avatar src={prize.sponsor.logo} size={'sm'} />
                </HStack>
              </HStack>
            ))}
          </TitledSection>
        </TitledSection>
      ))}
    </Stack>
  )
}
