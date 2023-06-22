import { ReactNode } from 'react'
import { Stack, HStack, Flex } from '@chakra-ui/react'

import NextAvatar from '../Common/NextAvatar'
import SmallTitle from '@/components/Text/SmallTitle'

export default function TitledSection(props: {
  title: string
  titleSize?: string
  children: ReactNode
  spacing?: string
  display?: string
  isUpperCase?: boolean
  hasBorder?: boolean
  hasPb?: boolean
  hasUnderline?: boolean
  logo?: string
}) {
  return (
    <Stack
      display={props.display}
      borderWidth={'1px'}
      borderColor={'white'}
      borderStyle={props.hasBorder ? 'dotted' : 'none'}
      rounded={'lg'}
      p={props.hasBorder ? 2 : 0}
    >
      <HStack spacing={3}>
        <SmallTitle
          titleSize={props.titleSize}
          isUppercase={props.isUpperCase}
          hasPb={props.hasPb}
          hasUnderline={props.hasUnderline}
        >
          {props.title}
        </SmallTitle>
        {props.logo && (
          <NextAvatar
            src={props.logo}
            alt={'logo'}
            display={props.logo ? 'flex' : 'none'}
            size={30}
          />
        )}
      </HStack>
      <Stack spacing={props.spacing}>{props.children}</Stack>
    </Stack>
  )
}
