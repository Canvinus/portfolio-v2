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
            <Flex px={5}>
              <List spacing={2}>
                {hack.prizes.map((prize, i) => (
                  <ListItem key={i}>
                    <HStack spacing={'2'}>
                      <Box boxSize={'3'}>
                        <ListIcon as={TrophyIcon} />
                      </Box>
                      <SmallTitle titleSize={'md'}>
                        <HStack>
                          <Text isTruncated>
                            {prize.nomination}
                            {' - '}
                          </Text>
                          <HStack>
                            <Text>{prize.sponsor.name}</Text>
                            <NextAvatar
                              src={prize.sponsor.logo}
                              alt={prize.sponsor.logo}
                              size={20}
                            />
                          </HStack>
                        </HStack>
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
