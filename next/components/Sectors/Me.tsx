import { UnorderedList, ListItem, Stack, Text, HStack } from '@chakra-ui/react'
import { CalendarIcon, ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
import { me } from '@/utils/info'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import NextLink from 'next/link'
import Image from 'next/image'
import Title from '../Text/Title'
import TitledSection from '../Text/TitledSection'
import DefaultTooltip from '../Common/DefaultTooltip'

export default function Me(props: {
  onVisibilityChanged: (section: string, visible: boolean) => void
  opacity?: string
}) {
  const { ref, inView } = useInView()

  useEffect(() => {
    props.onVisibilityChanged('me', inView)
  }, [inView])

  return (
    <Stack id={'me'} spacing={10} ref={ref} opacity={props.opacity}>
      <Stack alignItems={'center'} justifyContent={'center'} spacing={4}>
        <Title>Andrey Gruzdev</Title>
        <video autoPlay muted playsInline preload={'auto'} loop>
          <source
            src={
              'https://ipfs.io/ipfs/bafybeidhcnamziwlmtehc667joe5n7a2epbcvxoxibcitczfjafmj47gyu/me_final.mp4'
            }
            type={'video/mp4'}
          />
        </video>
      </Stack>
      <TitledSection
        title={'Summary'}
        hasBorder={true}
        isUpperCase={true}
        hasPb={true}
      >
        {me.summary.map((item, i) => (
          <Text key={i}>{item}</Text>
        ))}
      </TitledSection>
      <TitledSection
        title={'Work Experience'}
        hasPb={true}
        hasBorder={true}
        isUpperCase={true}
      >
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
      <TitledSection
        title={'Education'}
        hasBorder={true}
        isUpperCase={true}
        hasPb={true}
      >
        <Text>{me.education}</Text>
      </TitledSection>
      <TitledSection
        title={'Skills'}
        spacing={'7'}
        hasBorder={true}
        isUpperCase={true}
        hasPb={true}
      >
        <TitledSection title={'Langs'} titleSize={'lg'}>
          <Text>{me.skills.langs}</Text>
        </TitledSection>
        <TitledSection title={'Back-end stack'} titleSize={'lg'}>
          <Text>{me.skills.back}</Text>
        </TitledSection>
        <TitledSection title={'Front-end stack'} titleSize={'lg'}>
          <Text>{me.skills.front}</Text>
        </TitledSection>
        <TitledSection title={'Worked with'} titleSize={'lg'}>
          <Text>{me.skills.chains}</Text>
        </TitledSection>
        <TitledSection title={'Other'} titleSize={'lg'}>
          <Text>{me.skills.other}</Text>
        </TitledSection>
      </TitledSection>
      <DefaultTooltip label={'Open CV'}>
        <NextLink href={me.cvLink} target={'_blank'}>
          <Title>
            <ExternalLinkIcon />
          </Title>
        </NextLink>
      </DefaultTooltip>
    </Stack>
  )
}
