import {
  UnorderedList,
  ListItem,
  List,
  Stack,
  Text,
  HStack,
  Heading,
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import { me } from '@/utils/info'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import Title from '../Text/Title'
import TextContainer from '../Text/TextContainer'
import TitledSection from '../Text/TitledSection'

export default function Me(props: {
  onVisibilityChanged: (section: string) => void
}) {
  const { ref, inView } = useInView()

  useEffect(() => {
    inView && props.onVisibilityChanged('me')
    !inView && props.onVisibilityChanged('projects')
  }, [inView])

  return (
    <Stack id={'me'} p={4} spacing={10} ref={ref}>
      <Title>Andrey Gruzdev</Title>
      <TitledSection title={'Summary'}>
        <TextContainer>
          {me.summary.map((item, i) => (
            <Text key={i}>{item}</Text>
          ))}
        </TextContainer>
      </TitledSection>
      <TitledSection title={'Work Experience'}>
        <UnorderedList spacing={2}>
          {me.workExperience.map((item, i) => (
            <ListItem key={i}>
              <Text fontWeight={'bold'}>{item.location}</Text>
              <HStack spacing={2}>
                <Text>{item.dates}</Text>
                <CalendarIcon />
              </HStack>
            </ListItem>
          ))}
        </UnorderedList>
      </TitledSection>
      <TitledSection title={'Education'}>
        <Text>{me.education}</Text>
      </TitledSection>
      <TitledSection title={'Skills'} spacing={'7'}>
        <TitledSection title={'Langs'} titleSize={'md'}>
          <Text>{me.skills.langs}</Text>
        </TitledSection>
        <TitledSection title={'Back-end stack'} titleSize={'md'}>
          <Text>{me.skills.back}</Text>
        </TitledSection>
        <TitledSection title={'Front-end stack'} titleSize={'md'}>
          <Text>{me.skills.front}</Text>
        </TitledSection>
        <TitledSection title={'Worked with'} titleSize={'md'}>
          <Text>{me.skills.chains}</Text>
        </TitledSection>
        <TitledSection title={'Other'} titleSize={'md'}>
          <Text>{me.skills.other}</Text>
        </TitledSection>
      </TitledSection>
    </Stack>
  )
}
