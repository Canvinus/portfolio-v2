import {
  HStack,
  Stack,
  Text,
  List,
  ListItem,
  Flex,
  ListIcon,
  Box,
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { hacks } from '@/utils/info'

import Title from '../Text/Title'
import TitledSection from '../Text/TitledSection'
import SmallTitle from '../Text/SmallTitle'
import NextAvatar from '../Common/NextAvatar'
import TrophyIcon from '../Icons/TrophyIcon'

export default function Hacks(props: {
  onVisibilityChanged: (section: string, visible: boolean) => void
  opacity?: string
}) {
  const { ref, inView } = useInView()

  useEffect(() => {
    props.onVisibilityChanged('hacks', inView)
  }, [inView])

  return (
    <Stack id={'hacks'} spacing={10} ref={ref} opacity={props.opacity}>
      <Title>Hacks</Title>
      {hacks.map((hack, i) => (
        <TitledSection
          key={i}
          title={hack.name}
          logo={hack.logo}
          hasBorder={true}
          align={'center'}
          justify={'center'}
          hasPb={true}
        >
          <Text fontSize={'lg'}>{hack.date}</Text>
          <TitledSection
            title={hack.project}
            titleSize={'2xl'}
            hasPb={true}
            align={'center'}
            justify={'center'}
            spacing={'8'}
          >
            <Flex>
              <List spacing={{ md: 2, base: 8 }}>
                {hack.prizes.map((prize, i) => (
                  <ListItem key={i}>
                    <HStack
                      spacing={'2'}
                      alignItems={'center'}
                      justifyContent={{ md: 'start', base: 'center' }}
                    >
                      <Box boxSize={'3'} display={{ md: 'flex', base: 'none' }}>
                        <ListIcon as={TrophyIcon} />
                      </Box>
                      <SmallTitle titleSize={'md'}>
                        <Stack
                          direction={{ md: 'row', base: 'column' }}
                          alignItems={'center'}
                        >
                          <Text>{prize.nomination}</Text>
                          <Text display={{ md: 'flex', base: 'none' }}>
                            {' - '}
                          </Text>
                          <Text display={{ md: 'none', base: 'flex' }}>
                            {'(by)'}
                          </Text>
                          <HStack>
                            <Text>{prize.sponsor.name}</Text>
                            <NextAvatar
                              src={prize.sponsor.logo}
                              alt={prize.sponsor.logo}
                              size={20}
                            />
                          </HStack>
                        </Stack>
                      </SmallTitle>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </Flex>
          </TitledSection>
          <Flex pb={2} />
        </TitledSection>
      ))}
    </Stack>
  )
}
