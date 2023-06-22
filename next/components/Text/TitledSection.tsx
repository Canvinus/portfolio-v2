import { ReactNode } from 'react'
import { Stack, Flex } from '@chakra-ui/react'

import SmallTitle from '@/components/Text/SmallTitle'

export default function TitledSection(props: {
  title: string
  titleSize?: string
  children: ReactNode
  spacing?: string
  display?: string
  hasBorder?: boolean
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
      <SmallTitle titleSize={props.titleSize}>{props.title}</SmallTitle>
      <Stack spacing={props.spacing}>{props.children}</Stack>
    </Stack>
  )
}
